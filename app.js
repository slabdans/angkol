'use strict';

(() => {
    const state = {
        currentIndex: 0,
        activeCaseSection: null,
        selectedPolicyItem: null,
        mode: null,
        activeQuestions: [],
        answers: {},
        submitted: new Set(),
        timerSeconds: 0,
        timerId: null,
        completed: false
    };

    const REQUIRED_ELEMENT_IDS = [
        'portal-layout',
        'question-counter',
        'feedback-box',
        'jump-select',
        'prev-btn',
        'next-btn',
        'submit-btn',
        'setup-screen',
        'exam-screen',
        'results-screen',
        'practice-mode-btn',
        'simulation-mode-btn',
        'finish-exam-btn',
        'practice-start',
        'practice-end',
        'practice-random',
        'practice-case-studies',
        'practice-case-only',
        'selected-count',
    ];

    const byId = (id) => document.getElementById(id);

    function saveProgress() {
    localStorage.setItem(
        'sc300-progress',
        JSON.stringify({
            currentIndex: state.currentIndex,
            answers: state.answers,
            activeQuestions: state.activeQuestions,
            mode: state.mode
        })
    );
}

    function loadProgress() {
    const saved =
        localStorage.getItem('sc300-progress');

    if (!saved) return null;

    return JSON.parse(saved);
}
    function updateSelectedCount() {
    const start =
        Number(byId('practice-start').value) || 1;

    const end =
        Number(byId('practice-end').value) || start;

    const total =
        Math.max(0, end - start + 1);

    byId('selected-count').textContent =
        `Selected Questions: ${total}`;
}
    function escapeHtml(value) {
        return String(value ?? '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }

    function decodeHtmlEntities(value) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = String(value ?? '');
        return textarea.value;
    }

function cleanExplanationHtml(value) {

    let html = decodeHtmlEntities(value || "");

    html = html

        // remove empty paragraphs
        .replace(/<p>\s*<\/p>/gi, "")

        // remove invalid </br>
        .replace(/<\/br>/gi, "")

        // collapse multiple line breaks
        .replace(/(<br\s*\/?>\s*){2,}/gi, "<br>")

        // trim excessive leading breaks
        .replace(/^(<br\s*\/?>)+/gi, "")

        // trim excessive trailing breaks
        .replace(/(<br\s*\/?>)+$/gi, "")

        .trim();

    return html;
}

    function sanitizeRichHtml(value, allowDropdowns = false) {
        const template = document.createElement('template');
        template.innerHTML = String(value ?? '');

        const blockedTags = new Set([
            'SCRIPT', 'IFRAME', 'OBJECT', 'EMBED', 'LINK', 'META', 'BASE',
            'FORM', 'INPUT', 'BUTTON', 'TEXTAREA'
        ]);
        if (!allowDropdowns) {
            blockedTags.add('SELECT');
            blockedTags.add('OPTION');
        }

        const walker = document.createTreeWalker(
            template.content,
            NodeFilter.SHOW_ELEMENT
        );
        const elements = [];
        while (walker.nextNode()) elements.push(walker.currentNode);

        for (const element of elements) {
            if (blockedTags.has(element.tagName)) {
                element.remove();
                continue;
            }

            for (const attribute of [...element.attributes]) {
                const name = attribute.name.toLowerCase();
                const valueText = attribute.value.trim().toLowerCase();

                if (
                    name.startsWith('on') ||
                    name === 'srcdoc' ||
                    ((name === 'href' || name === 'src' || name === 'xlink:href') &&
                        valueText.startsWith('javascript:'))
                ) {
                    element.removeAttribute(attribute.name);
                }
            }
        }

        return template.innerHTML;
    }

    function getMasterQuestions() {
        if (typeof questions === 'undefined' || !Array.isArray(questions)) return null;
        return questions;
    }

    function getQuestions() {
        return state.activeQuestions.length ? state.activeQuestions : getMasterQuestions();
    }

    function shuffle(items) {
        const copy = [...items];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
        }
        return copy;
    }

    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return hours > 0
            ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateExamHeader() {
        const bank = getQuestions() || [];
        const question = bank[state.currentIndex];
        const timer = byId('exam-timer');
        const status = byId('exam-status');
        if (timer) timer.textContent = state.mode === 'simulation' ? formatTime(state.timerSeconds) : 'Practice';
        if (status && question) status.textContent = `Question ${state.currentIndex + 1} of ${bank.length} | ID #${question.id}`;
    }

    function startTimer() {
        if (state.timerId) clearInterval(state.timerId);
        if (state.mode !== 'simulation') return;
        state.timerId = setInterval(() => {
            state.timerSeconds -= 1;
            updateExamHeader();
            if (state.timerSeconds <= 0) finishSimulation(true);
        }, 1000);
    }

    function selectSimulationQuestions(master) {
        if (master.length < 60) throw new Error('At least 60 questions are required for Simulation Exam mode.');
        const caseStudies =
    shuffle(
        master.filter(question => question.isCaseStudy)
    );

const regular =
    shuffle(
        master.filter(question => !question.isCaseStudy)
    );

const selectedCases =
    caseStudies.slice(0, 5);

return [
    ...selectedCases,
    ...regular.slice(0, 55)
];
    }

    function validateQuestionBank(questionBank) {
        const errors = [];
        const seenIds = new Set();
        const validTypes = new Set(['radio', 'checkbox', 'dragdrop', 'dropdown', 'matrix']);

        questionBank.forEach((question, index) => {
            const position = `Question at array index ${index}`;

            if (!question || typeof question !== 'object') {
                errors.push(`${position} is not an object.`);
                return;
            }

            if (question.id == null) {
                errors.push(`${position} has no id.`);
            } else if (seenIds.has(question.id)) {
                errors.push(`Duplicate question id: ${question.id}.`);
            } else {
                seenIds.add(question.id);
            }

            if (!validTypes.has(question.type)) {
                errors.push(`${position} has unsupported type: ${question.type}.`);
            }

            if (question.type === 'radio') {
                if (!Array.isArray(question.options) || question.options.length < 2) {
                    errors.push(`${position} must contain at least two radio options.`);
                }
                if (!Number.isInteger(question.correctAnswer) ||
                    question.correctAnswer < 0 ||
                    question.correctAnswer >= (question.options?.length ?? 0)) {
                    errors.push(`${position} has an invalid radio correctAnswer.`);
                }
            }

            if (question.type === 'checkbox') {
                if (!Array.isArray(question.options) || question.options.length < 2) {
                    errors.push(`${position} must contain at least two checkbox options.`);
                }
                if (!Array.isArray(question.correctAnswer) ||
                    question.correctAnswer.length === 0 ||
                    question.correctAnswer.some(answer =>
                        !Number.isInteger(answer) ||
                        answer < 0 ||
                        answer >= (question.options?.length ?? 0)
                    )) {
                    errors.push(`${position} has an invalid checkbox correctAnswer array.`);
                }
            }

            if (question.type === 'dropdown') {
                if (!question.correctAnswer ||
                    typeof question.correctAnswer !== 'object' ||
                    Array.isArray(question.correctAnswer) ||
                    Object.keys(question.correctAnswer).length === 0) {
                    errors.push(`${position} must have a non-empty dropdown correctAnswer object.`);
                }
            }

            if (question.type === 'matrix') {
                if (!Array.isArray(question.rows) || question.rows.length === 0) {
                    errors.push(`${position} has no matrix rows.`);
                } else {
                    const rowIds = new Set();
                    question.rows.forEach((row, rowIndex) => {
                        if (!row || !row.id || !row.label) {
                            errors.push(`${position}, matrix row ${rowIndex}, is incomplete.`);
                        } else if (rowIds.has(row.id)) {
                            errors.push(`${position} has duplicate matrix row id: ${row.id}.`);
                        } else {
                            rowIds.add(row.id);
                        }
                    });
                }

                if (!question.correctAnswer ||
                    typeof question.correctAnswer !== 'object' ||
                    Array.isArray(question.correctAnswer)) {
                    errors.push(`${position} has invalid matrix correctAnswer data.`);
                } else if (Array.isArray(question.rows)) {
                    question.rows.forEach(row => {
                        if (!Object.prototype.hasOwnProperty.call(question.correctAnswer, row.id)) {
                            errors.push(`${position} has no matrix answer for row: ${row.id}.`);
                        }
                    });
                }
            }

            if (question.type === 'dragdrop') {
                if (!Array.isArray(question.availableItems) || question.availableItems.length === 0) {
                    errors.push(`${position} has no availableItems.`);
                }
                if (!Array.isArray(question.dropTargets) || question.dropTargets.length === 0) {
                    errors.push(`${position} has no dropTargets.`);
                } else {
                    question.dropTargets.forEach((target, targetIndex) => {
                        if (!target?.id || !target?.label || target.correctAnswer == null) {
                            errors.push(`${position}, drop target ${targetIndex}, is incomplete.`);
                        }
                    });
                }
            }
        });

        return errors;
    }

    function showFatalError(message, details = []) {
        console.error(message, details);
        const layout = byId('portal-layout');
        if (!layout) return;

        const detailList = details.length
            ? `<ul>${details.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
            : '';

        layout.innerHTML = `
            <div role="alert" style="padding:16px;border:1px solid #ef4444;border-radius:6px;background:#fef2f2;color:#991b1b;">
                <strong>${escapeHtml(message)}</strong>
                ${detailList}
            </div>
        `;
    }

    function renderTableHelper(tableData) {
        if (!tableData || !Array.isArray(tableData.headers) || !Array.isArray(tableData.rows)) {
            return '';
        }

        const headers = tableData.headers
            .map(header => `<th scope="col" style="border:1px solid #cbd5e1;padding:6px 8px;font-weight:600;">${escapeHtml(header)}</th>`)
            .join('');

        const rows = tableData.rows
            .map(row => `
                <tr style="background:#fff;">
                    ${(Array.isArray(row) ? row : [])
                        .map(cell => `<td style="border:1px solid #cbd5e1;padding:6px 8px;">${escapeHtml(cell)}</td>`)
                        .join('')}
                </tr>
            `)
            .join('');

        return `
            <div style="overflow-x:auto;margin:8px 0;border:1px solid #cbd5e1;">
                <table style="width:100%;border-collapse:collapse;font-size:12px;">
                    <thead><tr style="background:#fef3c7;text-align:left;">${headers}</tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }

    function renderQuestionText(question) {
        const usesEncodedRichText = question.type === 'dropdown' || question.type === 'matrix';
        const rawText = usesEncodedRichText
            ? decodeHtmlEntities(question.questionText)
            : question.questionText;
        return sanitizeRichHtml(rawText, question.type === 'dropdown');
    }

    function renderAnswerArea(question) {
        if ((question.type === 'radio' || question.type === 'checkbox') && Array.isArray(question.options)) {
            const inputType = question.type;
            return question.options.map((option, index) => `
                <label class="option-box" style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;margin-bottom:8px;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;background:#fff;transition:background .1s,border-color .1s;">
                    <input type="${inputType}" name="answer" value="${index}" style="margin-top:2px;width:16px;height:16px;accent-color:#2563eb;flex-shrink:0;">
                    <span style="font-size:14px;color:#1f2937;line-height:1.4;">${escapeHtml(option)}</span>
                </label>
            `).join('');
        }

        if (question.type === 'matrix') {
            const columns = Array.isArray(question.columns) && question.columns.length > 0
                ? question.columns
                : [
                    { value: 0, label: 'Yes' },
                    { value: 1, label: 'No' }
                ];

            return `
                <div class="matrix-wrapper">
                    <table class="matrix-table">
                        <thead>
                            <tr>
                                <th scope="col" class="matrix-statement-heading">Statements</th>
                                ${columns.map(column => `
                                    <th scope="col" class="matrix-choice-heading">${escapeHtml(column.label)}</th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${question.rows.map(row => `
                                <tr>
                                    <th scope="row" class="matrix-row-label">${escapeHtml(row.label)}</th>
                                    ${columns.map(column => `
                                        <td class="matrix-choice-cell">
                                            <input
                                                type="radio"
                                                class="matrix-input"
                                                name="matrix_${escapeHtml(row.id)}"
                                                value="${escapeHtml(column.value)}"
                                                aria-label="${escapeHtml(`${row.label}: ${column.label}`)}"
                                            >
                                        </td>
                                    `).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        if (question.type === 'dropdown') {
            return `
                <p style="margin:0;font-size:13px;color:#475569;">
                    Select an option in every dropdown shown above, then select Submit.
                </p>
            `;
        }

        if (question.type === 'dragdrop') {
            const availableItems = Array.isArray(question.availableItems) ? question.availableItems : [];
            const dropTargets = Array.isArray(question.dropTargets) ? question.dropTargets : [];

            return `
                <div style="margin-bottom:8px;font-size:12px;color:#475569;background:#f1f5f9;padding:6px 10px;border-radius:4px;">
                    <strong>Instructions:</strong> Select a policy type, then select an Answer Area box.
                </div>
                <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:16px;">
                    <div style="background:#f8fafc;border:1px solid #cbd5e1;padding:10px;border-radius:6px;">
                        <strong style="font-size:13px;display:block;margin-bottom:8px;color:#334155;">Policy Types</strong>
                        <div id="source-pool" style="display:flex;flex-direction:column;gap:6px;min-height:120px;">
                            ${availableItems.map((item, index) => `
                                <button type="button" class="policy-source-btn" data-action="select-policy" data-item-index="${index}" style="width:100%;text-align:left;background:#fff;border:1px solid #94a3b8;padding:8px;border-radius:4px;cursor:pointer;font-size:13px;box-shadow:0 1px 2px rgba(0,0,0,.05);">
                                    ${escapeHtml(item)}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:10px;">
                        <strong style="font-size:13px;color:#334155;">Answer Area</strong>
                        ${dropTargets.map((target, index) => `
                            <div style="display:flex;flex-direction:column;gap:4px;">
                                <span style="font-size:12px;font-weight:600;color:#475569;">${escapeHtml(target.label)}:</span>
                                <button type="button" class="drop-target" data-action="assign-policy" data-target-index="${index}" style="width:100%;background:#fff;border:2px dashed #cbd5e1;min-height:42px;padding:6px;border-radius:4px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;text-align:left;">
                                    <span class="placeholder-text" style="color:#94a3b8;font-style:italic;font-size:12px;">Select to assign policy type</span>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        return '<p role="alert">Unsupported question type.</p>';
    }

    function renderCaseStudy(question) {
        const overview = question.caseStudyOverview && typeof question.caseStudyOverview === 'object'
            ? question.caseStudyOverview
            : {};
        const caseKeys = Object.keys(overview);
        if (question.tableData) caseKeys.push('Security Incidents Table');

        const sections = caseKeys.map((key, index) => {
            const isExpanded = state.activeCaseSection === key;
            let contentHtml = '';

            if (key === 'Security Incidents Table') {
                contentHtml = renderTableHelper(question.tableData);
            } else {
                const sectionData = overview[key];
                const isObject = sectionData && typeof sectionData === 'object';
                const text = isObject ? sectionData.text : sectionData;
                const sectionTable = isObject ? sectionData.tableData : null;
                contentHtml = `<div style="font-size:13px;color:#334155;line-height:1.5;padding:0 4px;">${sanitizeRichHtml(text || 'No details available.')}</div>`;
                if (sectionTable) contentHtml += renderTableHelper(sectionTable);
            }

            return `
                <div>
                    <button type="button" data-action="toggle-case" data-section-index="${index}" aria-expanded="${isExpanded}" class="case-nav-btn" style="width:100%;text-align:left;${isExpanded ? 'background:#e2e8f0;border-color:#94a3b8;font-weight:bold;' : ''}">
                        <span aria-hidden="true" style="margin-right:8px;color:#1e3a8a;font-size:10px;">${isExpanded ? '▼' : '▶'}</span>
                        ${escapeHtml(key)}
                    </button>
                    ${isExpanded ? `
                        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-top:none;padding:8px 6px;border-radius:0 0 4px 4px;margin-top:-2px;margin-bottom:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,.05);overflow-x:auto;">
                            ${contentHtml}
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        return `
            <aside class="case-sidebar" style="display:flex;flex-direction:column;gap:6px;width:100%;">
                <div class="case-sidebar-title" style="font-weight:bold;margin-bottom:4px;">Case Study Overview</div>
                ${sections}
            </aside>
            <section>
                <div class="content-card">
                    <h2 style="font-size:16px;font-weight:bold;color:#0f172a;margin-bottom:8px;">${escapeHtml(question.title || '')}</h2>
                    <div style="font-size:14px;color:#1f2937;line-height:1.5;">${renderQuestionText(question)}</div>
                    <p style="font-size:14px;font-weight:bold;color:#111827;margin-top:8px;">${escapeHtml(question.prompt || '')}</p>
                </div>
                <div class="content-card" style="margin-bottom:0;">${renderAnswerArea(question)}</div>
            </section>
        `;
    }

    function renderStandardQuestion(question) {
        return `
            <section class="content-card" style="margin-bottom:12px;background:#fff;border:1px solid #cbd5e1;border-radius:6px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,.05);">
                ${question.title ? `<h2 style="font-size:16px;font-weight:bold;color:#0f172a;margin-bottom:8px;">${escapeHtml(question.title)}</h2>` : ''}
                <div style="font-size:14px;color:#1f2937;line-height:1.6;margin-bottom:10px;">${renderQuestionText(question)}</div>
                ${question.tableData ? renderTableHelper(question.tableData) : ''}
                ${question.prompt ? `<p style="font-size:14px;font-weight:600;color:#111827;margin-top:10px;">${escapeHtml(question.prompt)}</p>` : ''}
            </section>
            <section class="content-card" style="background:#fff;border:1px solid #cbd5e1;border-radius:6px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,.05);margin-bottom:0;">
                ${renderAnswerArea(question)}
            </section>
        `;
    }

    function renderQuestion() {
        const questionBank = getQuestions();
        const layout = byId('portal-layout');
        if (!questionBank || !layout) return;

        state.currentIndex = Math.min(Math.max(state.currentIndex, 0), questionBank.length - 1);
        const question = questionBank[state.currentIndex];
        state.selectedPolicyItem = null;

        const counter = byId('question-counter');
        if (counter) counter.textContent = `Question ${state.currentIndex + 1} of ${questionBank.length} | ID #${question.id}`;

        const feedback = byId('feedback-box');
        if (feedback) {
            feedback.hidden = true;
            feedback.style.display = 'none';
            feedback.innerHTML = '';
        }

        if (question.isCaseStudy) {
            layout.style.display = 'grid';
            layout.style.gridTemplateColumns = 'minmax(280px, 390px) minmax(0, 1fr)';
            layout.style.gap = '16px';
            layout.innerHTML = renderCaseStudy(question);
        } else {
            state.activeCaseSection = null;
            layout.style.display = 'block';
            layout.innerHTML = renderStandardQuestion(question);
        }

        restoreAnswer(question);
        updateNavButtons();
        updateExamHeader();
    }

    function populateJumpMenu() {
        const questionBank = getQuestions();
        const select = byId('jump-select');
        if (!questionBank || !select) return;

        select.innerHTML = questionBank.map((question, index) =>
            `<option value="${index}">Question ${escapeHtml(question.id)} (Index #${index + 1})</option>`
        ).join('');
        select.value = String(state.currentIndex);
    }

    function updateNavButtons() {
        const questionBank = getQuestions();
        if (!questionBank) return;

        const previousButton = byId('prev-btn');
        const nextButton = byId('next-btn');
        if (previousButton) previousButton.disabled = state.currentIndex === 0;
        if (nextButton) nextButton.disabled = state.currentIndex === questionBank.length - 1;
        const finishButton = byId('finish-exam-btn');
        if (finishButton) finishButton.hidden = state.mode !== 'simulation';
    }

    function moveQuestion(offset) {
        const questionBank = getQuestions();
        if (!questionBank) return;

        const nextIndex = state.currentIndex + offset;
        if (nextIndex < 0 || nextIndex >= questionBank.length) return;

        state.currentIndex = nextIndex;
        state.activeCaseSection = null;
        const select = byId('jump-select');
        if (select) select.value = String(state.currentIndex);
        renderQuestion();
    }

    function setOptionVisualState() {
        document.querySelectorAll('.option-box').forEach(box => {
            const input = box.querySelector('input[name="answer"]');
            const selected = Boolean(input?.checked);
            box.style.backgroundColor = selected ? '#eff6ff' : '#fff';
            box.style.borderColor = selected ? '#2563eb' : '#cbd5e1';
        });
    }

    function captureAnswer(question) {
        if (question.type === 'radio') {
            const selected = document.querySelector('input[name="answer"]:checked');
            return selected ? Number(selected.value) : null;
        }
        if (question.type === 'checkbox') {
            return [...document.querySelectorAll('input[name="answer"]:checked')]
                .map(input => Number(input.value)).sort((a, b) => a - b);
        }
        if (question.type === 'matrix') {
            const values = {};
            question.rows.forEach(row => {
                const selected = [...document.querySelectorAll('.matrix-input')]
                    .find(input => input.name === `matrix_${row.id}` && input.checked);
                values[row.id] = selected ? selected.value : '';
            });
            return values;
        }
        if (question.type === 'dropdown') {
            const values = {};
            document.querySelectorAll('select[data-key]').forEach(select => { values[select.dataset.key] = select.value; });
            return values;
        }
        if (question.type === 'dragdrop') {
            const values = {};
            document.querySelectorAll('.drop-target').forEach((target, index) => {
                const key = question.dropTargets[index]?.id || String(index);
                values[key] = target.dataset.assigned || '';
            });
            return values;
        }
        return null;
    }

    function isAnswerComplete(question, answer) {
        if (question.type === 'radio') return Number.isInteger(answer);
        if (question.type === 'checkbox') return Array.isArray(answer) && answer.length > 0;
        if (question.type === 'matrix') {
            return Boolean(answer) && question.rows.every(row =>
                answer[row.id] !== undefined && answer[row.id] !== ''
            );
        }
        if (question.type === 'dropdown') {
            return answer && Object.keys(question.correctAnswer).every(key => Boolean(answer[key]));
        }
        if (question.type === 'dragdrop') {
            return answer && question.dropTargets.every(target => Boolean(answer[target.id]));
        }
        return false;
    }

    function evaluateAnswer(question, answer) {
        if (question.type === 'radio') return Number(answer) === Number(question.correctAnswer);
        if (question.type === 'checkbox') {
            const selected = [...answer].sort((a, b) => a - b);
            const correct = [...question.correctAnswer].sort((a, b) => a - b);
            return selected.length === correct.length && selected.every((value, index) => value === correct[index]);
        }
        if (question.type === 'matrix') {
            return question.rows.every(row =>
                String(answer[row.id]) === String(question.correctAnswer[row.id])
            );
        }
        if (question.type === 'dropdown') {
            return Object.keys(question.correctAnswer).every(key => String(answer[key]) === String(question.correctAnswer[key]));
        }
        if (question.type === 'dragdrop') {
            return question.dropTargets.every(target => String(answer[target.id]) === String(target.correctAnswer));
        }
        return false;
    }

    function restoreAnswer(question) {
        const answer = state.answers[question.id];
        if (answer == null) return;
        if (question.type === 'radio') {
            const input = document.querySelector(`input[name="answer"][value="${answer}"]`);
            if (input) input.checked = true;
            setOptionVisualState();
        } else if (question.type === 'checkbox') {
            answer.forEach(value => {
                const input = document.querySelector(`input[name="answer"][value="${value}"]`);
                if (input) input.checked = true;
            });
            setOptionVisualState();
        } else if (question.type === 'matrix') {
            question.rows.forEach(row => {
                const savedValue = answer[row.id];
                if (savedValue === undefined || savedValue === '') return;
                const input = [...document.querySelectorAll('.matrix-input')]
                    .find(candidate =>
                        candidate.name === `matrix_${row.id}` &&
                        String(candidate.value) === String(savedValue)
                    );
                if (input) input.checked = true;
            });
        } else if (question.type === 'dropdown') {
            document.querySelectorAll('select[data-key]').forEach(select => { select.value = answer[select.dataset.key] || ''; });
        } else if (question.type === 'dragdrop') {
            document.querySelectorAll('.drop-target').forEach((target, index) => {
                const value = answer[question.dropTargets[index]?.id];
                if (!value) return;
                target.dataset.assigned = value;
                target.dataset.action = 'clear-assignment';
                target.innerHTML = `<span style="font-size:13px;color:#0f172a;font-weight:500;">${escapeHtml(value)}</span><span aria-hidden="true" style="color:#ef4444;font-weight:bold;font-size:16px;padding:0 4px;">×</span>`;
            });
        }
        if (state.mode === 'simulation' && state.submitted.has(question.id)) {
            document.querySelectorAll('input, select, button[data-action]').forEach(control => { control.disabled = true; });
            const submit = byId('submit-btn');
            if (submit) submit.disabled = true;
        }
    }

    function displayFeedback(isCorrect, question) {
        const feedback = byId('feedback-box');
        if (!feedback) return;

        feedback.hidden = false;
        feedback.style.display = 'block';
        feedback.innerHTML = `
            <div role="status" style="padding:10px;border-radius:6px;background:${isCorrect ? '#dcfce7' : '#fee2e2'};border:1px solid ${isCorrect ? '#22c55e' : '#ef4444'};margin-bottom:8px;">
                <strong style="color:${isCorrect ? '#166534' : '#991b1b'};font-size:14px;">${isCorrect ? '✓ Correct!' : '✕ Incorrect'}</strong>
            </div>
            <div style="padding:10px;border-radius:6px;background:${isCorrect ? '#f0fdf4' : '#fef2f2'};border:1px solid ${isCorrect ? '#bbf7d0' : '#fecaca'};">
                <strong style="color:#0f172a;">Explanation / Answer Details:</strong><br>
                

		<div style="font-size:13px;color:#334155;">
${sanitizeRichHtml(
    cleanExplanationHtml(
        question.correctAnswerText ||
        'Review the correct answer details.'
    )
)}
</div>
            </div>
        `;
    }

    function showSelectionWarning(message) {
        const feedback = byId('feedback-box');
        if (!feedback) return;
        feedback.hidden = false;
        feedback.style.display = 'block';
        feedback.innerHTML = `<span role="alert" style="color:#b91c1c;font-weight:bold;">${escapeHtml(message)}</span>`;
    }

    function submitCurrentAnswer() {
        const questionBank = getQuestions();
        const question = questionBank?.[state.currentIndex];
        if (!question) return;

        const answer = captureAnswer(question);
        if (!isAnswerComplete(question, answer)) {
            showSelectionWarning(
                question.type === 'dragdrop'
                    ? 'Please assign an answer to every box before submitting.'
                    : question.type === 'matrix'
                        ? 'Please select one answer for every statement before submitting.'
                        : 'Please complete the answer before submitting.'
            );
            return;
        }

        state.answers[question.id] = answer;

          saveProgress();
        if (state.mode === 'simulation') {
            state.submitted.add(question.id);
            const feedback = byId('feedback-box');
            if (feedback) {
                feedback.hidden = true;
                feedback.style.display = 'none';
                feedback.innerHTML = '';
            }
            if (state.currentIndex < questionBank.length - 1) {
                moveQuestion(1);
            } else {
                finishSimulation(false);
            }
            return;
        }

        const isCorrect = evaluateAnswer(question, answer);
        if (question.type === 'dragdrop') {
            document.querySelectorAll('.drop-target').forEach((target, index) => {
                const correct = target.dataset.assigned === String(question.dropTargets[index].correctAnswer);
                target.style.backgroundColor = correct ? '#dcfce7' : '#fee2e2';
                target.style.borderColor = correct ? '#22c55e' : '#ef4444';
            });
        } else if (question.type === 'matrix') {
            question.rows.forEach(row => {
                const selectedValue = answer[row.id];
                const correctValue = question.correctAnswer[row.id];
                document.querySelectorAll('.matrix-input').forEach(input => {
                    if (input.name !== `matrix_${row.id}`) return;
                    const cell = input.closest('.matrix-choice-cell');
                    if (!cell) return;
                    if (String(input.value) === String(correctValue)) {
                        cell.classList.add('matrix-correct');
                    } else if (String(input.value) === String(selectedValue)) {
                        cell.classList.add('matrix-incorrect');
                    }
                });
            });
        } else if (question.type === 'dropdown') {
            document.querySelectorAll('select[data-key]').forEach(select => {
                const correct = String(select.value) === String(question.correctAnswer[select.dataset.key]);
                select.style.backgroundColor = correct ? '#dcfce7' : '#fee2e2';
                select.style.borderColor = correct ? '#22c55e' : '#ef4444';
            });
        } else {
            document.querySelectorAll('.option-box').forEach((box, index) => {
                const selected = question.type === 'checkbox' ? answer.includes(index) : answer === index;
                const correct = question.type === 'checkbox' ? question.correctAnswer.includes(index) : question.correctAnswer === index;
                if (correct) {
                    box.style.backgroundColor = '#dcfce7';
                    box.style.borderColor = '#22c55e';
                } else if (selected) {
                    box.style.backgroundColor = '#fee2e2';
                    box.style.borderColor = '#ef4444';
                }
            });
        }
        displayFeedback(isCorrect, question);
    }

    function finishSimulation(timedOut) {
        if (state.completed || state.mode !== 'simulation') return;
        state.completed = true;
        if (state.timerId) clearInterval(state.timerId);

        const bank = getQuestions();
        let correct = 0;
        const reviewItems = bank.map((question, index) => {
            const answer = state.answers[question.id];
            const isCorrect = isAnswerComplete(question, answer) && evaluateAnswer(question, answer);
            if (isCorrect) correct += 1;
            return `<details class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
                <summary>Question ${index + 1} | ID #${escapeHtml(question.id)} | ${isCorrect ? 'Correct' : 'Incorrect'}</summary>
                <div class="review-content">
                    <div>${renderQuestionText(question)}</div>
                    <div><strong>Answer details:</strong></div>
                    <div>${sanitizeRichHtml(decodeHtmlEntities(question.correctAnswerText || 'No explanation provided.'))}</div>
                </div>
            </details>`;
        }).join('');

        const percentage = Math.round((correct / bank.length) * 100);
        const passed = percentage >= 70;
        byId('exam-screen').hidden = true;
        byId('results-screen').hidden = false;
        byId('result-status').textContent = passed ? 'PASS' : 'FAIL';
        byId('result-status').className = `result-status ${passed ? 'pass' : 'fail'}`;
        byId('result-score').textContent = `${correct} of ${bank.length} correct (${percentage}%)`;
        byId('result-note').textContent = `${timedOut ? 'Time expired. ' : ''}Passing score: 70% (42 of 60).`;
        byId('review-list').innerHTML = reviewItems;
    }

    function startExam(mode) {
        const master = getMasterQuestions();
        if (!master) return;
        state.mode = mode;
        state.currentIndex = 0;
        state.activeCaseSection = null;
        state.selectedPolicyItem = null;
        state.answers = {};
        state.submitted = new Set();
        state.completed = false;

        try {
    if (mode === 'simulation') {
        state.activeQuestions = selectSimulationQuestions(master);
    } else {
        const start =
            Number(byId('practice-start').value) || 1;
        const end =
            Number(byId('practice-end').value) || master.length;

        const caseOnly =
        byId('practice-case-only').checked;
        state.activeQuestions =
            master.slice(start - 1, end);
        if (byId('practice-random').checked) {
    const questionCount = end - start + 1;

    let randomPool = master.slice(end - 1);

    if (caseOnly) {
    randomPool = randomPool.filter(
        question => question.isCaseStudy
    );
}
else if (!byId('practice-case-studies').checked) {
    randomPool = randomPool.filter(
        question => !question.isCaseStudy
    );
}


    state.activeQuestions =
        shuffle(randomPool).slice(0, questionCount);
}
    }
} catch (error) {
    alert(error.message);
    return;
}

        state.timerSeconds = mode === 'simulation' ? 120 * 60 : 0;
        byId('setup-screen').hidden = true;
        byId('results-screen').hidden = true;
        byId('exam-screen').hidden = false;
        byId('mode-label').textContent = mode === 'simulation' ? 'Simulation Exam' : 'Practice Mode';
        byId('jump-select').disabled = false;
        byId('submit-btn').textContent = mode === 'simulation' ? 'Submit & Continue' : 'Submit Answer';
        populateJumpMenu();
        renderQuestion();
        startTimer();
    }

    function handleLayoutClick(event) {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        const questionBank = getQuestions();
        const question = questionBank?.[state.currentIndex];
        if (!question) return;

        const action = actionElement.dataset.action;

        if (action === 'toggle-case') {
            const keys = Object.keys(question.caseStudyOverview || {});
            if (question.tableData) keys.push('Security Incidents Table');
            const sectionKey = keys[Number(actionElement.dataset.sectionIndex)];
            if (sectionKey == null) return;
            state.activeCaseSection = state.activeCaseSection === sectionKey ? null : sectionKey;
            renderQuestion();
            return;
        }

        if (action === 'select-policy') {
            const item = question.availableItems?.[Number(actionElement.dataset.itemIndex)];
            if (item == null) return;
            state.selectedPolicyItem = String(item);

            document.querySelectorAll('.policy-source-btn').forEach(button => {
                const selected = button === actionElement;
                button.style.borderColor = selected ? '#2563eb' : '#94a3b8';
                button.style.backgroundColor = selected ? '#eff6ff' : '#fff';
                button.style.fontWeight = selected ? 'bold' : 'normal';
                button.setAttribute('aria-pressed', String(selected));
            });
            return;
        }

        if (action === 'assign-policy') {
            if (!state.selectedPolicyItem) return;

            actionElement.dataset.assigned = state.selectedPolicyItem;
            actionElement.innerHTML = `
                <span style="font-size:13px;color:#0f172a;font-weight:500;">${escapeHtml(state.selectedPolicyItem)}</span>
                <span aria-hidden="true" style="color:#ef4444;font-weight:bold;font-size:16px;padding:0 4px;">×</span>
            `;
            actionElement.title = 'Select to clear this assignment';
            actionElement.dataset.action = 'clear-assignment';
            actionElement.style.borderColor = '#2563eb';
            actionElement.style.background = '#f8fafc';

            state.selectedPolicyItem = null;
            document.querySelectorAll('.policy-source-btn').forEach(button => {
                button.style.borderColor = '#94a3b8';
                button.style.backgroundColor = '#fff';
                button.style.fontWeight = 'normal';
                button.setAttribute('aria-pressed', 'false');
            });
            return;
        }

        if (action === 'clear-assignment') {
            actionElement.removeAttribute('data-assigned');
            actionElement.dataset.action = 'assign-policy';
            actionElement.innerHTML = '<span class="placeholder-text" style="color:#94a3b8;font-style:italic;font-size:12px;">Select to assign policy type</span>';
            actionElement.title = '';
            actionElement.style.borderColor = '#cbd5e1';
            actionElement.style.background = '#fff';
        }
    }

    function initializeApp() {
        const missingElements = REQUIRED_ELEMENT_IDS.filter(id => !byId(id));
        if (missingElements.length > 0) {
            console.error('Missing required HTML elements:', missingElements);
            const layout = byId('portal-layout');
            if (layout) showFatalError('The page is missing required HTML elements.', missingElements);
            return;
        }
          
        const questionBank = getQuestions();
        if (!questionBank || questionBank.length === 0) {
            showFatalError('The questions array is missing or empty. Load questions.fixed.js before app.fixed.js.');
            return;
        }
          byId('practice-end').value = questionBank.length;

        const validationErrors = validateQuestionBank(questionBank);
        if (validationErrors.length > 0) {
            showFatalError('Question data validation failed.', validationErrors);
            return;
        }

        byId('portal-layout').addEventListener('click', handleLayoutClick);
        byId('portal-layout').addEventListener('change', event => {
            if (event.target.matches('input[name="answer"]')) {
                setOptionVisualState();
            }
            if (event.target.matches('select[data-key]')) {
                event.target.style.backgroundColor = '#fff';
                event.target.style.borderColor = '#2563eb';
                event.target.removeAttribute('aria-invalid');
            }
        });
        byId('jump-select').addEventListener('change', event => {
            state.currentIndex = Number(event.target.value);
            state.activeCaseSection = null;
            renderQuestion();
        });
        byId('practice-start').addEventListener('input', updateSelectedCount);
        byId('practice-end').addEventListener('input', updateSelectedCount);
        byId('next-btn').addEventListener('click', () => moveQuestion(1));
        byId('prev-btn').addEventListener('click', () => moveQuestion(-1));
        byId('submit-btn').addEventListener('click', submitCurrentAnswer);
          byId('practice-mode-btn').addEventListener('click', () => startExam('practice'));
          byId('simulation-mode-btn').addEventListener('click', () => startExam('simulation'));
          byId('new-session-btn').addEventListener('click', () => {
         localStorage.removeItem('sc300-progress');
        window.location.reload();
          });
          byId('resume-btn').addEventListener('click', () => {
          const saved = loadProgress();

          if (!saved) return;
          state.currentIndex = saved.currentIndex;
          state.answers = saved.answers;
          state.activeQuestions = saved.activeQuestions;
          state.mode = saved.mode;

          byId('setup-screen').hidden = true;
          byId('results-screen').hidden = true;
          byId('exam-screen').hidden = false;
          populateJumpMenu();
          renderQuestion();
            })
          byId('finish-exam-btn').addEventListener('click', () => {
              if (confirm('Finish the simulation and show the results?')) finishSimulation(false);
          });
          byId('restart-exam-btn').addEventListener('click', () => window.location.reload());

        const savedProgress = loadProgress();

            if (savedProgress) {
              byId('resume-prompt').hidden = false;
            }

        byId('setup-screen').hidden = false;
        byId('exam-screen').hidden = true;
        byId('results-screen').hidden = true;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
    } else {
        initializeApp();
    }
})();
