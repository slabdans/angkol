'use strict';

// Fully converted for the case-study engine.
const questions = [
  {
    id: 1,
    type: "radio",
    title: "Question 1",
    questionText: `
        <p>You have an Azure Active Directory (Azure AD) tenant that contains the following objects:</p>
        <ul>
            <li>A device named Device1</li>
            <li>Users named User1, User2, User3, User4, and User5</li>
            <li>Groups named Group1, Group2, Group3, Group4, and Group5</li>
        </ul>
	<ul>The groups are configured as shown in the following table.
	</ul>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q1_table1.jpg" alt="q1 table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        <p>To which groups can you assign a Microsoft Office 365 Enterprise E5 license directly?</p>
    `,
    prompt: "Select the correct option:",
    options: [
        "Group1 and Group4 only",
        "Group1, Group2, Group3, Group4, and Group5",
        "Group1 and Group2 only",
        "Group1 only",
        "Group1, Group2, Group4, and Group5 only"
    ],
    correctAnswer: 1,
    correctAnswerText: `
        Correct Answer: B

        Explanation:
        Office 365 Enterprise E5 user licenses can be assigned to security groups and M365 groups with security enabled managed via Microsoft Entra ID. Standard exam keys treat valid user/mixed group configurations in this scenario as supporting group-based licensing across the designated groups.

        https://learn.microsoft.com/en-us/entra/identity/users/licensing-groups-assign
    `
},
  {
    "id": 2,
    "type": "radio",
    "title": "Question 2",
    "questionText": "\n      <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com.</p>\n      <p>Several users use their contoso.com email address for self-service sign-up to Azure Active Directory (Azure AD). You gain global administrator privileges to the Azure AD tenant that contains the self-signed users.</p>\n      <p>You need to prevent the users from creating user accounts in the contoso.com Azure AD tenant for self-service sign-up to Microsoft 365 services.</p><br>\n      <p>Which PowerShell cmdlet should you run?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p><strong>Correct Answer: A (Set-MsolCompanySettings)</strong></p>\n      <p>Self-service sign-up is a method by which a user signs up for a cloud service and has an identity automatically created for them in Azure AD based on their email domain.</p><br>\n      <p>Azure AD cmdlet Set-MsolCompanySettings could help you to prevent creating user accounts with parameters:</p><br>\n<p>AllowEmailVerifiedUsers (users can join the tenant by email validation)-->when is TRUE. </p><br><p>AllowAdHocSubscriptions (controls the ability for users to perform self-service sign-up)</p><p>e.g. Set-MsolCompanySettings -AllowEmailVerifiedUsers $false -AllowAdHocSubscriptions $false Reference:</p><br><p>https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/directory-self-service-signup</p></br>\n      <ul>\n        <li><code>AllowEmailVerifiedUsers</code>: Controls whether users can join the tenant via email validation. Set to <code>$false</code> to block.</li>\n        <li><code>AllowAdHocSubscriptions</code>: Controls the ability for users to perform self-service sign-ups. Set to <code>$false</code> to block.</li>\n      </ul>\n      <p>Example: <code>Set-MsolCompanySettings -AllowEmailVerifiedUsers $false -AllowAdHocSubscriptions $false</code></p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Set-MsolCompanySettings",
      "Set-MsolDomainFederationSettings",
      "Update-MsolFederatedDomain",
      "Set-MsolDomain"
    ]
  },
  {
    "id": 3,
    "type": "radio",
    "title": "Question 3",
    "questionText": "\n    <p>You have a Microsoft 365 tenant that uses the domain named fabrikam.com. The Guest invite settings for Azure Active Directory (Azure AD) are configured as shown in the exhibit. (Click the Exhibit tab.)</p>\n    \n    <div style=\"margin: 15px 0; text-align: center;\">\n      <img src=\"q3_guest.jpg\" alt=\"Exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n    </div>\n\n    <p style=\"text-align: left; margin-top: 10px;\">A user named <strong>bsmith@fabrikam.com</strong> shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>\n\n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q3_table1.jpg\" alt=\"q3 table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p style=\"text-align: left;\">Which users will receive a one-time passcode (OTP)?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A (User2 only)</strong></p>\n    <p><em>Reference User Email: bsmith@fabrikam.com</em></p>\n    <p>According to Microsoft documentation on email one-time passcode (OTP) authentication:</p>\n    <blockquote>\n      \"When the email one-time passcode feature is enabled, newly invited users who meet certain conditions will use one-time passcode authentication. Guest users who redeemed an invitation before email one-time passcode was enabled will continue to use their same authentication method.\"\n    </blockquote>\n    <ul>\n      <li><strong>User 1:</strong> Already a registered guest user in fabrikam.com, so they will not receive an additional OTP.</li>\n      <li><strong>User 2:</strong> Has never accessed fabrikam.com, so they <strong>WILL</strong> receive an OTP each time they sign in.</li>\n      <li><strong>User 3:</strong> Is an internal domain user, so they will not receive a guest OTP.</li>\n    </ul>\n  ",
    "isCaseStudy": false,
    "options": [
      "User2 only",
      "User1 and User2 only",
      "User1, User2, and User3",
      "User3 only"
    ]
  },
  {
    "id": 4,
    "type": "radio",
    "title": "Question 4",
    "questionText": "\n      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to the users.</p>\n      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n      <p>What should you use?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p>You can unassign licenses from users on either the Active users page, or on the Licenses page. The method you use depends on whether you want to unassign product licenses from specific users or unassign users licenses from a specific product.</p><br>\n      <p><strong>Note:</strong> There are several versions of this question in the exam. The question has two possible correct answers:</p><br>\n      <ol>\n        <li>the Licenses blade in the Azure Active Directory admin center</li>\n        <li>the Set-MsolUserLicense cmdlet</li>\n      </ol>\n      <p>Other incorrect answer options you may see on the exam include the following:</p>\n      <ul>\n        <li>the Administrative units blade in the Azure Active Directory admin center</li>\n        <li>the Groups blade in the Azure Active Directory admin center</li>\n      </ul>\n    ",
    "isCaseStudy": false,
    "options": [
      "The Identity Governance blade in the Azure Active Directory admin center",
      "The Set-AzureAdUser cmdlet",
      "The Licenses blade in the Azure Active Directory admin center",
      "The Set-WindowsProductKey cmdlet"
    ]
  },
{
    id: 5,
    type: "matrix",
    title: "Question 5: Hot Spot",
    questionText: `
     <p><strong>Question 5: Hot Spot</strong></p>
      <p>
        You have a Microsoft 365 tenant named
        <code>contoso.com</code>.
        Guest user access is enabled.
      </p>
      <p>
        Users are invited to collaborate with contoso.com as shown in the following table:
      </p>
      <table style="width:100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #000; font-size: 14px;">
        <thead>
          <tr style="background-color: #fff2cc;">
            <th style="padding:6px; border:1px solid #000;">User email</th>
            <th style="padding:6px; border:1px solid #000;">User type</th>
            <th style="padding:6px; border:1px solid #000;">Invitation accepted</th>
            <th style="padding:6px; border:1px solid #000;">Shared resource</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:6px; border:1px solid #000;">
              User1@outlook.com
            </td>
            <td style="padding:6px; border:1px solid #000;">
              Guest
            </td>
            <td style="padding:6px; border:1px solid #000;">
              No
            </td>
            <td style="padding:6px; border:1px solid #000;">
              Enterprise application
            </td>
          </tr>
          <tr>
            <td style="padding:6px; border:1px solid #000;">
              User2@fabrikam.com
            </td>
            <td style="padding:6px; border:1px solid #000;">
              Guest
            </td>
            <td style="padding:6px; border:1px solid #000;">
              Yes
            </td>
            <td style="padding:6px; border:1px solid #000;">
              Enterprise application
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        From the External collaboration settings in the Azure Active Directory admin center,
        you configure the Collaboration restrictions settings so that invitations are allowed
        only to the specified domains.
      </p>
      <p>
        The only allowed target domain is:
      </p>
      <ul>
        <li>Outlook.com</li>
      </ul>
      <p>
        From a Microsoft SharePoint Online site, a user invites
        <code>User3@fabrikam.com</code>
        to the site.
      </p>
      <p>
        For each of the following statements,
        select Yes if the statement is true.
        Otherwise, select No.
      </p>
    `,
    rows: [
        {
            id: "stmt1",
            label:
                "User1 can accept the invitation and gain access to the enterprise application."
        },
        {
            id: "stmt2",
            label:
                "User2 can access the enterprise application."
        },
        {
            id: "stmt3",
            label:
                "User3 can accept the invitation and gain access to the SharePoint site."
        }
    ],

   columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 0,
        stmt2: 0,
        stmt3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>User1:</strong> Yes
            </li>

            <li>
                <strong>User2:</strong> Yes
            </li>

            <li>
                <strong>User3:</strong> No
            </li>
        </ul>

        <p>
            <strong>User1 (Yes):</strong>
            Outlook.com is explicitly included in the allowed target domains list,
            so User1 can redeem the invitation and gain access.
        </p>

        <p>
            <strong>User2 (Yes):</strong>
            User2 accepted the invitation before the collaboration restriction
            was applied. Existing guest access remains valid.
        </p>

        <p>
            <strong>User3 (No):</strong>
            Fabrikam.com is not included in the allowed target domain list.
            New invitations or redemptions from that domain are blocked.
        </p>
    `
},
  {
    "id": 6,
    "type": "checkbox",
    "title": "Question 6",
    "questionText": "\n      <p><strong>Question 6</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n      <p>You plan to bulk invite Azure AD business-to-business (B2B) collaboration users.</p>\n      <p>Which two parameters must you include when you create the bulk invite? Each correct answer presents part of the solution.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n    ",
    "prompt": "Select all correct options:",
    "correctAnswer": [
      0,
      1
    ],
    "correctAnswerText": "\n\t<p>Answer: A & B </p><br>\n      <p>https://docs.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite#invite-guest-users-in-bulk</p>\n      <p><strong>Required values are:</strong></p>\n      <p><strong>Email address to invite</strong> - the user who will receive an invitation</p>\n      <p><strong>Redirection url</strong> - the URL to which the invited user is forwarded after accepting the invitation. If you want to forward the user to the My Apps page, you must change this value to https://myapps.microsoft.com or https://myapplications.microsoft.com.</p>\n      <p><strong>Why the other options are incorrect:</strong></p>\n      <p><strong>C. username:</strong> You do not define an internal username for B2B guest users. They sign in using their existing external corporate email or identity provider credentials.</p>\n      <p><strong>D. shared key:</strong> Azure B2B does not utilize shared cryptographic keys during the bulk invitation creation or redemption phases.</p>\n      <p><strong>E. password:</strong> Because guest users authenticate against their own home tenant or identity provider (like Google, a personal Microsoft account, or another Entra tenant), you do not create or manage a password for them.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "email address",
      "redirection URL",
      "username",
      "shared key",
      "password"
    ]
  },
  {
    "id": 7,
    "type": "radio",
    "title": "Question 7",
    "questionText": "\n      <p><strong>Question 7</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the objects shown in the following table:</p>\n      \n      <!-- Styled Tenant Objects Table -->\n      <table style=\"width:100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #000; font-size: 14px;\">\n        <thead>\n          <tr style=\"background-color: #fff2cc; border-bottom: 1px solid #000;\">\n            <th style=\"padding: 6px; border-right: 1px solid #000; text-align: left;\">Name</th>\n            <th style=\"padding: 6px; border-right: 1px solid #000; text-align: left;\">Type</th>\n            <th style=\"padding: 6px; text-align: left;\">Directly assigned license</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr style=\"border-bottom: 1px solid #000;\">\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">User1</td>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">User</td>\n            <td style=\"padding: 6px; font-style: italic;\">None</td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #000;\">\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">User2</td>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">User</td>\n            <td style=\"padding: 6px;\">Microsoft Office 365 Enterprise E5</td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #000;\">\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Group1</td>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Security group</td>\n            <td style=\"padding: 6px;\">Microsoft Office 365 Enterprise E5</td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #000;\">\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Group2</td>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Microsoft 365 group</td>\n            <td style=\"padding: 6px; font-style: italic;\">None</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Group3</td>\n            <td style=\"padding: 6px; border-right: 1px solid #000;\">Mail-enabled security group</td>\n            <td style=\"padding: 6px; font-style: italic;\">None</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p>Which objects can you add as members to Group3?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 4,
    "correctAnswerText": "\n\t<p>Answer: E</p><br>\n      <p>The answer is User2 only. I just tested. You can't assign the users with no license. 100%</p>\n      <p><strong>Tested in Lab environment:</strong></p>\n      <p>Mail enabled Security Group can only be managed in the M365 Admin Center.</p>\n      <p>In AAD, you can't modify the membership. - \"Some groups can't be managed in the Azure Portal.\"<br>\n      In the M365 admin center, only users can be added to the mail-enabled security group.<br>\n      You can only add licensed users to the group, unlicensed users won't even show up on the member select page.</p>\n      <p><strong>Why the other options are incorrect:</strong></p>\n      <p><strong>User1:</strong> User1 does not hold a proper active license seat configuration in this context, meaning the system filters them out from the membership selection page entirely.</p>\n      <p><strong>Group1 &amp; Group2:</strong> Mail-enabled security groups managed through these administration scopes do not support standard sub-group nesting or associative object groupings, making any group inclusion invalid.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "User2 and Group2 only",
      "User2, Group1, and Group2 only",
      "User1, User2, Group1 and Group2",
      "User1 and User2 only",
      "User2 only"
    ]
  },
  {
    "id": 8,
    "type": "dragdrop",
    "title": "Question 8",
    "questionText": "\n      <p><strong>Question 8: Drag and Drop</strong></p>\n      <p>You have an on-premises Microsoft Exchange organization that uses an SMTP address space of contoso.com. You discover that users use their email address for self-service sign-up to Microsoft 365 services.</p>\n      <p>You need to gain global administrator privileges to the Azure Active Directory (Azure AD) tenant that contains the self-signed users.</p>\n      <p>Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>\n    ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n      <p><strong>Step 1: Create a self-signed user account in the Azure AD tenant</strong><br>\n      <strong>Why it's first:</strong> To take over the tenant from within, you must first establish a foothold inside that specific unmanaged directory space. You do this by performing a self-service sign-up (creating an account like admin-takeover@contoso.com) via a free service page. This adds your new identity directly into the unmanaged tenant’s database.</p>\n      \n      <p><strong>Step 2: Sign into the Microsoft 365 admin center</strong><br>\n      <strong>Why it's second:</strong> Once your unmanaged user object exists, you log in to the portal using those specific credentials. Because the tenant currently lacks a designated global administrator, the system recognizes your session context and presents an opportunity to claim the realm.</p>\n      \n      <p><strong>Step 3: Respond to the Become the admin message</strong><br>\n      <strong>Why it's third:</strong> Upon logging into the unmanaged portal, Microsoft 365 displays a prompt offering you the option to \"Become the admin\" of the domain. Initiating this wizard begins the programmatic ownership challenge verification workflow.</p>\n      \n      <p><strong>Step 4: Create a TXT record in the contoso.com DNS zone</strong><br>\n      <strong>Why it's fourth:</strong> Microsoft enforces a strict cryptographic proof-of-ownership challenge to ensure bad actors cannot hijack an organization's directory. To complete the takeover, the platform generates a unique MS=msXXXXXXXX token string. You must log in to your external public domain registrar (like GoDaddy, Cloudflare, or Azure DNS) and publish this string as a TXT record in the public contoso.com DNS zone file.</p>\n      \n      <p>Once Microsoft's edge servers query DNS and successfully verify that the record matches, your account is immediately elevated to the Global Administrator role, and the unmanaged tenant is officially transformed into a fully managed corporate infrastructure.</p>\n      \n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/domains-admin-takeover</p>\n    ",
    "isCaseStudy": false,
    "availableItems": [
      "Sign in to the Microsoft 365 admin center.",
      "Create a self-signed user account in the Azure AD tenant.",
      "From the Microsoft 365 admin center, add the domain name.",
      "Respond to the Become the admin message.",
      "From the Microsoft 365 admin center, remove the domain name.",
      "Create a TXT record in the contoso.com DNS zone."
    ],
    "dropTargets": [
      {
        "id": "step1",
        "label": "Step 1",
        "correctAnswer": "Create a self-signed user account in the Azure AD tenant."
      },
      {
        "id": "step2",
        "label": "Step 2",
        "correctAnswer": "Sign in to the Microsoft 365 admin center."
      },
      {
        "id": "step3",
        "label": "Step 3",
        "correctAnswer": "Respond to the Become the admin message."
      },
      {
        "id": "step4",
        "label": "Step 4",
        "correctAnswer": "Create a TXT record in the contoso.com DNS zone."
      }
    ]
  },
  {
    "id": 9,
    "type": "dropdown",
    "title": "Question 9",
    "questionText": "\n      <p><strong>Question 9: Hotspot</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named User1 and the groups shown in the following table.</p>\n      \n      <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;\">\n        <thead>\n          <tr style=\"background-color: #f2f2f2;\">\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Name</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Type</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Membership type</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group1</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group2</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Dynamic User</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group3</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Dynamic Device</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group4</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Microsoft 365</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p>In the tenant, you create the groups shown in the following table.</p>\n\n      <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;\">\n        <thead>\n          <tr style=\"background-color: #f2f2f2;\">\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Name</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Type</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Membership type</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">GroupA</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">GroupB</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Microsoft 365</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p>Which members can you add to GroupA and GroupB? To answer, select the appropriate options in the answer area.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <p style=\"margin-bottom: 8px;\"><strong>GroupA:</strong> \n          <select class=\"inline-select\" data-key=\"groupA\" style=\"padding: 6px; margin-left: 10px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"User1 only\">User1 only</option>\n            <option value=\"User1 and Group1 only\">User1 and Group1 only</option>\n            <option value=\"User1, Group1, and Group2 only\">User1, Group1, and Group2 only</option>\n            <option value=\"User1, Group1, and Group4 only\">User1, Group1, and Group4 only</option>\n            <option value=\"User1, Group1, Group2, and Group3 only\">User1, Group1, Group2, and Group3 only</option>\n            <option value=\"User1, Group1, Group2, Group3, and Group4\">User1, Group1, Group2, Group3, and Group4</option>\n          </select>\n        </p>\n        <p style=\"margin-bottom: 0;\"><strong>GroupB:</strong> \n          <select class=\"inline-select\" data-key=\"groupB\" style=\"padding: 6px; margin-left: 10px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"User1 only\">User1 only</option>\n            <option value=\"User1 and Group4 only\">User1 and Group4 only</option>\n            <option value=\"User1, Group1, and Group4 only\">User1, Group1, and Group4 only</option>\n            <option value=\"User1, Group1, Group2, and Group4 only\">User1, Group1, Group2, and Group4 only</option>\n            <option value=\"User1, Group1, Group2, Group3, and Group4\">User1, Group1, Group2, Group3, and Group4</option>\n          </select>\n        </p>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "groupA": "User1, Group1, Group2, and Group3 only",
      "groupB": "User1 only"
    },
    "correctAnswerText": "\n      <p><strong>Correct Selections:</strong></p>\n      <ul>\n        <li><strong>Group A:</strong> User1, Group1, Group2, and Group3. (Group A cannot contain M365 groups).</li>\n        <li><strong>Group B:</strong> User1 only. (M365 groups cannot contain other groups).</li>\n      </ul>\n\n      <p><strong>Incorrect Options Breakdown:</strong></p>\n      \n      <p><strong>User1 only</strong><br>\n      <em>Why it's incorrect for Group A:</em> This option is overly restrictive. While individual users can certainly be added as direct members, security groups are fully capable of containing other compatible security groups (Group1, Group2, Group3) through nesting capabilities.</p>\n\n      <p><strong>User1 and Group1 only / User1, Group1, and Group2 only</strong><br>\n      <em>Why they are incorrect:</em> These options leave out valid security groups. Group1, Group2, and Group3 are all valid security groups that can be combined as nested sub-members. Omitting any of them fails to capture the full set of allowable members.</p>\n\n      <p><strong>User1, Group1, and Group4 only / User1, Group1, Group2, Group3, and Group4</strong><br>\n      <em>Why they are incorrect:</em> Both of these options include Group4. Group4 is a Microsoft 365 group, which is structurally barred from being nested inside a standard Azure/Entra security group. Including it would result in a configuration error.</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 10,
    "type": "radio",
    "title": "Question 10",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        <strong>Scenario (Questions 10-13):</strong><br>\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>\n        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.\n      </div>\n      <p><strong>Question 10</strong></p>\n      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>\n      <p><strong>Solution:</strong> You configure password writeback. Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>Password writeback is a feature of Azure AD Connect which ensures that when a password changes in Azure AD (password change, self-service password reset, or an administrative change to a user password) it is written back to the local AD – if they meet the on-premises AD password policy.</p>\n      <p>Technically, a password write-back operation is a password “reset” action. Password writeback removes the need to set up an on-premises solution for users to reset their password. It all happens in real time, and so users are notified immediately if their password could not be reset or changed for any reason.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 11,
    "type": "radio",
    "title": "Question 11",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        <strong>Scenario (Questions 10-13):</strong><br>\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>\n        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.\n      </div>\n      <p><strong>Question 11</strong></p>\n      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>\n      <p><strong>Solution:</strong> You configure pass-through authentication. Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>Azure Active Directory (Azure AD) Pass-through Authentication allows your users to sign in to both on-premises and cloud-based applications by using the same passwords. Pass-through Authentication signs users in by validating their passwords directly against on-premises Active Directory.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 12,
    "type": "radio",
    "title": "Question 12",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        <strong>Scenario (Questions 10-13):</strong><br>\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>\n        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.\n      </div>\n      <p><strong>Question 12</strong></p>\n      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>\n      <p><strong>Solution:</strong> You configure conditional access policies. Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>Azure Active Directory (Azure AD) Pass-through Authentication allows your users to sign into both on-premises and cloud-based applications using the same passwords. It uses a lightweight on-premises agent that listens for and responds to password validation requests. If disabled user can not login.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 13,
    "type": "radio",
    "title": "Question 13",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        <strong>Scenario (Questions 10-13):</strong><br>\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>\n        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.\n      </div>\n      <p><strong>Question 12</strong></p>\n      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>\n      <p><strong>Solution:</strong> You configure Azure AD Password Protection. Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>Correct solution shall be Azure Active Directory (Azure AD) Pass-through Authentication.<br>\n\nAzure Active Directory (Azure AD) Pass-through Authentication allows your users to sign in to both on- premises and cloud-based applications by using the same passwords. Pass-through Authentication signs users in by validating their passwords directly against on-premises Active Directory.</p>\n     \n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 14,
    "type": "radio",
    "title": "Question 14",
    "questionText": "\n      <p><strong>Question 13: Multiple Choice</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the following objects:</p>\n      <ul>\n        <li>A device named Device1</li>\n        <li>Users named User1, User2, User3, User4, and User5</li>\n        <li>Five groups named Group1, Group2, Group3, Group4, and Group5</li>\n      </ul>\n      <p>The groups are configured as shown in the following table:</p>\n\n      <table style=\"width: 100%; max-width: 600px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;\">\n        <thead>\n          <tr style=\"background-color: #f2f2f2;\">\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Name</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Type</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Membership type</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Members</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group1</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User1, User3, Group2, Group4</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group2</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Dynamic User</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User2</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group3</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Security</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Dynamic Device</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Device1</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group4</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Microsoft 365</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User4</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Group5</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Microsoft 365</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Assigned</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User5</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p>How many licenses are used if you assign the Microsoft 365 Enterprise E5 license to Group1?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p><strong>Answer: B (2)</strong></p>\n      <p>Because nested group do not inherit licenses.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/licensing-group-advanced</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "0",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": 15,
    "type": "radio",
    "title": "Question 15",
    "questionText": "\n      <p><strong>Question 14: Multiple Choice</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains an Azure AD enterprise application named App1.</p>\n      <p>A contractor uses the credentials of contractor@adatum.com.</p>\n      <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as contractor@adatum.com.</p>\n      <p>What should you do?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n      <p><strong>Answer: D (Create a guest user account in contoso.com.)</strong></p>\n      <p><strong>Explanation:</strong><br>\n      Creating a Guest User Account is Correct</p>\n      <p><strong>B2B Collaboration Object:</strong> When you invite or create a guest user account for an external email address like contractor@adatum.com inside contoso.com, Entra ID provisions a user object with a UserType of Guest.</p>\n      <p><strong>Federated Authentication:</strong> The contractor does not get assigned a password inside your tenant. Instead, when they attempt to access App1, your tenant recognizes them as an external guest and safely redirects their authentication request back to their native identity provider (in this case, their external provider at adatum.com).</p>\n      <p><strong>Access Mapping:</strong> Once authenticated, they are granted access to App1 as configured.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Run the New-AzADUser cmdlet.",
      "Configure the External collaboration settings.",
      "Add a WS-Fed identity provider.",
      "Create a guest user account in contoso.com."
    ]
  },
  {
    "id": 16,
    "type": "radio",
    "title": "Question 16",
    "questionText": "\n      <p><strong>Question 15: Multiple Choice</strong></p>\n      <p>Your network contains an Active Directory forest named contoso.com that is linked to an Azure Active Directory (Azure AD) tenant named contoso.com by using Azure AD Connect.</p>\n      <p>You need to prevent the synchronization of users who have the extensionAttribute15 attribute set to NoSync. What should you do in Azure AD Connect?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p><strong>Answer: C (Create an inbound synchronization rule for the Active Directory Domain Services connector.)</strong></p>\n      <p><strong>Explanation:</strong><br>\n      The connector name is Active Directory Domain Services connector (AD DS connector).</p>\n      <p><strong>Reference:</strong><br>\n      Azure AD Connect: Configure AD DS Connector Account Permissions<br>\n      https://learn.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-configure-ad-ds-connector-account<br>\n      https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sync-change-the-configuration</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Create an inbound synchronization rule for the Windows Azure Active Directory connector.",
      "Configure a Full Import run profile.",
      "Create an inbound synchronization rule for the Active Directory Domain Services connector.",
      "Configure an Export run profile."
    ]
  },
  {
    "id": 17,
    "type": "radio",
    "title": "Question 17",
    "questionText": "\n      <p><strong>Question 16: Multiple Choice</strong></p>\n      <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant. The tenant contains the users shown in the following table.</p>\n\n      <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;\">\n        <thead>\n          <tr style=\"background-color: #f2f2f2;\">\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Name</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Type</th>\n            <th style=\"border: 1px solid #ccc; padding: 6px; text-align: left;\">Directory synced</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User1</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">No</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User2</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Yes</td>\n          </tr>\n          <tr>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">User3</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">Guest</td>\n            <td style=\"border: 1px solid #ccc; padding: 6px;\">No</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p>All the users work remotely. Azure AD Connect is configured in Azure AD as shown in the following exhibit.</p>\n\n      <div style=\"border: 1px solid #ccc; padding: 12px; max-width: 500px; background-color: #fff; margin-bottom: 15px; font-family: Arial, sans-serif; font-size: 13px;\">\n        <p style=\"font-weight: bold; margin: 0 0 8px 0; font-size: 14px;\">PROVISION FROM ACTIVE DIRECTORY</p>\n        <p style=\"margin: 0 0 4px 0; color: #0066cc; font-weight: bold;\">Azure AD Connect cloud provisioning</p>\n        <p style=\"margin: 0 0 10px 0;\">This feature allows you to manage provisioning from the cloud.</p>\n        <p style=\"margin: 0 0 10px 0; color: #0066cc;\">Manage provisioning (Preview)</p>\n        \n        <p style=\"font-weight: bold; margin: 0 0 6px 0;\">Azure AD Connect sync</p>\n        <table style=\"width: 100%; margin-bottom: 12px; border: none;\">\n          <tr>\n            <td style=\"width: 45%; padding: 2px 0;\">Sync Status</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Enabled</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 2px 0;\">Last Sync</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Less than 1 hour ago</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 2px 0;\">Password Hash Sync</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Enabled</td>\n          </tr>\n        </table>\n\n        <p style=\"font-weight: bold; margin: 10px 0 6px 0; font-size: 14px;\">USER SIGN IN</p>\n        <table style=\"width: 100%; border: none;\">\n          <tr>\n            <td style=\"width: 45%; color: #0066cc; padding: 2px 0;\">Federation</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Disabled</td>\n            <td style=\"padding: 2px 0;\">0 domains</td>\n          </tr>\n          <tr>\n            <td style=\"color: #0066cc; padding: 2px 0;\">Seamless single sign-on</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Disabled</td>\n            <td style=\"padding: 2px 0;\">0 domains</td>\n          </tr>\n          <tr>\n            <td style=\"color: #0066cc; padding: 2px 0;\">Pass-through authentication</td>\n            <td style=\"font-weight: bold; padding: 2px 0;\">Enabled</td>\n            <td style=\"padding: 2px 0;\">2 agents</td>\n          </tr>\n        </table>\n      </div>\n\n      <p>Connectivity from the on-premises domain to the internet is lost. Which users can sign in to Azure AD?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p><strong>Answer: A (User1 and User3 only)</strong></p>\n      <p><strong>Explanation:</strong><br>\n      When the connection to on-premise is lost, PTA will not work anymore. The failover to Password Hash Synchronization is not automatic and needs to be configured manually in AD Connect. If the connection to on-premise is lost, and the AD Connect server runs on-premise, user 2 cannot login.</p>\n      <p>Enabling Password Hash Synchronization gives you the option to failover authentication if your on-premises infrastructure is disrupted. This failover from Pass-through Authentication to Password Hash Synchronization is not automatic. You'll need to switch the sign-in method manually using Azure AD Connect. If the server running Azure AD Connect goes down, you'll require help from Microsoft Support to turn off Pass-through Authentication.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-pta-current-limitations</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "User1 and User3 only",
      "User1 only",
      "User1, User2, and User3",
      "User1 and User2 only"
    ]
  },
{
    id: 18,

    type: "matrix",

    title: "Question 18: Hot Spot",

    questionText: `
        <p><strong>Question 18: Hot Spot</strong></p>

        <p>
            Your network contains an on-premises Active Directory domain named
            <code>contoso.com</code>. The domain contains the objects shown in
            the following table.
        </p>

        <div style="
            width:100%;
            margin:15px 0;
            overflow-x:auto;
        ">
            <table style="
                width:100%;
                max-width:750px;
                border-collapse:collapse;
                border:1px solid #ccc;
                font-size:14px;
            ">
                <thead>
                    <tr style="background-color:#f2f2f2;">
                        <th style="
                            border:1px solid #ccc;
                            padding:6px;
                            text-align:left;
                        ">
                            Name
                        </th>

                        <th style="
                            border:1px solid #ccc;
                            padding:6px;
                            text-align:left;
                        ">
                            Type
                        </th>

                        <th style="
                            border:1px solid #ccc;
                            padding:6px;
                            text-align:left;
                        ">
                            In organizational unit (OU)
                        </th>

                        <th style="
                            border:1px solid #ccc;
                            padding:6px;
                            text-align:left;
                        ">
                            Description
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style="border:1px solid #ccc;padding:6px;">
                            User1
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            User
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            OU1
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            User1 is a member of Group1.
                        </td>
                    </tr>

                    <tr>
                        <td style="border:1px solid #ccc;padding:6px;">
                            User2
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            User
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            OU1
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            User2 is not a member of any groups.
                        </td>
                    </tr>

                    <tr>
                        <td style="border:1px solid #ccc;padding:6px;">
                            Group1
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            Security group
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            OU2
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            User1 and Group2 are members of Group1.
                        </td>
                    </tr>

                    <tr>
                        <td style="border:1px solid #ccc;padding:6px;">
                            Group2
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            Security group
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            OU1
                        </td>

                        <td style="border:1px solid #ccc;padding:6px;">
                            Group2 is a member of Group1.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            You install Azure AD Connect. You configure the Domain and OU
            filtering settings as shown in the Domain and OU Filtering exhibit.
        </p>

<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q18-domain-filtering.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>


        <p>
            You configure the Filter users and devices settings as shown in the
            Filter Users and Devices exhibit.
        </p>

       <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q18-user-filtering.jpg" alt="Filter Users and Devices" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">


        <p>
            For each of the following statements, select
            <strong>Yes</strong> if the statement is true.
            Otherwise, select <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "q18_statement1",
            label: "User1 syncs to Azure AD."
        },
        {
            id: "q18_statement2",
            label: "User2 syncs to Azure AD."
        },
        {
            id: "q18_statement3",
            label: "Group2 syncs to Azure AD."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },
        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        q18_statement1: 0,
        q18_statement2: 1,
        q18_statement3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>User1 syncs to Azure AD:</strong>
                Yes
            </li>

            <li>
                <strong>User2 syncs to Azure AD:</strong>
                No
            </li>

            <li>
                <strong>Group2 syncs to Azure AD:</strong>
                Yes
            </li>
        </ul>

        <p>
            <strong>Statement 1, User1: Yes.</strong><br>
            In the group-based filtering configuration, User1 is a direct
            member of Group1 and is included in synchronization.
        </p>

        <p>
            <strong>Statement 2, User2: No.</strong><br>
            User2 is not a member of the selected filtering group and is
            excluded from synchronization.
        </p>

        <p>
            <strong>Statement 3, Group2: Yes.</strong><br>
            Group2 is a direct member object of Group1. The Group2 security
            group object is therefore included in synchronization.
        </p>
    `
},
  {
    "id": 19,
    "type": "radio",
    "title": "Question 19",
    "questionText": "\n      <p><strong>Question 19: Multiple Choice</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n      <p>You need to ensure that Azure AD External Identities pricing is based on monthly active users (MAU). What should you configure?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p><strong>Correct Answer: C — A linked subscription</strong></p>\n      <p>To take advantage of MAU billing, your Azure AD tenant must be linked to an Azure subscription.</p>\n\n      <p><strong>Why the other options are incorrect:</strong></p>\n      <ul>\n        <li><strong>Option A (a user flow):</strong> A user flow defines the automated identity journey (such as sign-up, sign-in, or profile editing pages) that external users encounter, but it does not control platform financial or billing settings.</li>\n        <li><strong>Option B (the terms of use):</strong> This is a conditional access component used to force guests or external partners to read and accept legal or corporate policies before accessing company applications.</li>\n        <li><strong>Option D (an access review):</strong> This identity governance tool allows administrators or managers to audit and periodically recertify guest accounts to verify whether they still require system privileges.</li>\n      </ul>\n\n      <p><strong>Reference:</strong> <a href=\"https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-identities-pricing\" target=\"_blank\">https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-identities-pricing</a></p>\n    ",
    "isCaseStudy": false,
    "options": [
      "A user flow",
      "The terms of use",
      "A linked subscription",
      "An access review"
    ]
  },
  {
    "id": 20,
    "type": "dragdrop",
    "title": "Question 20",
    "questionText": "\n      <p><strong>Question 20: Drag and Drop</strong></p>\n      <p>You have a new Microsoft 365 tenant that uses a domain name of contoso.onmicrosoft.com. You register the name contoso.com with a domain registrar.</p>\n      <p>You need to use contoso.com as the default domain name for new Microsoft 365 users.</p>\n      <p>Which four actions should you perform in sequence? To answer, drag the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>\n    ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n      <p><strong>Correct Sequence:</strong></p>\n      <ol>\n        <li><strong>Add a custom domain name of contoso.com:</strong> You start by telling Microsoft which domain you own.</li>\n        <li><strong>Create a new TXT record in DNS:</strong> Microsoft provides a unique value that you must add to your domain registrar's DNS settings. This proves you actually own the domain.</li>\n        <li><strong>Successfully verify the domain name:</strong> Once the TXT record is live, you click \"Verify\" in the admin center. Microsoft checks the DNS, and if the record matches, the domain is added to your tenant.</li>\n        <li><strong>Set the domain to primary:</strong> This is the final step if you want new users to automatically receive email addresses ending in @contoso.com instead of the default .onmicrosoft.com.</li>\n      </ol>\n\n      <p><strong>Incorrect Action:</strong></p>\n      <ul>\n        <li><strong>Delete the contoso.onmicrosoft.com domain:</strong> The default <code>.onmicrosoft.com</code> domain is permanent and cannot be deleted from a tenant.</li>\n      </ul>\n\n      <p><strong>Reference:</strong> <a href=\"https://practical365.com/configure-a-custom-domain-in-office-365/\" target=\"_blank\">https://practical365.com/configure-a-custom-domain-in-office-365/</a></p>\n    ",
    "isCaseStudy": false,
    "availableItems": [
      "Delete the contoso.onmicrosoft.com domain.",
      "Add a custom domain name of contoso.com.",
      "Set the domain to primary.",
      "Create a new TXT record in DNS.",
      "Successfully verify the domain name."
    ],
    "dropTargets": [
      {
        "id": "step_1",
        "label": "Step 1:",
        "correctAnswer": "Add a custom domain name of contoso.com."
      },
      {
        "id": "step_2",
        "label": "Step 2:",
        "correctAnswer": "Create a new TXT record in DNS."
      },
      {
        "id": "step_3",
        "label": "Step 3:",
        "correctAnswer": "Successfully verify the domain name."
      },
      {
        "id": "step_4",
        "label": "Step 4:",
        "correctAnswer": "Set the domain to primary."
      }
    ]
  },
{
    id: 21,

    type: "matrix",

    title: "Question 21: Hot Spot",

    questionText: `
        <p>
            You have an Azure Active Directory (Azure AD) tenant that has an
            Azure Active Directory Premium Plan 2 license.
        </p>

        <p>
            The tenant contains the users shown in the following table:
        </p>

        <div style="
            width:100%;
            margin-bottom:15px;
            text-align:center;
        ">
            <img
                src="images/table_q21.jpg"
                alt="Users Table"
                style="
   ing exhibit:
        </p>

        <div style="
            width:100%;
            margin-bottom:15px;
            text-align:center;
        ">
            <img
                src="images/exhibit_q21.jpg"
                alt="Devicedevices shown in the following table:
        </p>

        <div style="
            width:100%;
            margin-bottom:15px;
            text-align:center;
        ">
            <img
                src="images/devices_q21_table.jpg"
                alt="Devices Table"
                elect
            <strong>Yes</strong>
            if the statement is true.
            Otherwise, select
            <strong>No</strong>.
        </p>
    `,

    rows: [
        {
            id: "statement_1",
            label:
                "User1 can join four additional Windows 10 devices to Azure AD."
        },
        {
            id: "statement_2",
            label:
                "Admin1 can set Devices to be Azure AD joined or Azure AD registered require Multi-Factor Authentication to Yes."
        },
        {
            id: "statement_3",
            label:
                "Admin2 is a local administrator on Device3."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },
        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        statement_1: 1,
        statement_2: 0,
        statement_3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Statement 1:</strong> No
            </li>

            <li>
                <strong>Statement 2:</strong> Yes
            </li>

            <li>
                <strong>Statement 3:</strong> No
            </li>
        </ul>

        <p>
            <strong>Statement 1:</strong><br>
            The maximum number of devices per user is set to five.
            The limit includes both Azure AD joined and Azure AD registered
            devices. User1 already has four enrolled devices and can add
            only one more device, not four.
        </p>

        <p>
            <strong>Statement 2:</strong><br>
            Admin1 is assigned the Cloud Device Administrator role.
            This role includes permissions to manage Azure AD device settings,
            including Multi-Factor Authentication requirements for device
            registration and join operations.
        </p>

        <p>
            <strong>Statement 3:</strong><br>
            Device3 is Azure AD registered.
            Local administrator assignments apply only to Azure AD joined
            devices. Therefore Admin2 is not a local administrator on Device3.
        </p>
    `
},
  {
    "id": 22,
    "type": "dragdrop",
    "title": "Question 22",
    "questionText": "\n    <p>You have a Microsoft 365 E5 subscription that contains three users named User1, User2, and User3. You need to configure the users as shown in the following table:</p>\n    <div style=\"margin-bottom: 15px;\">\n      <img src=\"images/q22_configuration.jpg\" alt=\"Users Configuration Table\" style=\"max-width: 100%; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>Which portal should you use to configure each user? To answer, drag the appropriate portals to the correct users. Each portal may be used once, more than once, or not at all.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <p>Azure Active Directory admin center.<br>\n    Exchange Admin.<br>\n    Microsoft Endpoint Manager admin center.</p>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "Azure Active Directory admin center",
      "Exchange admin center",
      "Microsoft 365 compliance center",
      "Microsoft Endpoint Manager admin center",
      "SharePoint admin center"
    ],
    "dropTargets": [
      {
        "id": "target_user1",
        "label": "User1:",
        "correctAnswer": "Azure Active Directory admin center"
      },
      {
        "id": "target_user2",
        "label": "User2:",
        "correctAnswer": "Exchange admin center"
      },
      {
        "id": "target_user3",
        "label": "User3:",
        "correctAnswer": "Microsoft Endpoint Manager admin center"
      }
    ]
  },
  {
    "id": 23,
    "type": "radio",
    "title": "Question 23",
    "questionText": "\n    <p>You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant. The tenant uses pass-through authentication.</p>\n    <p>A corporate security policy states the following:</p>\n    <ul>\n      <li>Domain controllers must never communicate directly to the internet.</li>\n      <li>Only required software must be installed on servers.</li>\n    </ul>\n    <p>The Active Directory domain contains the on-premises servers shown in the following table:</p>\n    <div style=\"margin-bottom: 15px;\">\n      <img src=\"images/q23_server.jpg\" alt=\"Servers Table\" style=\"max-width: 100%; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n    <p>You need to ensure that users can authenticate to Azure AD if a server fails.</p>\n    <p>On which server should you install an additional pass-through authentication agent?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A (Server4)</strong></p>\n    <p>The standalone Authentication Agents can be installed on any Windows Server 2016 or later, with TLS 1.2 enabled. The server needs to be on the same Active Directory forest as the users whose passwords you need to validate.</p>\n    \n  ",
    "isCaseStudy": false,
    "options": [
      "Server4",
      "Server2",
      "Server1",
      "Server3"
    ]
  },
  {
    "id": 24,
    "type": "radio",
    "title": "Question 24",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains an Azure AD enterprise application named App1.</p>\n    <p>A contractor uses the credentials of user1@outlook.com.</p>\n    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as user1@outlook.com.</p>\n    <p>What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p>In Question, user1@outlook.com.</p><br>\n    <p>A is the answers, they are looking for you to invite the user to azure ad. Assume that unless stated otherwise, default config in Azure AD is set, so collaboration settings are already on. \"By default, all users in your organization, including B2B collaboration guest users, can invite external users to B2B collaboration. If you want to limit the ability to send invitations, you can turn invitations on or off for everyone, or limit invitations to certain roles.\"</p>\n    <p>https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-collaboration-settings-configure</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Run the New-AzureADMSInvitation cmdlet.",
      "Configure the External collaboration settings.",
      "Add a WS-Fed identity provider.",
      "Implement Azure AD Connect."
    ]
  },
  {
    "id": 25,
    "type": "radio",
    "title": "Question 25",
    "questionText": "\n    <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n    <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to the users.</p>\n    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p>What should you use?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>The Set-MsolUserLicense cmdlet updates the license assignment for a user. This can include adding a new license, removing a license, updating the license options, or any combination of these actions.</p>\n    <p>Note:</p>\n    <p>There are several versions of this question in the exam. The question has two possible correct answers:</p>\n    <p>1. the Licenses blade in the Azure Active Directory admin center</p>\n    <p>2. the Set-MsolUserLicense cmdlet</p>\n    <p>Other incorrect answer options you may see on the exam include the following:</p>\n    <p>• the Identity Governance blade in the Azure Active Directory admin center</p>\n    <p>• the Set-WindowsProductKey cmdlet</p>\n    <p>• the Set-AzureAdGroup cmdlet</p>\n    <p>Reference: https://docs.microsoft.com/en-us/powershell/module/msonline/set-msoluserlicense?view=azureadps-1.0</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Administrative units blade in the Azure Active Directory admin center",
      "the Set-AzureAdUser cmdlet",
      "the Groups blade in the Azure Active Directory admin center",
      "the Set-MsolUserLicense cmdlet"
    ]
  },
  {
    "id": 26,
    "type": "dropdown",
    "title": "Question 26",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant and an Azure web app named App1.</p>\n    <p>You need to provide guest users with self-service sign-up for App1. The solution must meet the following requirements:</p>\n    <ul>\n      <li>Guest users must be able to sign up by using a one-time password.</li>\n      <li>The users must provide their first name, last name, city, and email address during the sign-up process.</li>\n    </ul>\n    <p>What should you configure in the Azure Active Directory admin center for each requirement?</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n    \n    <div class=\"hotspot-container\" style=\"margin-top: 15px;\">\n      <table style=\"width: 100%; border-collapse: collapse;\">\n        <tbody>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 10px; font-weight: bold; width: 180px;\">One-time password:</td>\n            <td style=\"padding: 10px;\">\n              <select class=\"inline-select\" data-key=\"otp\" style=\"padding: 6px; width: 100%; max-width: 400px; border: 1px solid #ccc; border-radius: 4px;\">\n                <option value=\"\">-- Select an Option --</option>\n                <option value=\"A linked subscription\">A linked subscription</option>\n                <option value=\"An identity provider\">An identity provider</option>\n                <option value=\"Azure AD Privileged Identity Management (PIM)\">Azure AD Privileged Identity Management (PIM)</option>\n                <option value=\"The External collaboration settings\">The External collaboration settings</option>\n              </select>\n            </td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 10px; font-weight: bold; width: 180px;\">User details:</td>\n            <td style=\"padding: 10px;\">\n              <select class=\"inline-select\" data-key=\"userdetails\" style=\"padding: 6px; width: 100%; max-width: 400px; border: 1px solid #ccc; border-radius: 4px;\">\n                <option value=\"\">-- Select an Option --</option>\n                <option value=\"A user flow\">A user flow</option>\n                <option value=\"Access reviews\">Access reviews</option>\n                <option value=\"An access package\">An access package</option>\n                <option value=\"The tenant properties\">The tenant properties</option>\n              </select>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "otp": "An identity provider",
      "userdetails": "A user flow"
    },
    "correctAnswerText": "\n    <p>- First you'll enable self-service sign-up for your tenant and federate with the identity providers you want to allow external users to use for sign-in. Then you'll create and customize the sign-up user flow and assign your applications to it.</p><br>\n    <p>Reference:<br>\n    https://docs.microsoft.com/en-us/azure/active-directory/external-identities/identity-providers<br>\n    https://docs.microsoft.com/en-us/azure/active-directory/external-identities/self-service-sign-up-overview</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 27,
    "type": "radio",
    "title": "Question 27",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant.</p>\n    <p>You need to bulk create 25 new user accounts by uploading a template file. Which properties are required in the template file?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>Name [displayName] -> Required</p>\n    <p>User name [userPrincipalName] -> Required<br>\n    Initial password [passwordProfile] -> Required,<br>\n    Block sign in (Yes/No) [accountEnabled] -> Required</p><br><br>Reference:\n\nhttps://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/users-bulk-add\n\n  ",
    "isCaseStudy": false,
    "options": [
      "displayName, identityIssuer, usageLocation, and userType",
      "accountEnabled, givenName, surname, and userPrincipalName",
      "accountEnabled, displayName, userPrincipalName, and passwordProfile",
      "accountEnabled, passwordProfile, usageLocation, and userPrincipalName"
    ]
  },
  {
    "id": 28,
    "type": "radio",
    "title": "Question 28",
    "questionText": "\n    <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>\n    <p>Users sign in to computers that run Windows 10 and are joined to the domain.</p>\n    <p>You plan to implement Azure AD Seamless Single Sign-On (Azure AD Seamless SSO). You need to configure the Windows 10 computers to support Azure AD Seamless SSO. What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>You can gradually roll out Seamless SSO to your users using the instructions provided below. You start by adding the following Azure AD URL to all or selected users' Intranet zone settings by using Group Policy in Active Directory: https://autologon.microsoftazuread-sso.com</p><br>\n    <p>In addition, you need to enable an Intranet zone policy setting called Allow updates to status bar via script through Group Policy.</p><br>\n    <p>more information in: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start<br>\n    Reference:<br>\n    https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Configure Sign-in options from the Settings app.",
      "Enable Enterprise State Roaming.",
      "Modify the Intranet Zone settings.",
      "Install the Azure AD Connect Authentication Agent."
    ]
  },
  {
    "id": 29,
    "type": "dragdrop",
    "title": "Question 29",
    "questionText": "\n    <p>You need to resolve the recent security incident issues.</p>\n    <p>What should you configure for each incident?</p>\n    <p>To answer, drag the appropriate policy types to the correct issues. Each policy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <p>Box 1: A user risk policy -</p>\n    <p>User-linked detections include:</p>\n    <p>Leaked credentials: This risk detection type indicates that the user's valid credentials have been leaked. When cyber criminals compromise valid passwords of legitimate users, they often share those credentials.</p>\n    <p>User risk policy.</p>\n    <p>Identity Protection can calculate what it believes is normal for a user's behavior and use that to base decisions for their risk. User risk is a calculation of probability that an identity has been compromised. Administrators can make a decision based on this risk score signal to enforce organizational requirements. Administrators can choose to block access, allow access, or allow access but require a password change using Azure AD self-service password reset.</p>\n    \n    <p>Box 2: A sign-in risk policy -</p>\n    <p>Suspicious browser: Suspicious browser detection indicates anomalous behavior based on suspicious sign-in activity across multiple tenants from different countries in the same browser.</p>\n    \n    <p>Box 3: A sign-in risk policy -</p>\n    <p>A sign-in risks include activity from anonymous IP address: This detection is discovered by Microsoft Defender for Cloud Apps. This detection identifies that users were active from an IP address that has been identified as an anonymous proxy IP address.</p>\n    \n    <p>Note: The following three policies are available in Azure AD Identity Protection to protect users and respond to suspicious activity. You can choose to turn the policy enforcement on or off, select users or groups for the policy to apply to, and decide if you want to block access at sign-in or prompt for additional action.</p>\n    <ul>\n      <li><strong>User risk policy</strong><br>Identifies and responds to user accounts that may have compromised credentials. Can prompt the user to create a new password.</li>\n      <li><strong>Sign in risk policy</strong><br>Identifies and responds to suspicious sign-in attempts. Can prompt the user to provide additional forms of verification using Azure AD Multi-Factor Authentication.</li>\n      <li><strong>MFA registration policy</strong><br>Makes sure users are registered for Azure AD Multi-Factor Authentication. If a sign-in risk policy prompts for MFA, the user must already be registered for Azure AD Multi-Factor Authentication. Currently supported risk detections are Sign-in risk detections:<br>\n      Activity from anonymous IP address, Additional risk detected, Admin confirmed user compromised, Anomalous Token, Anonymous IP address, Atypical travel, Azure AD threat intelligence, Impossible travel, Malicious IP address, Malware linked IP address, Mass Access to Sensitive Files, New country, Password spray, Suspicious browser, Suspicious inbox forwarding, Suspicious inbox manipulation rules, Token Issuer Anomaly, Unfamiliar sign-in properties.</li>\n    </ul>\n    <p>User risk detections:<br>\n    Additional risk detected, Anomalous user activity, Azure AD threat intelligence, Leaked credentials, Possible attempt to access Primary Refresh Token (PRT)</p>\n    <p>https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks<br>\n    Reference: https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-policies</p>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "An authentication method policy",
      "A Conditional Access policy",
      "An Azure AD MFA registration policy",
      "A sign-in risk policy",
      "A user risk policy"
    ],
    "dropTargets": [
      {
        "id": "target_leaked",
        "label": "Leaked credentials:",
        "correctAnswer": "A user risk policy"
      },
      {
        "id": "target_browser",
        "label": "A sign-in from a suspicious browser:",
        "correctAnswer": "A sign-in risk policy"
      },
      {
        "id": "target_ip",
        "label": "Resources accessed from an anonymous IP address:",
        "correctAnswer": "A sign-in risk policy"
      }
    ]
  },
  {
    "id": 30,
    "type": "dropdown",
    "title": "Question 30",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant that has an Azure Active Directory Premium Plan 2 license. The tenant contains the users shown in the following table:</p>\n    <div style=\"margin-bottom: 15px;\">\n      <img src=\"images/q30_members_directory.jpg\" alt=\"Users Table\" style=\"max-width: 100%; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>For which users can you configure the Job title property and the Usage location property in Azure AD?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n    \n    <div class=\"answer-area\" style=\"margin-top: 15px;\">\n      <p><strong>Answer Area</strong></p>\n      \n      <!-- Job title horizontal row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 12px;\">\n        <label style=\"font-weight: 600; min-width: 170px; white-space: nowrap;\">Job title property:</label>\n        <select class=\"inline-select\" data-key=\"job_title\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"User2 only\">User2 only</option>\n          <option value=\"User2 and User3 only\">User2 and User3 only</option>\n          <option value=\"User1, User2, and User3\">User1, User2, and User3</option>\n        </select>\n      </div>\n\n      <!-- Usage location horizontal row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 12px;\">\n        <label style=\"font-weight: 600; min-width: 170px; white-space: nowrap;\">Usage location property:</label>\n        <select class=\"inline-select\" data-key=\"usage_location\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"User2 only\">User2 only</option>\n          <option value=\"User2 and User3 only\">User2 and User3 only</option>\n          <option value=\"User1, User2, and User3\">User1, User2, and User3</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "job_title": "User2 and User3 only",
      "usage_location": "User1, User2, and User3"
    },
    "correctAnswerText": "\n    <p>Box 1: User2 and User3 only.</p>\n    <p>This selection likely applies a filter or condition that limits the scope of an operation, report, or policy to users who are associated with specific job titles.</p>\n    <p>\"User2 and User3 only\" restricts the operation to these users, possibly because their roles or responsibilities are relevant to the context being managed.</p>\n\n    <p>Box 2: User1, User2, and User3 -</p>\n    <p>Invite users with Azure Active Directory B2B collaboration, Update user's name and usage location.</p>\n    <p>To assign a license, the invited user's Usage location must be specified. Admins can update the invited user's profile on the Azure portal.</p>\n    <ol>\n      <li>Go to Azure Active Directory > Users and groups > All users. If you don't see the newly created user, refresh the page.</li>\n      <li>Click on the invited user, and then click Profile.</li>\n      <li>Update First name, Last name, and Usage location.</li>\n      <li>Click Save, and then close the Profile blade.</li>\n    </ol>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 31,
    "type": "radio",
    "title": "Question 31",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named User1.</p>\n    <p>You need to ensure that User1 can create new catalogs and add resources to the catalogs they own. What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>The Licenses blade in the Azure Active Directory admin center.</p>\n    <br>\n    <p>To remove licenses with the least amount of administrative effort in this scenario, you should use the bulk management features available in the Azure portal.</p>\n    <br>\n    <p><strong>Why the Licenses Blade is the best choice:</strong></p>\n    <br>\n    <p>When you have a large number of users (2,500), manually editing individual profiles is impossible, and scripting can be prone to errors if not handled carefully. The Licenses blade provides a centralized interface to manage license assignments across the entire tenant.</p>\n    <br>\n    <p><strong>Bulk Operations:</strong> You can select the Office 365 Enterprise E3 product, see all \"Licensed users,\" select them all (or filtered groups), and click Remove license in one workflow.</p>\n    <p><strong>Visual Validation:</strong> It allows you to quickly verify that the E5 licenses (assigned via groups) are active before you strip the E3 licenses, ensuring no loss of service.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "From the Roles and administrators blade, modify the Groups administrator role.",
      "From the Roles and administrators blade, modify the Service support administrator role.",
      "From the Identity Governance blade, modify the Entitlement management settings.",
      "From the Identity Governance blade, modify the roles and administrators for the General catalog."
    ]
  },
  {
    "id": 32,
    "type": "radio",
    "title": "Question 32",
    "questionText": "\n    <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>\n    <p>Users sign in to computers that run Windows 10 and are joined to the domain.</p>\n    <p>You plan to implement Azure AD Seamless Single Sign-On (Azure AD Seamless SSO). You need to configure the Windows 10 computers to support Azure AD Seamless SSO. What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>The question states: You need to configure the Windows 10 computers to support Azure AD Seamless SSO. The catch is, \"configure the Windows 10 computers.</p>\n    <br>\n    <p>https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Configure Sign-in options from the Settings app.",
      "Enable Enterprise State Roaming.",
      "Modify the Local intranet Zone settings.",
      "Install the Azure AD Connect Authentication Agent."
    ]
  },
  {
    "id": 33,
    "type": "radio",
    "title": "Question 33",
    "questionText": "\n    <p>Your company has two divisions named Contoso East and Contoso West. The Microsoft 365 identity architecture for both divisions is shown in the following exhibit</p>\n    <div style=\"margin-bottom: 15px;\">\n      <img src=\"images/q33_skitch.jpg\" alt=\"Identity Architecture Exhibit\" style=\"max-width: 100%; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n    <p>You need to assign users from the Contoso East division access to Microsoft SharePoint Online sites in the Contoso West tenant.</p>\n    <p>The solution must not require additional Microsoft 365 licenses. What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p>Before any of your users can grant SharePoint Online team site access to external guests, you will have to enable guest sharing from within Azure Active Directory.</p>\n    <br>\n    <p>Reference: https://redmondmag.com/articles/2020/03/11/guest-access-sharepoint-online-team-sites.aspx    https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/multi-tenant-common-considerations</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Configure Azure AD Application Proxy in the Contoso West tenant.",
      "Invite the Contoso East users as guests in the Contoso West tenant.",
      "Deploy a second Azure AD Connect server to Contoso East and configure the server to sync the Contoso East Active Directory forest to the Contoso West tenant.",
      "Configure the existing Azure AD Connect server in Contoso East to sync the Contoso East Active Directory forest to the Contoso West tenant."
    ]
  },
  {
    "id": 34,
    "type": "dragdrop",
    "title": "Question 34",
    "questionText": "\n    <p><strong>Question 34: Drag and Drop</strong></p>\n    <p>You have a Microsoft 365 E5 subscription that contains two users named User1 and User2.</p>\n    <p>You need to ensure that User1 can create access reviews for groups, and that User2 can review the history report for all the completed access reviews.</p>\n    <p>The solution must use the principle of least privilege. Which role should you assign to each user?</p>\n    <p>To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <p>User1: User Administrator.</p>\n    <p>\"Create, update, or delete access review of a group or of an app\"</p>\n    <br>\n    <p>User2: Security Reader.</p>\n    <p>\"Read access review of a Microsoft Entra role\"</p>\n    <br>\n    <p>Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task</p>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "Global administrator",
      "Global reader",
      "Reports reader",
      "Security operator",
      "Security reader",
      "User administrator"
    ],
    "dropTargets": [
      {
        "id": "user1_role",
        "label": "User1:",
        "correctAnswer": "User administrator"
      },
      {
        "id": "user2_role",
        "label": "User2:",
        "correctAnswer": "Security reader"
      }
    ]
  },
  {
    "id": 35,
    "type": "dropdown",
    "title": "Question 35",
    "questionText": "\n    <p>You have an Azure subscription.</p>\n    <p>You need to create two custom roles named Role1 and Role2. The solution must meet the following requirements:</p>\n    <ul>\n      <li>Users that are assigned Role1 can create or delete instances of Azure Container Apps.</li>\n      <li>Users that are assigned Role2 can enforce adaptive network hardening rules.</li>\n    </ul>\n    <p>Which resource provider permissions are required for each role? To answer, select the appropriate options in the answer area.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n    \n    <div class=\"answer-area\" style=\"margin-top: 15px; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; background: #fafafa;\">\n      <p><strong>Answer Area</strong></p>\n      \n      <!-- Role 1 row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 15px;\">\n        <label style=\"font-weight: 600; min-width: 60px;\">Role1:</label>\n        <select class=\"inline-select\" data-key=\"role1_provider\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"Microsoft.App\">Microsoft.App</option>\n          <option value=\"Microsoft.Compute\">Microsoft.Compute</option>\n          <option value=\"Microsoft.Management\">Microsoft.Management</option>\n          <option value=\"Microsoft.Security\">Microsoft.Security</option>\n        </select>\n      </div>\n\n      <!-- Role 2 row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 5px;\">\n        <label style=\"font-weight: 600; min-width: 60px;\">Role2:</label>\n        <select class=\"inline-select\" data-key=\"role2_provider\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"Microsoft.App\">Microsoft.App</option>\n          <option value=\"Microsoft.Compute\">Microsoft.Compute</option>\n          <option value=\"Microsoft.Network\">Microsoft.Network</option>\n          <option value=\"Microsoft.Security\">Microsoft.Security</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "role1_provider": "Microsoft.App",
      "role2_provider": "Microsoft.Security"
    },
    "correctAnswerText": "\n    <p><strong>Role1: Microsoft.App.</strong></p>\n    <p>Role1 requires permissions to create or delete instances of Azure Container Apps. The relevant resource provider for Azure Container Apps is Microsoft.App. This provider includes the necessary permissions to manage container app instances.</p>\n    <br>\n    <p><strong>Role2: Microsoft.Security.</strong></p>\n    <p>Role2 needs to enforce adaptive network hardening rules, which are part of Azure Security Center's capabilities. The Microsoft.Security resource provider contains the permissions required to enforce adaptive network hardening and other security-related configuration.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 36,
    "type": "dropdown",
    "title": "Question 36",
    "questionText": "\n    <p>You have a Microsoft 365 tenant that has 5,000 users. One hundred of the users are executives. The executives have a dedicated support team.</p>\n    <p>You need to ensure that the support team can reset passwords and manage multi-factor authentication (MFA) settings for only the executives. The solution must use the principle of least privilege.</p>\n    <p>Which object type and Azure Active Directory (Azure AD) role should you use? To answer, select the appropriate options in the answer area.</p>\n    <p style=\"font-size: 13px; color: #555;\">NOTE: Each correct selection is worth one point.</p>\n    \n    <div class=\"answer-area\" style=\"margin-top: 15px; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; background: #fafafa;\">\n      <p><strong>Answer Area</strong></p>\n      \n      <!-- Object Type row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 15px;\">\n        <label style=\"font-weight: 600; min-width: 100px;\">Object type:</label>\n        <select class=\"inline-select\" data-key=\"object_type\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"An administrative unit\">An administrative unit</option>\n          <option value=\"A custom administrator role\">A custom administrator role</option>\n          <option value=\"A dynamic group\">A dynamic group</option>\n          <option value=\"A Microsoft 365 group\">A Microsoft 365 group</option>\n        </select>\n      </div>\n\n      <!-- Role row -->\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 5px;\">\n        <label style=\"font-weight: 600; min-width: 100px;\">Role:</label>\n        <select class=\"inline-select\" data-key=\"role_name\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"Authentication administrator\">Authentication administrator</option>\n          <option value=\"Groups administrator\">Groups administrator</option>\n          <option value=\"Helpdesk administrator\">Helpdesk administrator</option>\n          <option value=\"Password administrator\">Password administrator</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "object_type": "An administrative unit",
      "role_name": "Authentication administrator"
    },
    "correctAnswerText": "\n    <p><strong>Object Type: Administrative Unit.</strong></p>\n    <p>An administrative unit (AU) is a container for grouping users, groups, and devices within Azure AD. It's used to delegate administrative permissions over a subset of your organization's directory.</p>\n    <br>\n    <p><strong>Role: Authentication administrator.</strong></p>\n    <p>The Authentication administrator is a built-in Azure AD role that grants permissions related to authentication methods and password management for non-administrator users.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 37,
    "type": "radio",
    "title": "Question 37",
    "questionText": "\n    <p>\n      You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.\n    </p>\n\n    <div style=\"margin:15px 0; text-align:center;\">\n      <img src=\"images/q37_users_group.jpg\" alt=\"Users and Groups Table\" style=\"max-width:100%; height:auto; border:1px solid #ccc; border-radius:4px;\" />\n    </div>\n\n    <p>\n      You have an administrative unit named <strong>AU1</strong>.\n    </p>\n\n    <p>\n      <li>Group1 is a member of AU1.</li>\n      <li>User2 is a member of AU1.</li>\n      <li>User3 is a member of AU1.</li>\n      <li>User5 is assigned the <strong>User Administrator</strong> role for AU1.</li>\n    </p>\n\n    <p>\n      For which users can User5 reset passwords?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: D (User2 and User3 only)</strong>\n    </p>\n\n    <p>\n      Administrative units scope administrative permissions only to objects that are\n      direct members of the administrative unit.\n    </p>\n\n    <p>\n      User2 and User3 are direct members of AU1, therefore User5 can perform\n      password reset operations on those users.\n    </p>\n\n    <p>\n      Although Group1 is a member of AU1, its members do not automatically\n      become members of the administrative unit. Administrative unit scope\n      does not flow through group membership.\n    </p>\n\n    <p>\n      As a result, User5 cannot manage users simply because they belong to Group1.\n    </p>\n\n    <p>\n      Reference:\n      <a href=\"https://learn.microsoft.com/en-us/azure/active-directory/roles/administrative-units\"\n         target=\"_blank\">\n         Microsoft Learn - Administrative Units\n      </a>\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User1, User2, and User3",
      "User1 and User2 only",
      "User3 and User4 only",
      "User2 and User3 only"
    ]
  },
  {
    "id": 38,
    "type": "radio",
    "title": "Question 38",
    "questionText": "\n    <p>\n      You have an Azure Active Directory (AzureAD) tenant that contains the users shown in the following table:\n    </p>\n\n    <div style=\"margin:15px 0; text-align:center;\">\n      <img src=\"images/q38_name_location.jpg\" alt=\"Users Table\" style=\"max-width:100%; height:auto; border:1px solid #ccc; border-radius:4px;\" />\n    </div>\n\n    <p>\n     You create a dynamic user group and configure the following rule syntax:\n    </p>\n\n    <p>\n      <code>user.usageLocation -in [\"US\",\"AU\"] -and (user.department -eq \"Sales\") -and -not (user.jobTitle -eq \"Manager\") –or (user.jobTitle -eq \"SalesRep\")</code>\n    </p>\n\n    <p>\n      Which users will be added to the group?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: D (User1 and User2 only)</strong>\n    </p>\n    <p>\n      According to operators precedence we can consider the following parenthesis: (statement1 -and statement2 - and statement3) -or (statement4). So, the results is the sub-result of the first parenthesis plus the results of the second one. So, it's D.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User1 only",
      "User2 only",
      "User3 only",
      "User1 and User2 only",
      "User1 and User3 only",
      "User1, User2, and User3"
    ]
  },
  {
    "id": 39,
    "type": "radio",
    "title": "Question 39",
    "questionText": "\n    <p>\n      You have an Azure AD tenant that contains a user named User1.\n    </p>\n    <p>\n      User1 needs to manage license assignments and reset user passwords.\n    </p>\n    <p>\n      Which role should you assign to User1?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: D</strong>\n    </p>\n    <p>\n      D. Is Correct - Neither of the other Roles have permissions to handle all of the statements.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Helpdesk Administrator",
      "B. Billing Administrator",
      "C. License Administrator",
      "D. User administrator"
    ]
  },
  {
    "id": 40,
    "type": "radio",
    "title": "Question 40",
    "questionText": "\n    <p>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.\n    </p>\n    <p>\n      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.\n    </p>\n    <p>\n      You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.\n    </p>\n    <p>\n      What should you use?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: A</strong>\n    </p>\n    <p>\n      The Set-MsolUserLicense and New-MsolUser (-LicenseAssignment) cmdlets are scheduled to be retired. Please migrate your scripts to the Microsoft Graph SDK's Set-MgUserLicense cmdlet as described above. For more information, see Migrate your apps to access the license managements APIs from Microsoft Graph\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Set-MsolUserLicense cmdlet",
      "the Set-AzureADGroup cmdlet",
      "the Set-WindowsProductKey cmdlet",
      "the Administrative units blade in the Azure Active Directory admin center"
    ]
  },
  {
    "id": 41,
    "type": "radio",
    "title": "Question 41",
    "questionText": "\n    <p>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.\n    </p>\n    <p>\n      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to a group that includes all the users.\n    </p>\n    <p>\n      You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.\n    </p>\n    <p>\n      What should you use?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: D</strong>\n    </p>\n    <p>\n      D. the Set-MsolUserLicense cmdlet. Why this is the best approach: While you can manage licenses through the GUI, using PowerShell with the Set-MsolUserLicense cmdlet is the most efficient way to perform a bulk removal with least administrative effort. You can pipe a list of all users (or the group members directly into this command to remove the E3 license string globally in one go.\n    </p>\n    <p>\n      The command would look something like this: Set-MsolUserLicense -UserPrincipalName $User -RemoveLicenses \"reseller-account:ENTERPRISEPACK\" (where ENTERPRISEPACK is the technical name for E3).\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Set-AzureADGroup cmdlet",
      "the Identity Governance blade in the Azure Active Directory admin center",
      "the Set-WindowsProductKey cmdlet",
      "the Set-MsolUserLicense cmdlet"
    ]
  },
  {
    "id": 42,
    "type": "dropdown",
    "title": "Question 42",
    "questionText": "\n    <p><strong>Question 42: Hotspot</strong></p>\n    <p>Your on-premises network contains an Active Directory domain that uses Azure AD Connect to sync with an Azure AD tenant.</p>\n    <p>You need to configure Azure AD Connect to meet the following requirements:</p>\n    <ul>\n      <li>User sign-ins to Azure AD must be authenticated by an Active Directory domain controller.</li>\n      <li>Active Directory domain users must be able to use Azure AD self-service password reset (SSPR).</li>\n    </ul>\n    <p>What should you use for each requirement? To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Authentication by the domain controller:</strong> \n        <select class=\"inline-select\" data-key=\"authController\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Federation with Active Directory Federation Services (AD FS)\">Federation with Active Directory Federation Services (AD FS)</option>\n          <option value=\"Pass-through authentication\">Pass-through authentication</option>\n          <option value=\"Password hash synchronization\">Password hash synchronization</option>\n        </select>\n      </p>\n      \n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">SSPR:</strong> \n        <select class=\"inline-select\" data-key=\"sspr\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Device writeback\">Device writeback</option>\n          <option value=\"Group writeback\">Group writeback</option>\n          <option value=\"Password hash synchronization\">Password hash synchronization</option>\n          <option value=\"Password writeback\">Password writeback</option>\n        </select>\n      </p>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "authController": "Pass-through authentication",
      "sspr": "Password writeback"
    },
    "correctAnswerText": "\n    <p>\n      pass-through auth<br>\n      password write back\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 43,
    "type": "radio",
    "title": "Question 43",
    "questionText": "\n    <p>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.\n    </p>\n    <p>\n      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.\n    </p>\n    <p>\n      You needed to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.\n    </p>\n    <p>\n      What should you use?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>A. the Groups blade in the Azure Active Directory admin center</strong><br>\n      Incorrect. Group-based licensing works well for assigning licenses, but it does not automatically remove licenses that were assigned directly to users. Even after assigning E5 via group, E3 will remain unless explicitly removed.\n    </p>\n    <p>\n      <strong>B. the Set-AzureADGroup cmdlet</strong><br>\n      Incorrect. This cmdlet is used for managing group properties and membership, not for modifying or removing user licenses.\n    </p>\n    <p>\n      <strong>C. the Identity Governance blade in the Azure Active Directory admin center</strong><br>\n      Incorrect. Identity Governance focuses on access reviews, entitlement management, and lifecycle processes. It does not handle bulk license removal.\n    </p>\n    <p>\n      <strong>D. the Set-MsolUserLicense cmdlet</strong><br>\n      Correct. This PowerShell cmdlet is specifically designed to assign or remove licenses at scale. Using it, you can bulk remove the E3 licenses from all 2,500 users in a single script, making it the most efficient and least effort solution.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Groups blade in the Azure Active Directory admin center",
      "the Set-AzureADGroup cmdlet",
      "the Identity Governance blade in the Azure Active Directory admin center",
      "the Set-MsolUserLicense cmdlet"
    ]
  },
  {
    "id": 44,
    "type": "radio",
    "title": "Question 44",
    "questionText": "\n    <p>\n      You have an Active Directory forest that syncs to an Azure AD tenant.\n    </p>\n    <p>\n      You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.\n    </p>\n    <p>\n      You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.\n    </p>\n    <p>\n      <strong>Solution:</strong> You configure conditional access policies. Does this meet the goal?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p>\n      <strong>B. No.</strong>\n    </p>\n    <p>\n      Why this doesn't meet the goal: Configuring Conditional Access (CA) policies will not solve the \"immediate\" requirement because CA policies are only evaluated during the authentication process. If a user already has an active session and a valid Access Token, they can continue to access resources until that token expires (typically 60–90 minutes) or until a Continuous Access Evaluation (CAE) event is triggered. Simply disabling the account in on-premises Active Directory (AD) does not instantly kill existing cloud sessions.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 45,
    "type": "radio",
    "title": "Question 45",
    "questionText": "\n    <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n      <strong>Scenario (Questions 45-46):</strong><br>\n      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n      You have a Microsoft 365 E5 subscription. You create a user named User1.<br>\n      You need to ensure that User1 can update the status of Identity Secure Score improvement actions.\n    </div>\n    <p><strong>Question 45</strong></p>\n    <p><strong>Solution:</strong> You assign the Exchange Administrator role to User1. Does this meet the goal?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>A. Yes</strong><br>\n    Incorrect. The Exchange Administrator role is limited to managing Exchange Online settings and does not provide permissions for Identity Secure Score actions.</p>\n    <p><strong>B. No</strong><br>\n    Correct. Updating Identity Secure Score requires roles like Security Administrator or Global Administrator, not Exchange Administrator.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 46,
    "type": "radio",
    "title": "Question 46",
    "questionText": "\n    <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n      <strong>Scenario (Questions 45-46):</strong><br>\n      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n      You have a Microsoft 365 E5 subscription. You create a user named User1.<br>\n      You need to ensure that User1 can update the status of Identity Secure Score improvement actions.\n    </div>\n    <p><strong>Question 46</strong></p>\n    <p><strong>Solution:</strong> You assign the User Administrator role to User1. Does this meet the goal?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>A. Yes</strong><br>\n    Incorrect. <p>Why this doesn't meet the goalThe User Administrator role allows a user to manage user accounts (reset passwords, create/delete users), but it does not grant the specific permissions required to modify or update the status of Identity Secure Score improvement actions.</p> <br>\nhttps://learn.microsoft.com/en-us/azure/active-directory/fundamentals/identity-secure-score#read-and-     write-roles\n</p>\n    <p><strong>B. No</strong><br>\n    Correct. Updating Identity Secure Score requires administrative roles with security management permissions (such as Security Administrator or Global Administrator), not a User Administrator role.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 47,
    "type": "dropdown",
    "title": "Question 47",
    "questionText": "\n    <div style=\"margin-bottom: 15px;\">\n      <details style=\"border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;\">\n        <summary style=\"font-weight: bold; color: #004085; cursor: pointer;\">Case Study Overview</summary>\n        <div style=\"margin-top: 8px; font-size: 13px; color: #004085;\">\n          Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in London and Seattle.<br><br>\n          Contoso has a partnership with a company named Fabrikam, Inc. Fabrikam has an Azure Active Directory (Azure AD) tenant named fabrikam.com.\n        </div>\n      </details>\n\n      <details style=\"border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;\">\n        <summary style=\"font-weight: bold; color: #004085; cursor: pointer;\">Existing Environment</summary>\n        <div style=\"margin-top: 8px; font-size: 13px; color: #004085;\">\n          The on-premises network of Contoso contains an Active Directory domain named contoso.com. The domain contains an organizational unit (OU) named Contoso_Resources. The Contoso_Resources OU contains all users and computers.<br><br>\n          Contoso has an Azure AD tenant named contoso.com that has the following associated licenses:<br>\n          • Microsoft Office 365 Enterprise E5<br>\n          • Enterprise Mobility+ Security E5<br>\n          • Windows 10 Enterprise E3<br>\n          • Project Plan 3<br><br>\n          Azure AD Connect is configured between Azure AD and Active Directory Domain Services (AD DS). Only the Contoso_Resources OU is synced.<br>\n          Helpdesk administrators routinely use the Microsoft 365 admin center to manage user settings. User administrators currently use the Microsoft 365 admin center to manually assign licenses. All users have all licenses assigned besides the following exceptions:<br>\n          • The users in the London office have the Microsoft 365 Phone System license unassigned.<br>\n          • The users in the Seattle office have the Yammer Enterprise license unassigned.<br><br>\n          Security defaults are disabled for contoso.com. Contoso uses Azure AD Privileged Identity Management (PIM) to protect administrative roles.\n        </div>\n      </details>\n  <details style=\"border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;\">\n        <summary style=\"font-weight: bold; color: #856404; cursor: pointer; text-align: left;\">Exhibit: User Accounts Table</summary>\n        <div style=\"margin: 12px 0; text-align: center;\">\n          <img src=\"images/q47_office_location.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n        </div>\n      </details>\n      <details style=\"border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;\">\n        <summary style=\"font-weight: bold; color: #004085; cursor: pointer;\">Problem Statements</summary>\n        <div style=\"margin-top: 8px; font-size: 13px; color: #004085;\">\n          • Currently, all the helpdesk administrators can manage user licenses throughout the entire Microsoft 365 tenant.<br>\n          • The user administrators report that it is tedious to manually configure the different license requirements for each Contoso office.<br>\n          • The helpdesk administrators spend too much time provisioning internal and guest access to the required Microsoft 365 services and apps.<br>\n          • Currently, the helpdesk administrators can perform tasks by using the User administrator role without justification or approval.<br>\n          • When the Logs node is selected in Azure AD, an error message appears stating that Log Analytics integration is not enabled.\n        </div>\n      </details>\n\n      <details style=\"border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;\">\n        <summary style=\"font-weight: bold; color: #004085; cursor: pointer; text-align: left;\">Technical Requirements</summary>\n        <div style=\"margin-top: 8px; font-size: 13px; color: #004085; text-align: left;\">\n          • All users must be synced from AD DS to the contoso.com Azure AD tenant.<br>\n          • App1 must have a redirect URI pointed to https://contoso.com/auth-response.<br>\n          • License allocation for new users must be assigned automatically based on the location of the user.<br>\n          • Fabrikam users must have access to the marketing department’s SharePoint site for a maximum of 90 days.<br>\n          • Administrative actions performed in Azure AD must be audited. Audit logs must be retained for one year.<br>\n          • The helpdesk administrators must be able to manage licenses for only the users in their respective office.<br>\n          • Users must be forced to change their password if there is a probability that the user's identity was compromised.\n        </div>\n      </details>\n\n    </div>\n    \n    <p><strong>Question 47: Hotspot</strong></p>\n    <p>You need to meet the technical requirements for license management by the help desk administrators.</p>\n    <p>What should you create first, and which tool should you use? To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Object to create for each branch office:</strong> \n        <select class=\"inline-select\" data-key=\"objectToCreate\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"An administrative unit\">An administrative unit</option>\n          <option value=\"A custom role\">A custom role</option>\n          <option value=\"A Dynamic User security group\">A Dynamic User security group</option>\n          <option value=\"An OU\">An OU</option>\n        </select>\n      </p>\n      \n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Tool to use:</strong> \n        <select class=\"inline-select\" data-key=\"toolToUse\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Azure Active Directory admin center\">Azure Active Directory admin center</option>\n          <option value=\"Active Directory Administrative Center\">Active Directory Administrative Center</option>\n          <option value=\"Active Directory module for Windows PowerShell\">Active Directory module for Windows PowerShell</option>\n          <option value=\"Microsoft Purview Compliance portal\">Microsoft Purview Compliance portal</option>\n        </select>\n      </p>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "objectToCreate": "An administrative unit",
      "toolToUse": "Azure Active Directory admin center"
    },
    "correctAnswerText": "\n    <p><strong>Object to create: An administrative unit (AU)</strong></p>\n    <p>In Microsoft Entra ID (formerly Azure AD), an Administrative Unit is the cloud equivalent of an Organizational Unit (OU). It allows you to partition your directory into logical containers (like \"Branch Office A\" or \"London Office\").</p>\n    <p><strong>Why it's used:</strong> You can assign a specific user (like a local IT lead) an administrative role (like Helpdesk Administrator) that is scoped only to that AU. This follows the principle of least privilege by ensuring they can only manage users within their own branch, not the entire tenant.</p>\n    <p><strong>Tool to use: Azure Active Directory admin center</strong></p>\n    <p>Administrative Units are a core identity governance feature, so they are managed within the Azure Active Directory admin center (now known as the Microsoft Entra admin center).</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 48,
    "isCaseStudy": true,
    "title": "Question 48",
    "questionText": "You need to resolve the issue of the sales department users. What should you configure for the Azure AD tenant?",
    "caseStudyOverview": {
      "Company Description": "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",
      "Existing Environment": "<strong>ADatum Environment:</strong><br>\n            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>\n            • ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>\n            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.<br><br>\n            The tenant contains the users shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 12px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Role</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User1</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User2</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User3</td><td style=\"padding: 6px; border: 1px solid #ccc;\">User administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User4</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Privileged role administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User5</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Identity Governance Administrator</td></tr>\n              </tbody>\n            </table><br>\n            The tenant contains the groups shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 11px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Membership type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Owner</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Members</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">IT_Group1</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">All users in the IT department</td>\n                </tr>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">AdatumUsers</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">User1, User2</td>\n                </tr>\n              </tbody>\n            </table><br>\n            <strong>Litware Environment:</strong><br>\n            • Litware has an AD DS forest named litware.com.",
      "Problem Statements": "ADatum identifies the following issues:<br>• Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.<br>• A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.<br>• When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.<br>• Anyone in the organization can invite guest users, including other guests and non-administrators.<br>• The helpdesk spends too much time resetting user passwords.<br>• Users currently use only passwords for authentication.",
      "Planned Changes": "ADatum plans to implement the following changes:<br>• Configure self-service password reset (SSPR).<br>• Configure multi-factor authentication (MFA) for all users.<br>• Configure an access review for an access package named Package1.<br>• Require admin approval for application access to organizational data.<br>• Sync the AD DS users and groups of litware.com with the Azure AD tenant.<br>• Ensure that only users that are assigned specific admin roles can invite guest users.<br>• Increase the maximum number of devices that can be joined or registered to Azure AD to 10.",
      "Technical Requirements": "ADatum identifies the following technical requirements:<br>• Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>• Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.<br>• Users must provide one authentication method to reset their password by using SSPR.<br><strong> Available methods must include:</strong><br>&nbsp;&nbsp;- Email<br>&nbsp;&nbsp;- Phone<br>&nbsp;&nbsp;- Security questions<br>&nbsp;&nbsp;- The Microsoft Authenticator app<br>• Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.<br>• The principle of least privilege must be used."
    },
    "type": "radio",
    "correctAnswer": 0,
    "prompt": "Select the correct option:",
    "options": [
      "A. the Device settings",
      "B. the User settings",
      "C. the Access reviews settings",
      "D. Security defaults"
    ],
    "correctAnswerText": "A. the Device settings\nExplanation: Azure Portal > Azure AD > Device > Device Settings > in the 'Azure AD join and registration settings' section, change the maximum number of devices a user can have in Azure AD."
  },
  {
    "id": 49,
    "isCaseStudy": true,
    "title": "Question 49",
    "questionText": "You need to resolve the issue of IT_Group1. What should you do first?",
    "caseStudyOverview": {
      "Company Description": "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",
      "Existing Environment": "<strong>ADatum Environment:</strong><br>\n            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>\n            • ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>\n            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.<br><br>\n            The tenant contains the users shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 12px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Role</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User1</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User2</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User3</td><td style=\"padding: 6px; border: 1px solid #ccc;\">User administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User4</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Privileged role administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User5</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Identity Governance Administrator</td></tr>\n              </tbody>\n            </table><br>\n            The tenant contains the groups shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 11px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Membership type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Owner</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Members</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">IT_Group1</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">All users in the IT department</td>\n                </tr>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">AdatumUsers</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">User1, User2</td>\n                </tr>\n              </tbody>\n            </table><br>\n            <strong>Litware Environment:</strong><br>\n            • Litware has an AD DS forest named litware.com.",
      "Problem Statements": "ADatum identifies the following issues:<br>• Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.<br>• A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.<br>• When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.<br>• Anyone in the organization can invite guest users, including other guests and non-administrators.<br>• The helpdesk spends too much time resetting user passwords.<br>• Users currently use only passwords for authentication.",
      "Planned Changes": "ADatum plans to implement the following changes:<br>• Configure self-service password reset (SSPR).<br>• Configure multi-factor authentication (MFA) for all users.<br>• Configure an access review for an access package named Package1.<br>• Require admin approval for application access to organizational data.<br>• Sync the AD DS users and groups of litware.com with the Azure AD tenant.<br>• Ensure that only users that are assigned specific admin roles can invite guest users.<br>• Increase the maximum number of devices that can be joined or registered to Azure AD to 10.",
      "Technical Requirements": "ADatum identifies the following technical requirements:<br>• Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>• Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.<br>• Users must provide one authentication method to reset their password by using SSPR.<br><strong> Available methods must include:</strong><br>&nbsp;&nbsp;- Email<br>&nbsp;&nbsp;- Phone<br>&nbsp;&nbsp;- Security questions<br>&nbsp;&nbsp;- The Microsoft Authenticator app<br>• Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.<br>• The principle of least privilege must be used."
    },
    "type": "radio",
    "correctAnswer": 1,
    "prompt": "Select the correct option:",
    "options": [
      "A. Change Membership type of IT_Group1 to Dynamic User.",
      "B. Recreate the IT_Group1 group.",
      "C. Change Membership type of IT_Group1 to Dynamic Device.",
      "D. Add an owner to IT_Group1."
    ],
    "correctAnswerText": "B. Recreate the IT_Group1 group.\nExplanation: In Microsoft Entra (Azure AD), you cannot change the membership type of an existing group from 'Assigned' (Static) to 'Dynamic' if it doesn't support direct conversion in its current state. Therefore, you must recreate the IT_Group1 group."
  },
  {
    "id": 50,
    "isCaseStudy": true,
    "title": "Question 50",
    "questionText": "You need to implement the planned changes for litware.com. What should you configure?",
    "caseStudyOverview": {
      "Company Description": "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",
      "Existing Environment": "<strong>ADatum Environment:</strong><br>\n            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>\n            • ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>\n            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.<br><br>\n            The tenant contains the users shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 12px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 6px; border: 1px solid #ccc;\">Role</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User1</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User2</td><td style=\"padding: 6px; border: 1px solid #ccc; font-style: italic;\">None</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User3</td><td style=\"padding: 6px; border: 1px solid #ccc;\">User administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User4</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Privileged role administrator</td></tr>\n                <tr><td style=\"padding: 6px; border: 1px solid #ccc;\">User5</td><td style=\"padding: 6px; border: 1px solid #ccc;\">Identity Governance Administrator</td></tr>\n              </tbody>\n            </table><br>\n            The tenant contains the groups shown in the following table:\n            <table style=\"width:100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 11px;\">\n              <thead>\n                <tr style=\"background: #eef2f5;\">\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Name</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Membership type</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Owner</th>\n                  <th style=\"text-align: left; padding: 5px; border: 1px solid #ccc;\">Members</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">IT_Group1</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">All users in the IT department</td>\n                </tr>\n                <tr>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">AdatumUsers</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Security</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">Assigned</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc; font-style: italic;\">None</td>\n                  <td style=\"padding: 5px; border: 1px solid #ccc;\">User1, User2</td>\n                </tr>\n              </tbody>\n            </table><br>\n            <strong>Litware Environment:</strong><br>\n            • Litware has an AD DS forest named litware.com.",
      "Problem Statements": "ADatum identifies the following issues:<br>• Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.<br>• A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.<br>• When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.<br>• Anyone in the organization can invite guest users, including other guests and non-administrators.<br>• The helpdesk spends too much time resetting user passwords.<br>• Users currently use only passwords for authentication.",
      "Planned Changes": "ADatum plans to implement the following changes:<br>• Configure self-service password reset (SSPR).<br>• Configure multi-factor authentication (MFA) for all users.<br>• Configure an access review for an access package named Package1.<br>• Require admin approval for application access to organizational data.<br>• Sync the AD DS users and groups of litware.com with the Azure AD tenant.<br>• Ensure that only users that are assigned specific admin roles can invite guest users.<br>• Increase the maximum number of devices that can be joined or registered to Azure AD to 10.",
      "Technical Requirements": "ADatum identifies the following technical requirements:<br>• Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>• Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.<br>• Users must provide one authentication method to reset their password by using SSPR.<br><strong> Available methods must include:</strong><br>&nbsp;&nbsp;- Email<br>&nbsp;&nbsp;- Phone<br>&nbsp;&nbsp;- Security questions<br>&nbsp;&nbsp;- The Microsoft Authenticator app<br>• Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.<br>• The principle of least privilege must be used."
    },
    "type": "radio",
    "correctAnswer": 1,
    "prompt": "Select the correct option:",
    "options": [
      "A. Azure AD Connect cloud sync between the Azure AD tenant and litware.com",
      "B. Azure AD Connect to include the litware.com domain",
      "C. staging mode in Azure AD Connect for the litware.com domain"
    ],
    "correctAnswerText": "B. Azure AD Connect to include the litware.com domain\nExplanation: To implement changes for litware.com while adhering to the requirement that no trust relationship exists between the two on-premises domains (adatum.com and litware.com), you should use Azure AD Connect (classic).\n\n• Multi-Forest Support: A single instance of Azure AD Connect can connect to multiple forest environments, even if those forests have no trust between them. You simply provide separate administrative credentials for each forest during the configuration.\n• Feature Completeness: Standard Azure AD Connect supports advanced features often required in these scenarios, such as device writeback and specific attribute filtering."
  },
{
    "id": 51,
    "type": "radio",
    "title": "Question 51",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have the Azure resources shown in the following table.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q51_azure_table.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Azure Resources Table\" />\n      </div>\n\n      <p>To which identities can you assign the Contributor role for RG1?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 4,
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <p>In Azure Role-Based Access Control (RBAC), roles such as Contributor can be assigned to the following identity types:</p>\n    <ul>\n      <li><strong>Users</strong> (Azure AD users)</li>\n      <li><strong>Groups</strong> (Azure AD security groups)</li>\n      <li><strong>Service Principals</strong> (App registrations in Azure AD)</li>\n      <li><strong>Managed Identities</strong> (System-assigned identities for VMs, applications, etc.)</li>\n    </ul>\n    <p>Therefore, you can assign the Contributor role to <strong>User1, Group1, VM1, and App1</strong>.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. User1 only",
      "B. User1 and Group1 only",
      "C. User1 and VM1 only",
      "D. User1, VM1, and App1 only",
      "E. User1, Group1, VM1, and App1"
    ]
  },
  {
    "id": 52,
    "type": "dropdown",
    "title": "Question 52",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant that contains a user named User1. User1 is assigned the User Administrator role. You need to configure External collaboration settings for the tenant to meet the following requirements:</p>\n      <ul>\n        <li>Guest users must be prevented from querying staff email addresses.</li>\n        <li>Guest users must be able to access the tenant only if they are invited by User1.</li>\n      </ul>\n      <p>Which three settings should you configure? To answer, select the appropriate settings in the answer area.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    </div>\n\n    <div style=\"margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Guest user access restrictions:</strong> \n        <select class=\"inline-select\" data-key=\"guestAccessRestrictions\" style=\"flex: 1; max-width: 380px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Guest users have the same access as members (most inclusive)\">Guest users have the same access as members (most inclusive)</option>\n          <option value=\"Guest users have limited access to properties and memberships of directory objects\">Guest users have limited access to properties and memberships of directory objects</option>\n          <option value=\"Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)\">Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)</option>\n        </select>\n      </p>\n      \n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Guest invite restrictions:</strong> \n        <select class=\"inline-select\" data-key=\"guestInviteRestrictions\" style=\"flex: 1; max-width: 380px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Anyone in the organization can invite guest users including guests and non-admins (most inclusive)\">Anyone in the organization can invite guest users including guests and non-admins (most inclusive)</option>\n          <option value=\"Member users and users assigned to specific admin roles can invite guest users including guests with member\">Member users and users assigned to specific admin roles can invite guest users including guests with member</option>\n          <option value=\"Only users assigned to specific admin roles can invite guest users\">Only users assigned to specific admin roles can invite guest users</option>\n          <option value=\"No one in the organization can invite guest users including admins (most restrictive)\">No one in the organization can invite guest users including admins (most restrictive)</option>\n        </select>\n      </p>\n\n      <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;\">\n        <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Enable guest self-service sign up via user flows:</strong> \n        <select class=\"inline-select\" data-key=\"enableGuestSelfService\" style=\"flex: 1; max-width: 380px; padding: 6px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"No\">No</option>\n          <option value=\"Yes\">Yes</option>\n        </select>\n      </p>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "guestAccessRestrictions": "Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)",
      "guestInviteRestrictions": "Only users assigned to specific admin roles can invite guest users",
      "enableGuestSelfService": "No"
    },
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      Guest user access restrictions: Guest user access is restricted to properties and memberships of their own directory objects (most restrictive) This is the \"strict\" setting. It prevents guests from seeing the profiles of other users, searching the directory, or viewing group memberships. They can only see their own information. \n      \n      Guest invite restrictions: Only users assigned to specific admin roles can invite guest users. \n      By default, any member user can usually invite guests. This setting locks that down so that only people with roles like Global Administrator or Guest Inviter can bring external people into the tenant. \n      \n      Enable guest self-service sign up via user flows: \n      No This disables the ability for external users to sign themselves up for access to your applications. Every guest must be manually invited by an admin.\n    </div>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 53,
    "type": "radio",
    "title": "Question 53",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>\n      <p>You needed to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      A. the Groups blade in the Azure Active Directory admin center                                                                                                    Incorrect.\n       \n      Group-based licensing does not remove existing direct (individual) license assignments.\n       \n      B. the Set-AzureADUser cmdlet       Incorrect.\n       \n      This cmdlet manages user properties, not bulk license removal.\n       \n      C. the Identity Governance blade in the Azure Active Directory admin center                                                                                                                                              Incorrect.\n       \n      This is used for access reviews and lifecycle management, not licensing tasks.\n       \n      D. the Licenses blade in the Azure Active Directory admin center                                                                                                                                                                Correct.\n       \n      The Licenses blade allows you to view all users assigned a specific license(E3) and perform bulk removal of that license. This makes it the most efficient option within the admin center for removing licenses from many users at once.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. the Groups blade in the Azure Active Directory admin center",
      "B. the Set-AzureAdUser cmdlet",
      "C. the Identity Governance blade in the Azure Active Directory admin center",
      "D. the Licenses blade in the Azure Active Directory admin center"
    ]
  },
  {
    "id": 54,
    "type": "radio",
    "title": "Question 54",
    "questionText": "\n      <div style=\"margin-bottom: 15px; text-align: left;\">\n        <p>Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</p>\n        <p>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</p>\n        <p>You have a Microsoft 365 E5 subscription. You create a user named User1.</p>\n        <p>You need to ensure that User1 can update the status of Identity Secure Score improvement actions.</p>\n        <p><strong>Solution:</strong> You assign the Security Operator role to User1.</p>\n        <p><strong>Does this meet the goal?</strong></p>\n      </div>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <div style=\"white-space: pre-line; text-align: left;\">\n        B With read and write access, you can make changes and directly interact with identity secure score. Global administrator, Security administrator Exchange administrator SharePoint administrator, Security Operator has only read access, so he cannot update anything\n        https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/identity-secure-score#who-can-use-the-identity-secure-score\n      </div>\n    ",
    "isCaseStudy": false,
    "options": [
      "A. Yes",
      "B. No"
    ]
  },
  {
    "id": 55,
    "type": "radio",
    "title": "Question 55",
    "questionText": "\n      <div style=\"margin-bottom: 15px; text-align: left;\">\n        <p>Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</p>\n        <p>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</p>\n        <p>You have a Microsoft 365 E5 subscription.</p>\n        <p>You create a user named User1.</p>\n        <p>You need to ensure that User1 can update the status of Identity Secure Score improvement actions.</p>\n        <p><strong>Solution:</strong> You assign the SharePoint Administrator role to User1.</p>\n        <p><strong>Does this meet the goal?</strong></p>\n      </div>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <div style=\"white-space: pre-line; text-align: left;\">\n        A. Yes       Incorrect.\n         \n        The SharePoint Administrator role is limited to managing SharePoint Online settings and does not grant permissions for Identity Secure Score.\n\n        B. No       Correct.\n         \n        Updating Identity Secure Score requires roles like Security Administrator or Global Administrator, not SharePoint Administrator.\n      </div>\n    ",
    "isCaseStudy": false,
    "options": [
      "A. Yes",
      "B. No"
    ]
  },
  {
    "id": 56,
    "type": "radio",
    "title": "Question 56",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant that contains a user named Admin1.</p>\n      <p>You need to ensure that Admin1 can perform only the following tasks:</p>\n      <ul>\n        <li>From the Microsoft 365 admin center, create and manage service requests.</li>\n        <li>From the Microsoft 365 admin center, read and configure service health.</li>\n        <li>From the Azure portal, create and manage support tickets.</li>\n      </ul>\n      <p>The solution must minimize administrative effort.</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      D. Create a custom role and assign the role to Admin1.\n       \n      A custom role allows you to specify highly granular permissions tailored to a user's unique requirements. If you need Admin1 to have only the specified permissions with no additional tasks beyond the ones mentioned, a custom role can be meticulously designed to accomplish this.\n       \n      For organizations with strict compliance needs or highly specific delegation requirements, creating custom roles might seem like a viable solution.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Create an administrative unit and add Admin1.",
      "B. Enable Azure AD Privileged Identity Management (PIM) for Admin1.",
      "C. Assign Admin1 the Helpdesk Administrator role.",
      "D. Create a custom role and assign the role to Admin1."
    ]
  },
  {
    "id": 57,
    "type": "dropdown",
    "title": "Question 57",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with an Azure AD tenant.</p>\n      <p>You need to ensure that user authentication always occurs by validating passwords against the AD DS domain.</p>\n      <p>What should you configure, and what should you use? To answer, select the appropriate options in the answer area.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n        <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;\">\n          <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Configure:</strong> \n          <select class=\"inline-select\" data-key=\"configureOption\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Azure AD Password protection\">Azure AD Password protection</option>\n            <option value=\"Cross-tenant synchronization\">Cross-tenant synchronization</option>\n            <option value=\"Pass-through authentication\">Pass-through authentication</option>\n            <option value=\"Password hash synchronization\">Password hash synchronization</option>\n          </select>\n        </p>\n        \n        <p style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;\">\n          <strong style=\"flex: 1; text-align: left; padding-right: 15px;\">Use:</strong> \n          <select class=\"inline-select\" data-key=\"useOption\" style=\"flex: 1; max-width: 320px; padding: 6px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Azure AD Connect\">Azure AD Connect</option>\n            <option value=\"Microsoft Identity Manager (MIM)\">Microsoft Identity Manager (MIM)</option>\n            <option value=\"The Microsoft Entra admin center\">The Microsoft Entra admin center</option>\n            <option value=\"The Microsoft Purview compliance portal\">The Microsoft Purview compliance portal</option>\n          </select>\n        </p>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "configureOption": "Pass-through authentication",
      "useOption": "Azure AD Connect"
    },
    "correctAnswerText": "\n    <p>\n      https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-password-ban-bad-on-premises\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 58,
    "type": "radio",
    "title": "Question 58",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have a Microsoft 365 tenant that uses the domain named fabrikam.com. The Guest invite settings for Azure Active Directory (Azure AD) are configured as shown in the exhibit.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q58_guest_invite.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Guest Invite Settings Exhibit\" />\n      </div>\n\n      <p>A user named bsmith@fabrikam.com shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>\n\n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q58_user_description.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Users Table\" />\n      </div>\n\n      <p>Which users will be emailed a passcode?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      In Question, [Email Protected] = bsmith@fabrikam.com \n      https://learn.microsoft.com/en-us/azure/active-directory/external-identities/one-time-passcode\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. User2 only",
      "B. User1 only",
      "C. User1 and User2 only",
      "D. User1, User2, and User3"
    ]
  },
  {
    "id": 59,
    "type": "radio",
    "title": "Question 59",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>\n      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n      <p>What should you use?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      This PowerShell cmdlet is used to adjust licenses for users in the Microsoft 365 admin center and can be used to add, replace, or remove licenses. It allows for bulk operations when used in a script, making it quite efficient for managing licenses for a large number of users.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. the Administrative units blade in the Azure Active Directory admin center",
      "B. the Set-MsolUserLicense cmdlet",
      "C. the Groups blade in the Azure Active Directory admin center",
      "D. the Set-WindowsProductKey cmdlet"
    ]
  },
  {
    "id": 60,
    "type": "dropdown",
    "title": "Question 60",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with Azure AD and contains the users shown in the following table.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q60_table.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Users Table Exhibit\" />\n      </div>\n\n      <p>In Azure AD Connect, Domain/OU Filtering is configured as shown in the following exhibit.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q60_domain_OU.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Domain OU Filtering Exhibit\" />\n      </div>\n\n      <p>Azure AD Connect is configured as shown in the following exhibit.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q60_config.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Azure AD Connect Configuration Exhibit\" />\n      </div>\n\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 1px solid #ddd;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; width: 80px; padding: 8px;\">Yes</th>\n              <th style=\"text-align: center; width: 80px; padding: 8px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 10px; text-align: left;\">User1 can use self-service password reset (SSPR) to reset his password.</td>\n              <td style=\"text-align: center; padding: 10px;\"><select class=\"inline-select answer-select\" data-key=\"stmt1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center; padding: 10px;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 10px; text-align: left;\">If User1 accesses Microsoft Exchange Online, he will be authenticated by an on-premises domain controller.</td>\n              <td style=\"text-align: center; padding: 10px;\"><select class=\"inline-select answer-select\" data-key=\"stmt2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center; padding: 10px;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 10px; text-align: left;\">User2 can be added to a Microsoft SharePoint Online site as a member.</td>\n              <td style=\"text-align: center; padding: 10px;\"><select class=\"inline-select answer-select\" data-key=\"stmt3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center; padding: 10px;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "stmt1": "Yes",
      "stmt2": "Yes",
      "stmt3": "No"
    },
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      Yes\n      Yes\n      No\n    </div>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 61,
    "type": "radio",
    "title": "Question 61",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>\n      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n      <p>What should you use?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      the Licenses blade in the Azure Active Directory admin center\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. the Update-MgGroup cmdlet",
      "B. the Licenses blade in the Azure Active Directory admin center",
      "C. the Set-WindowsProductKey cmdlet",
      "D. the Administrative units blade in the Azure Active Directory admi center"
    ]
  },
  {
    "id": 62,
    "type": "radio",
    "title": "Question 62",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant that contains the users shown in the following table.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q62_table.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"Users Table Exhibit\" />\n      </div>\n\n      <p>You need to compare the role permissions of each user. The solution must minimize administrative effort.</p>\n      <p>What should you use?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      B. the Microsoft 365 admin center.\n      \n      The Microsoft 365 admin center provides a centralized location where you can view and manage the role permissions of each user in your Azure AD tenant. This will allow you to easily compare the permissions of Admin1, Admin2, and Admin3, thus minimizing administrative effort. The other options do not provide this specific functionality.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. the Microsoft 365 Defender portal",
      "B. the Microsoft 365 admin center",
      "C. the Microsoft Entra admin center",
      "D. the Microsoft Purview compliance portal"
    ]
  },
  {
    "id": 63,
    "type": "radio",
    "title": "Question 63",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com. Several users use their contoso.com email address for self-service sign-up to Azure AD.</p>\n      <p>You gain global administrator privileges to the Azure AD tenant that contains the self-signed users.</p>\n      <p>You need to prevent the users from creating user accounts in the contoso.com Azure AD tenant for self-service sign-up to Microsoft 365 services.</p>\n      <p>Which PowerShell cmdlet should you run?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      A. Update-MgOrganization.\n      \n      To prevent users from creating accounts in the Azure AD tenant for self-service sign-up, you need to modify. <br> the organization's settings. The Update-MgOrganization cmdlet allows you to configure tenant-wide policies, including disabling self-service sign-up for users.\nBy using this cmdlet, you can set the appropriate parameters to block self-service sign-up, ensuring that users cannot create accounts in the tenant using their contoso.com email addresses.\n\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Update-MgOrganization",
      "B. Update-MgPolicyPermissionGrantPolicyExclude",
      "C. Update-MgDomain",
      "D. Update-MgDomainFederationConfiguration"
    ]
  },
  {
    "id": 64,
    "type": "dropdown",
    "title": "Question 64",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant.</p>\n      <p>You need to configure the following External Identities features:</p>\n      <ul style=\"margin-top: 5px; margin-bottom: 10px;\">\n        <li>B2B collaboration</li>\n        <li>Monthly active users (MAU)-based pricing</li>\n      </ul>\n\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q64_externalId.jpg\" alt=\"Exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n           </div>\n\n      <p>Which settings should you configure? Complete the statements by selecting the appropriate option from each drop-down list.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n        <div style=\"display: grid; grid-template-columns: max-content 1fr; gap: 12px 15px; align-items: center;\">\n          \n          <label for=\"feature1\" style=\"font-weight: bold;\">B2B collaboration:</label>\n          <select class=\"inline-select\" id=\"feature1\" data-key=\"feature1\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Overview\">Overview</option>\n            <option value=\"Cross-tenant access settings\">Cross-tenant access settings</option>\n            <option value=\"All identity providers\">All identity providers</option>\n            <option value=\"External collaboration settings\">External collaboration settings</option>\n            <option value=\"Diagnose and solve problems\">Diagnose and solve problems</option>\n            <option value=\"Linked subscriptions\">Linked subscriptions</option>\n          </select>\n\n          <label for=\"feature2\" style=\"font-weight: bold;\">Monthly active users (MAU)-based pricing:</label>\n          <select class=\"inline-select\" id=\"feature2\" data-key=\"feature2\" style=\"padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Overview\">Overview</option>\n            <option value=\"Cross-tenant access settings\">Cross-tenant access settings</option>\n            <option value=\"All identity providers\">All identity providers</option>\n            <option value=\"External collaboration settings\">External collaboration settings</option>\n            <option value=\"Diagnose and solve problems\">Diagnose and solve problems</option>\n            <option value=\"Linked subscriptions\">Linked subscriptions</option>\n          </select>\n\n        </div>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "feature1": "External collaboration settings",
      "feature2": "Linked subscriptions"
    },
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      1. External collaboration settings: You go here to control how guest users interact with your tenant. This includes guest user access restrictions, guest invite restrictions, and collaboration restrictions (setting up an \"Allow\" or \"Deny\" list for specific domains).\n      \n      2. Linked subscriptions: This is used for billing configuration. Microsoft Entra External ID uses a \"Monthly Active Users\" (MAU) billing model linked to an Azure subscription.\n    </div>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 65,
    "type": "radio",
    "title": "Question 65",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant that contains the external user shown in the following exhibit.</p>\n      \n      <div style=\"margin: 12px 0; text-align: center;\">\n        <img src=\"images/q65_identity.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"External User Exhibit\" />\n      </div>\n\n      <p>You update the email address of the user.</p>\n      <p>You need to ensure that the user can authenticate by using the updated email address.</p>\n      <p>What should you do for the user?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      D. Reset the redemption status.\n      \n      You can update the guest user's sign-in information after they've redeemed your invitation for B2B collaboration. There might be times when you'll need to update their sign-in information, for example when the user wants to sign in using a different email.\n      \n      Previously, you had to manually delete the guest user's account from your directory and reinvite the user. Now you can use the Microsoft Entra admin center, PowerShell or the Microsoft Graph invitation API to reset the user's redemption status and reinvite the user while keeping the user's object ID, group memberships, and app assignments.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Modify the Authentication methods settings.",
      "B. Reset the password.",
      "C. Revoke the active sessions.",
      "D. Reset the redemption status."
    ]
  },
  {
    "id": 66,
    "type": "radio",
    "title": "Question 66",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant.</p>\n      <p>You need to ensure that only users from specific external domains can be invited as guests to the tenant.</p>\n      <p>Which settings should you configure?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      The correct answer is A.\n      External collaboration settings. External collaboration settings allow you to control who can collaborate with your Azure AD tenant. You can use external collaboration settings to specify which external domains are allowed to be invited as guests to your tenant.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. External collaboration settings",
      "B. All identity providers",
      "C. Cross-tenant access settings",
      "D. Linked subscriptions"
    ]
  },
  {
    "id": 67,
    "type": "radio",
    "title": "Question 67",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure AD tenant that contains a user named User1 and a Microsoft365 group named Group1. User1 is the owner of Group1.</p>\n      <p>You need to ensure that User1 is notified every three months to validate the guest membership of Group1.</p>\n      <p>What should you do?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      B. Create an access review. In Microsoft Entra (AzureAD), an Access Review is the specific tool designed to automate the periodic re-validation of group memberships or application access.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Configure the External collaboration settings.",
      "B. Create an access review.",
      "C. Configure an access package.",
      "D. Create a group expiration policy."
    ]
  },
{
    id: 68,

    type: "matrix",

    title: "Question 68: Hot Spot",

    questionText: `
        <div style="margin-bottom:15px;text-align:left;">

            <p>
                You have a Microsoft Entra tenant that contains a group named
                Group3 and an administrative unit named Department1.
            </p>

            <p>
                Department1 has the users shown in the Users exhibit.
            </p>

            <div style="margin:10px 0;text-align:center;">
                <img
                    src="images/q68_user_exhibit.jpg"
                    alt="Userst1 has the groups shown in the Groups exhibit.
            </p>

            <div style="margin:10px 0;text-align:center;">
                <img
                    src="images/q68_groups.jpg"
                    alt="Groups Exhibit"
                    style="
                         Assignments exhibit.
            </p>

            <div style="margin:10px 0;text-align:center;">
                <img
                    src="images/q68_admin.jpg"
                    alt="Assignments Exhibit"
                    style="
                        max-widthdiv style="margin:10px 0;text-align:center;">
                <img
                    src="images/q68_group2.1.jpg"
                    alt="Group2 Exhibit"
                    style="
                        max-width:100%;
                ue.
                Otherwise, select
                <strong>No</strong>.
            </p>

            <p>
                <em>NOTE: Each correct selection is worth one point.</em>
            </p>

        </div>
    `,

    rows: [
        {
            id: "stmt1",
            label:
                "Admin1 can reset the passwords of User3 and User4."
        },

        {
            id: "stmt2",
            label:
                "Admin1 can add User1 to Group3."
        },

        {
            id: "stmt3",
            label:
                "Admin3 can reset the password of User1."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 1,
        stmt2: 1,
        stmt3: 0
    },

    correctAnswerText: `
        <p>
            <strong>Correct Answers:</strong>
        </p>

        <ul>
            <li>
                <strong>Admin1 can reset the passwords of User3 and User4:</strong>
                No
            </li>

            <li>
                <strong>Admin1 can add User1 to Group3:</strong>
                No
            </li>

            <li>
                <strong>Admin3 can reset the password of User1:</strong>
                Yes
            </li>
        </ul>

        <p>
            <strong>Statement 1:</strong><br>
            Admin1 does not have sufficient permissions to reset the passwords
            of both User3 and User4 within the administrative unit scope.
        </p>

        <p>
            <strong>Statement 2:</strong><br>
            Administrative unit scoping limits management actions.
            Admin1 cannot add User1 to Group3 under the given configuration.
        </p>

        <p>
            <strong>Statement 3:</strong><br>
            Admin3 has permissions within the administrative unit that allow
            password reset operations for User1.
        </p>
    `
},
{
    id: 69,

    type: "matrix",

    title: "Question 69: Hot Spot",

    questionText: `
        <div style="margin-bottom:15px;text-align:left;">

            <p>
                Your network contains an on-premises Active Directory Domain Services
                (AD DS) domain named <code>fabrikam.com</code>.
                The domain contains an Active Directory Federation Services (AD FS)
                instance and a member server named Server1 that runs Windows Server.
            </p>

            <p>
                The domain contains the users shown in the following table.
            </p>

            <div style="margin: 10px 0; text-align: center;">
        <img src="images/q69_table.jpg" alt="Users Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>


            <p>
                You have a Microsoft Entra tenant named contoso.com that is linked
                to a Microsoft 365 subscription.
            </p>

            <p>
                You establish federation between fabrikam.com and contoso.com by
                using a Microsoft Entra Connect instance configured as shown in the exhibit.
            </p>

            <div style="margin: 10px 0; text-align: center;">
        <img src="images/q69_exhibit.jpg" alt="Optional Features Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>


            <p>
                You perform the following tasks in contoso.com:
            </p>

            <ul style="margin-top:5px;margin-bottom:10px;">
                <li>Create a group named Group1.</li>
                <li>Disable User2.</li>
                <li>Enable User3.</li>
            </ul>

            <p>
                For each of the following statements, select
                <strong>Yes</strong>
                if the statement is true.
                Otherwise, select
                <strong>No</strong>.
            </p>

            <p>
                <em>NOTE: Each correct selection is worth one point.</em>
            </p>

        </div>
    `,

    rows: [
        {
            id: "stmt1",
            label: "You can add User1 to Group1."
        },
        {
            id: "stmt2",
            label: "User2 can sign in to Server1."
        },
        {
            id: "stmt3",
            label: "User3 can sign in to Microsoft 365."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },
        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 1,
        stmt2: 1,
        stmt3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li><strong>You can add User1 to Group1:</strong> No</li>
            <li><strong>User2 can sign in to Server1:</strong> No</li>
            <li><strong>User3 can sign in to Microsoft 365:</strong> Yes</li>
        </ul>

        <p>
            <strong>Statement 1: No</strong><br>
            User1 cannot be added to Group1 under the given synchronization
            and federation configuration.
        </p>

        <p>
            <strong>Statement 2: No</strong><br>
            User2 was disabled. Disabled accounts cannot authenticate to
            on-premises resources such as Server1.
        </p>

        <p>
            <strong>Statement 3: Yes</strong><br>
            User3 was enabled. Because federation is configured between
            fabrikam.com and Microsoft Entra ID, User3 can authenticate
            successfully to Microsoft 365.
        </p>
    `
},
{
    id: 70,

    type: "matrix",

    title: "Question 70: Hot Spot",

    questionText: `
        <div style="margin-bottom:15px;text-align:left;">

            <p>
                You have a Microsoft Entra tenant that has a Microsoft Entra ID P2 service plan.
                The tenant contains the users shown in the following table.
            </p>

            <div style="margin:10px 0;text-align:center;">
                images/q70_table1.jpg
            </div>

            <p>
                You have the Device settings shown in the following exhibit.
            </p>

            <div style="margin:10px 0;text-align:center;">
                <img
                    src="images/q70_exhibit.jpg"
                    alt="Device Settings s shown in the following table.
            </p>

            <div style="margin:10px 0;text-align:center;">
                <img
                    src="images/q70_table2.jpg"
                    alt="User1 Devices Exhibit"
                    style=        <strong>Yes</strong>
                if the statement is true.
                Otherwise, select
                <strong>No</strong>.
            </p>

            <p>
                <em>NOTE: Each correct selection is worth one point.</em>
            </p>

        </div>
    `,

    rows: [
        {
            id: "stmt1",
            label:
                "User1 can join four additional Windows 10 devices to Microsoft Entra ID."
        },

        {
            id: "stmt2",
            label:
                "Admin1 can set Devices to be Microsoft Entra joined or Microsoft Entra registered require Multi-Factor Authentication to Yes."
        },

        {
            id: "stmt3",
            label:
                "Admin2 is a local administrator on Device3."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 1,
        stmt2: 0,
        stmt3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Statement 1:</strong> No
            </li>

            <li>
                <strong>Statement 2:</strong> Yes
            </li>

            <li>
                <strong>Statement 3:</strong> No
            </li>
        </ul>

        <p>
            <strong>Statement 1:</strong><br>
            User1 has already used most of the allowed device quota and cannot join
            four more Windows devices.
        </p>

        <p>
            <strong>Statement 2:</strong><br>
            Admin1 has sufficient administrative permissions to modify
            Microsoft Entra device settings.
        </p>

        <p>
            <strong>Statement 3:</strong><br>
            Admin2 does not automatically become a local administrator on Device3.
        </p>
    `
},
  {
    "id": 71,
    "type": "radio",
    "title": "Question 71",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure subscription named Sub1 that contains a user named User1.</p>\n      <p>You need to ensure that User1 can purchase a Microsoft Entra Permissions Management license for Sub1. The solution must follow the principle of least privilege.</p>\n      <p>Which role should you assign to User1?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      B. Billing Administrator.\n      \n      This scenario evaluates your understanding of the Principle of Least Privilege (PoLP) when managing financial transactions and subscription extensions within a Microsoft Entra ID tenant.\n\n      To evaluate this correctly, you must isolate the intent of the task (purchasing a license) from the subject matter of the product (Permissions Management):\n\n      The Core Action: Purchasing a license or starting a trial for any Microsoft Entra enterprise service principal requires data-plane authority over commerce and billing pipelines.\n\n      Role Alignment: The Billing Administrator role possesses the explicit, bounded authority to handle payment information, manage organizational subscriptions, log support tickets, and execute product purchases across the tenant.\n\n      Applying Least Privilege: While a Global Administrator can also purchase licenses, that role grants unrestricted control-plane access over every configuration in the identity platform, which explicitly violates the principle of least privilege. Why the Other Options are Incorrect:\n      \n      A. Global Administrator: This role has full, omnipotent access to all directory administrative features. It would easily allow the purchase, but assigning it introduces massive unnecessary security risks and violates the strict constraint of choosing the role with the least privilege.\n      \n      C. Permissions Management Administrator: This role is designed for functional administration after the license has already been acquired and provisioned. It grants complete access to manage permission remediation, discovery settings, and multi-cloud infrastructure mapping within the Permissions Management UI, but it possesses no commerce capabilities and cannot authorize a monetary license purchase transaction.\n      \n      D. User Access Administrator: This role is an Azure RBAC role used at the resource tier to manage user role assignments, access conditions, and permissions boundaries (such as assigning Owner/Contributor rights to subscriptions or resource groups). It does not hold commerce or billing delegation authority within the Microsoft Entra tenant framework.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Global Administrator",
      "B. Billing Administrator",
      "C. Permissions Management Administrator",
      "D. User Access Administrator"
    ]
  },
  {
    "id": 72,
    "type": "radio",
    "title": "Question 72",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure subscription that contains a user named User1 and two resource groups named RG1 and RG2. You need to ensure that User1 can perform the following tasks:</p>\n      <ul style=\"margin-top: 5px; margin-bottom: 10px;\">\n        <li>View all resources.</li>\n        <li>Restart virtual machines.</li>\n        <li>Create virtual machines in RG1 only.</li>\n        <li>Create storage accounts in RG1 only.</li>\n      </ul>\n      <p>What is the minimum number of role-based access control (RBAC) role assignments required?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      Minimum Number of Role Assignments:\n      \n      To meet these requirements, User1 needs a combination of Reader, Virtual Machine Contributor, and Storage Account Contributor roles. Since there is overlap in the roles that allow User1 to restart VMs and create VMs, we can optimize the number of role assignments.\n\n      Reader role at the subscription level.\n      \n      Virtual Machine Contributor role at RG1 (to allow both VM creation and VM restart in RG1). Storage Account Contributor role at RG1.\n      \n      Conclusion:\n      \n      The minimum number of role assignments required is 3. the correct answer is:\n      C. 3\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ]
  },
  {
    "id": 73,
    "type": "radio",
    "title": "Question 73",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You work for a company named Contoso, Ltd. that has a Microsoft Entra tenant named contoso.com. Contoso is working on a project with the following two partner companies:</p>\n      <ul style=\"margin-top: 5px; margin-bottom: 10px;\">\n        <li>A company named A. Datum Corporation that has a Microsoft Entra tenant named adatum.com.</li>\n        <li>A company named Fabrikam, Inc. that has a Microsoft Entra tenant named fabrikam.com.</li>\n      </ul>\n      <p>When you attempt to invite a new guest user from adatum.com to contoso.com, you receive an error message. You can successfully invite a new guest user from fabrikam.com to contoso.com.</p>\n      <p>You need to be able to invite new guest users from adatum.com to contoso.com. What should you configure?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      D. Collaboration restrictions.\n      \n      To control which external domains your organization can collaborate with via B2B collaboration (guest invitations), Microsoft Entra ID uses External collaboration settings. Within these settings, the specific feature responsible for explicitly allowing or blocking invitations to specific target domains is Collaboration restrictions.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. Guest invite settings",
      "B. Verifiable credentials",
      "C. Named locations",
      "D. Collaboration restrictions"
    ]
  },
  {
    "id": 74,
    "type": "radio",
    "title": "Question 74",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>You have an Azure subscription that contains a user-assigned managed identity named Managed1 in the East US Azure region. The subscription contains the resources shown in the following table.</p>\n      \n      <div style=\"margin: 10px 0; text-align: center;\">\n        <img src=\"images/q74_table.jpg\" alt=\"Resources Table Exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n\n      <p>Which resource can use Managed1 as their identity?</p>\n    </div>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      C. VM1 and WebApp1 only. Reasoning Managed Identities are designed to provide an identity for compute resources so they can authenticate to other services. VM1 (Virtual Machine): This is a compute resource. It can be assigned a managed identity (Managed1) to allow the OS or applications running inside it to access other Azure resources. WebApp1 (App Service): This is also a compute resource.\n\n      It can use a managed identity to securely connect to back-end services like databases or key vaults without storing credentials in code.\n    </div>\n  ",
    "isCaseStudy": false,
    "options": [
      "A. WebApp1 only",
      "B. storage1 and WebApp1 only",
      "C. VM1 and WebApp1 only",
      "D. VM1, storage1, and WebApp1"
    ]
  },
  {
    "id": 75,
    "type": "dragdrop",
    "title": "Question 75",
    "questionText": "\n    <div style=\"margin-bottom: 15px; text-align: left;\">\n      <p>Your network contains an on-premises Active Directory domain named contoso.com that syncs with Microsoft Entra ID by using Microsoft Entra Connect.</p>\n      <p>The domain contains the users shown in the following table.</p>\n      \n      <div style=\"margin: 10px 0; text-align: center;\">\n        <img src=\"images/q75_table1.jpg\" alt=\"Users Table Exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n\n      <p>From Active Directory Users and Computers, you add the following user:</p>\n      <ul style=\"margin-top: 5px; margin-bottom: 10px;\">\n        <li>Name: User3</li>\n        <li>UPN: user3@contoso.com</li>\n        <li>Proxy addresses: smtp:user3@contoso.com, smtp:user3@contoso.onmicrosoft.com</li>\n      </ul>\n      \n      <p>From Active Directory Users and Computers, you update the proxyAddresses attribute for each user as shown in the following table.</p>\n      \n      <div style=\"margin: 10px 0; text-align: center;\">\n        <img src=\"images/q75_table2.jpg\" alt=\"Proxy Addresses Table Exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n\n      <p>You trigger a manual synchronization.</p>\n      <p>Which sync status will Microsoft Entra Connect sync return for each user? To answer, drag the appropriate status to the correct users.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n    </div>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <div style=\"white-space: pre-line; text-align: left;\">\n      User1: Successfully synced — This user had a perfect match between their on-premises attributes and the cloud object (or they were a brand new user), allowing the sync engine to link or create the account without conflict.\n\n      User2: AttributeValueMustBeUnique error occurs — This happens when an attribute that must be unique (like ProxyAddresses or UserPrincipalName) is already being used by another object in the cloud. For example, if User2 on-premises has the email sales@contoso.com, but a shared mailbox in the cloud already uses that same address, the sync will fail for User2.\n\n      User3: InvalidSoftMatch error occurs — A \"Soft Match\" happens when the sync engine tries to join an on-premises user to an existing cloud-only user based on their Primary SMTP address or UserPrincipalName. An InvalidSoftMatch typically means the ImmutableID (the unique anchor) is already set on the cloud object and doesn't match the on-premises user, or the account types are incompatible (e.g., trying to soft-match a user to a group).\n    </div>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "AttributeValueMustBeUnique error occurs",
      "InvalidSoftMatch error occurs.",
      "ObjectTypeMismatch error occurs.",
      "Successfully synced"
    ],
    "dropTargets": [
      {
        "id": "target1",
        "label": "User1@contoso.com",
        "correctAnswer": "Successfully synced"
      },
      {
        "id": "target2",
        "label": "User2@contoso.com",
        "correctAnswer": "AttributeValueMustBeUnique error occurs"
      },
      {
        "id": "target3",
        "label": "User3@contoso.com",
        "correctAnswer": "InvalidSoftMatch error occurs."
      }
    ]
  },
  {
    "id": 76,
    "type": "radio",
    "title": "Question 76",
    "questionText": "\n    <p>You have a Microsoft 365 tenant that uses the domain name fabrikam.com.</p>\n    <p>The External collaboration settings are configured as shown in the Collaboration exhibit. (Click the Collaboration tab.)</p>\n    \n    <p>&lt;insert clickable image named: collaboration tab here&gt;</p> \n    \n    <p>The Email one-time passcode for guests setting is enabled for the tenant.</p>\n    <p>A user named bsmith@fabrikam.com shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>\n    \n    <p>&lt;insert table here&gt;</p>\n    \n    <p>Which users will be emailed a passcode?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>Correct Answer: B (User2 only)</strong></p>\n    <p>Here, bsmith@fabrikam.com is an internal user of the tenant domain fabrikam.com.</p><br>\n    <p><strong>User3 (Internal User):</strong> Belongs to the same tenant domain (fabrikam.com), so they authenticate natively and do not trigger the guest passcode flow.</p><br>\n    <p><strong>User1 (Existing Guest / Account Holder):</strong> Authenticates via their existing Microsoft Entra account, Microsoft account (MSA), or federated identity provider rather than needing a one-time passcode.</p><br>\n    <p><strong>User2 (External Guest):</strong> Lacks a pre-existing Microsoft Entra account, Microsoft account, or federated social login. Because the Email one-time passcode for guests feature is enabled, they will receive a one-time passcode via email.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User1 only",
      "User2 only",
      "User1 and User2 only",
      "User1, User2, and User3"
    ]
  },
  {
    "id": 77,
    "type": "radio",
    "title": "Question 77",
    "questionText": "\n    <p>You have an Azure subscription named Sub1 that contains a virtual machine named VM1.</p>\n    <p>You need to enable Microsoft Entra login for VM1 and configure VM1 to access the resources in Sub1. Which type of identity should you assign to VM1?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p><strong>Correct Answer: D (system-assigned managed identity)</strong></p>\n    <p>System-assigned managed identity: This type of managed identity is enabled directly on an Azure resource. In this case, enabling a system-assigned managed identity on VM1 would allow VM1 to authenticate with other Azure resources within Sub1, using the identity associated with VM1.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Microsoft Entra user account",
      "user-assigned managed identity",
      "Azure Automation account",
      "system-assigned managed identity"
    ]
  },
  {
    "id": 78,
    "type": "radio",
    "title": "Question 78",
    "questionText": "\n    <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n      <strong>Scenario (Questions 78-80):</strong><br>\n      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>\n      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.\n    </div>\n    <p><strong>Question 78</strong></p>\n    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p><strong>Solution:</strong> You use the the Set-MgUserLicense cmdlet.</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p><strong>Correct Answer: C (the Set-MgUserLicense cmdlet)</strong></p>\n    <p>To remove the Office 365 Enterprise E3 licenses from the users who are now part of a group with Office 365 Enterprise E5 licenses assigned, you should use the Set-MgUserLicense cmdlet. This cmdlet allows you to modify the licenses assigned to a user. By using this cmdlet, you can remove the Office 365 Enterprise E3 licenses from all users who are part of the group where you assigned the Office 365 Enterprise E5 licenses.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Set-WindowsProductKey cmdlet",
      "the Update-MgGroup cmdlet",
      "the Set-MgUserLicense cmdlet",
      "the Update-MgUser cmdlet"
    ]
  },
  {
    "id": 79,
    "type": "radio",
    "title": "Question 79",
    "questionText": "\n    <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n      <strong>Scenario (Questions 78-80):</strong><br>\n      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>\n      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.\n    </div>\n    <p><strong>Question 79</strong></p>\n    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p><strong>Solution:</strong> You use the Licenses blade in the Microsoft Entra admin center.</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A (the Licenses blade in the Microsoft Entra admin center)</strong></p>\n    <p>To remove the Office 365 Enterprise E3 licenses from the users who are now part of a group with Office 365 Enterprise E5 licenses assigned, you should use the \"Licenses\" blade in the Microsoft Entra admin center. This allows you to manage license assignments at a group level, making it easier to apply and remove licenses for multiple users simultaneously.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Licenses blade in the Microsoft Entra admin center",
      "the Administrative units blade in the Microsoft Entra admin center",
      "the Identity Governance blade in the Microsoft Entra admin center",
      "the Update-MgUser cmdlet"
    ]
  },
  {	
    "id": 80,
    "type": "radio",
    "title": "Question 80",
    "questionText": "\n    <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n      <strong>Scenario (Questions 78-80):</strong><br>\n      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>\n      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.\n    </div>\n    <p><strong>Question 80</strong></p>\n    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p><strong>Solution:</strong> You use the Set-MgUserLicense cmdlet.</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p><strong>Correct Answer: C (the Set-MgUserLicense cmdlet)</strong></p>\n    <p>The Set-MgUserLicense cmdlet (part of Microsoft Graph PowerShell) allows you to add or remove licenses for a user programmatically.</p><br>\n    <p>You can automate the removal of the E3 license from all 2,500 users by scripting the process.</p><br>\n    <p>This approach avoids manual removal and provides the least administrative effort compared to doing it through the GUI.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Identity Governance blade in the Microsoft Entra admin center",
      "the Update-MgGroup cmdlet",
      "the Set-MgUserLicense cmdlet",
      "the Administrative units blade in the Microsoft Entra admin center"
    ]
  },
  {
    "id": 85,
    "type": "dropdown",
    "title": "Question 85",
    "questionText": "\n    <p><strong>Question 85: Hotspot</strong></p>\n    <p>You have a Microsoft Entra tenant named contoso.com that contains an administrative unit named AU1 and two users named User1 and User2. User1 is a member of AU1.</p>\n    <p>You need to perform the following role assignments:</p>\n    <ul>\n      <li>User1: Security Administrator</li>\n      <li>User2: User Administrator</li>\n    </ul>\n    <p>For which scopes can each user be assigned the role?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n      <p style=\"margin-bottom: 8px;\"><strong>User1:</strong> \n        <select class=\"inline-select\" data-key=\"user1\" style=\"padding: 6px; margin-left: 10px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"AU1 only\">AU1 only</option>\n          <option value=\"contoso.com only\">contoso.com only</option>\n          <option value=\"AU1 and contoso.com\">AU1 and contoso.com</option>\n        </select>\n      </p>\n      <p style=\"margin-bottom: 0;\"><strong>User2:</strong> \n        <select class=\"inline-select\" data-key=\"user2\" style=\"padding: 6px; margin-left: 10px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"AU1 only\">AU1 only</option>\n          <option value=\"contoso.com only\">contoso.com only</option>\n          <option value=\"AU1 and contoso.com\">AU1 and contoso.com</option>\n        </select>\n      </p>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "user1": "contoso.com only",
      "user2": "AU1 and contoso.com"
    },
    "correctAnswerText": "\n    <p><strong>User1 : contoso.com only.</strong></p>\n    <p>This means User1 has administrative privileges for the entire domain but not specifically for AU1. They can manage all users and resources under contoso.com, except for any AU-specific restrictions.</p>\n    <p><strong>User2 : AU1 and contoso.com.</strong></p>\n    <p>User2 has access to both AU1 and the entire domain (contoso.com).</p>\n    <p>They can manage users in AU1 and also work with global settings for the domain. This is the most powerful access level compared to the other options.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 86,
    "type": "radio",
    "title": "Question 86",
    "questionText": "\n    <p><strong>Question 86</strong></p>\n    <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>\n    <p>From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>\n    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p>What should you use?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A (the Set-MgUserLicense cmdlet)</strong></p>\n    <p><strong>Direct license reassignment:</strong> Set-MgUserLicense lets you add or remove specific SKUs (e.g., E5) from individual user objects in Microsoft Graph. Because the 2,500 users are already licensed with E3, you can target each user and replace the E3 SKU with E5 in a single PowerShell operation, achieving the removal of E3 with minimal manual steps.</p>\n    <p><strong>Automation-friendly:</strong> The cmdlet accepts pipeline input and can be scripted to process many accounts, which is essential when dealing with thousands of users.</p>\n    <p><strong>Least administrative overhead:</strong> No additional blades or UI navigation are required; the operation is performed from a PowerShell session that can be run once and left unattended.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Set-MgUserLicense cmdlet",
      "the Identity Governance blade in the Microsoft Entra admin center",
      "the Groups blade in the Microsoft Entra admin center",
      "the Update-MgGroup cmdlet"
    ]
  },
  {
    "id": 87,
    "type": "radio",
    "title": "Question 87",
    "questionText": "\n    <p><strong>Question 87</strong></p>\n    <p>You have an Azure subscription that contains a storage account named storage1.</p>\n    <p>You plan to deploy an app named App1 that will be hosted on multiple virtual machines. The virtual machines will authenticate to a third-party API by using secrets.</p>\n    <p>You need to recommend an authentication solution for the virtual machines. The solution must meet the following requirements:</p>\n    <ul>\n      <li>Securely store secrets.</li>\n      <li>Ensure that credentials do NOT need to be stored in the App1 code.</li>\n      <li>Ensure that the virtual machines can access Azure resources by using Microsoft Entra authentication.</li>\n      <li>Minimize administrative effort.</li>\n    </ul>\n    <p>What should you include in the recommendation?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>Correct Answer: B (user-assigned managed identities and Azure Key Vault)</strong></p>\n    <p><strong>Securely store secrets:</strong> Azure Key Vault is the dedicated service for securely storing and controlling access to tokens, passwords, certificates, and API keys.</p>\n    <p><strong>No credentials in App1 code:</strong> By using a Managed Identity, the application requests a token from the Azure Instance Metadata Service (IMDS). The code never sees or stores a password or client secret.</p>\n ",
    "isCaseStudy": false,
    "options": [
      "user accounts and Storage Service Encryption",
      "user-assigned managed identities and Azure Key Vault",
      "user accounts and Azure Key Vault",
      "system assigned managed identities and Storage Service Encryption"
    ]
  },
{
    id: 88,

    type: "matrix",

    title: "Question 88: Hot Spot",

    questionText: `
        <p><strong>Question 88: Hot Spot</strong></p>

        <p>
            You have an Azure subscription named Sub1 that contains the resources shown
            in the following table.
        </p>

        <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table1.jpg" alt="table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">

   <p>Sub1 contains the managed identities shown in the following table.</p>
    <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table2.jpg" alt="table2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    <p>Sub1 has the role-based access control (RBAC) role assignments shown in the following table.</p>
    <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table3.jpg" alt="table3" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">

 <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

           `,

    rows: [
        {
            id: "stmt1",
            label:
                "Automation1 can access the contents of the secrets stored in Vault1."
        },

        {
            id: "stmt2",
            label:
                "Identity2 can be assigned to Automation2 to gain access to the contents of the secrets stored in Vault1."
        },

        {
            id: "stmt3",
            label:
                "VM1 can access the contents of the secrets stored in Vault1."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 1,
        stmt2: 0,
        stmt3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Automation1 can access the contents of the secrets stored in Vault1:</strong>
                No
            </li>

            <li>
                <strong>Identity2 can be assigned to Automation2 to gain access to the contents of the secrets stored in Vault1:</strong>
                Yes
            </li>

            <li>
                <strong>VM1 can access the contents of the secrets stored in Vault1:</strong>
                Yes
            </li>
        </ul>

        <p>
            <strong>Statement 1: No</strong><br>
            Automation1 cannot access Key Vault secrets unless its managed
            identity has been granted permission through Azure RBAC or Key Vault
            access policies.
        </p>

        <p>
            <strong>Statement 2: Yes</strong><br>
            Identity2 is a user-assigned managed identity.
            It can be assigned to Automation2 so Automation2 can inherit the
            permissions granted to Identity2.
        </p>

        <p>
            <strong>Statement 3: Yes</strong><br>
            VM1 can access secrets stored in Vault1 provided the VM's managed
            identity has been granted the necessary permissions.
        </p>
    `
},
{
    id: 89,

    type: "radio",

    title: "Question 89",

    questionText: `
        <p><strong>Question 89</strong></p>

        <p>
            You have an Azure subscription that contains an Azure Automation
            account named Automation1.
        </p>

        <p>
            You need to grant Automation1 access to Azure resources.
            The solution must meet the following requirements:
        </p>

        <ul>
            <li>
                Ensure that any permissions granted to Automation1 are removed
                when the account is deleted.
            </li>

            <li>
                Minimize administrative effort.
            </li>
        </ul>

        <p>
            What should you use?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "A client secret",
        "A system-assigned managed identity",
        "A certificate",
        "A user-assigned managed identity"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. A system-assigned managed identity
        </p>

        <p>
            <strong>System-Assigned Managed Identity Lifecycle:</strong>
            A system-assigned managed identity is created and managed
            automatically by Azure. The identity is directly tied to the
            lifecycle of the Azure resource.
        </p>

        <p>
            When the Automation account is deleted,
            the managed identity is automatically deleted as well.
        </p>

        <p>
            <strong>Scope:</strong>
            Each system-assigned managed identity is unique to a single Azure
            resource and cannot be shared across multiple resources.
        </p>

        <p>
            <strong>Why this is the best solution:</strong>
            A system-assigned managed identity meets both requirements:
        </p>

        <ul>
            <li>
                Permissions are automatically removed when the Automation
                account is deleted.
            </li>

            <li>
                No secrets, certificates, or credential rotation are required,
                minimizing administrative effort.
            </li>
        </ul>
    `
},

  {
    "id": 90,
    "type": "radio",
    "title": "Question 90",
    "questionText": "\n    <p><strong>Question 90</strong></p>\n    <p>You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of contractor@fabrikam.com.</p>\n    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as contractor@fabrikam.com.</p>\n    <p>What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p><strong>Correct option: C – Create a guest user account in contoso.com</strong></p>\n    <p>The contractor’s identity is external to the tenant; Azure AD supports guest (external) identities that can be added as users in the tenant.</p>\n    <p>Adding the contractor as a guest user creates a directory object (e.g., contractor@contoso.com) that can be assigned licenses, roles, and access to enterprise applications such as App1.</p>\n    <p>Once the guest account exists, you can assign the appropriate application role (or assign the user directly) so the contractor can authenticate to App1 using their own credentials (contractor@fabrikam.com).</p>\n    <p>Guest accounts are managed through the Azure AD portal or Graph API, allowing you to control consent, conditional access, and lifecycle (e.g., expiration) – all required for secure external collaboration.</p>\n    <p><strong>Why the other options are not appropriate</strong></p>\n    <p><strong>A – Add a custom domain name to contoso.com:</strong> Adding a domain only enables you to verify ownership of the domain and route email; it does not create a user identity or grant application access.</p>\n    <p><strong>B – Configure the External collaboration settings:</strong> While external collaboration settings control how guests can be invited, they do not themselves create the guest account or provide authentication to a specific application.</p>\n    <p><strong>D – Add a WS-Fed identity provider:</strong> Introducing a WS-Fed IdP is useful for federation scenarios where you want to authenticate against an external identity system, but it does not directly create a user record in Azure AD or allow the contractor to sign-in with their existing email address.</p>\n    <p>Therefore, the most direct and compliant method to enable the contractor to authenticate as contractor@fabrikam.com and access App1 is to create a guest user account in the tenant.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Add a custom domain name to contoso.com.",
      "Configure the External collaboration settings.",
      "Create a guest user account in contoso.com.",
      "Add a WS-Fed identity provider."
    ]
  },
{
    id: 91,

    type: "matrix",

    title: "Question 91: Hot Spot",

    questionText: `
        <p><strong>Question 91</strong></p>

        <p>
            You have two Microsoft Entra tenants named
            <code>contoso.com</code> and
            <code>fabrikam.com</code>.
            Contoso.com contains the users shown in the following table.
        </p>

        <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q91_table1.jpg" alt="user & Ou" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
    
    
    <p>Contoso.com contains the groups shown in the following table.</p>

<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q91_table2.jpg" alt="Group Members" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
   
    <p>You configure cross-tenant synchronization from <code>contoso.com</code> to <code>fabrikam.com</code> and enable cross-tenant synchronization for User3 and Group2.</p>
    <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>

    `,

    rows: [
        {
            id: "stmt1",
            label: "User1 will sync to fabrikam.com."
        },
        {
            id: "stmt2",
            label: "User2 will sync to fabrikam.com."
        },
        {
            id: "stmt3",
            label: "User3 will sync to fabrikam.com."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },
        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 1,
        stmt2: 0,
        stmt3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>User1 will sync to fabrikam.com:</strong>
                No
            </li>

            <li>
                <strong>User2 will sync to fabrikam.com:</strong>
                Yes
            </li>

            <li>
                <strong>User3 will sync to fabrikam.com:</strong>
                Yes
            </li>
        </ul>

        <p>
            <strong>User1: No</strong><br>
            User1 is not included in the configured cross-tenant
            synchronization scope and will not synchronize.
        </p>

        <p>
            <strong>User2: Yes</strong><br>
            User2 meets the synchronization scope requirements and
            will synchronize to fabrikam.com.
        </p>

        <p>
            <strong>User3: Yes</strong><br>
            Cross-tenant synchronization is explicitly enabled for User3,
            therefore User3 will synchronize successfully.
        </p>
    `
},
  {
    "id": 92,
    "type": "radio",
    "title": "Question 92",
    "questionText": "\n    <p><strong>Question 92</strong></p>\n    <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com. Several users use their contoso.com email address for self-service sign-up to Microsoft Entra.</p>\n    <p>You gain global administrator privileges to the Microsoft Entra tenant that contains the self-signed users.</p>\n    <p>You need to prevent the users from creating user accounts in the contoso.com Microsoft Entra tenant for self-service sign-up to Microsoft 365 services.</p>\n    <p>Which PowerShell cmdlet should you run?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A – Update-MgPolicyAuthorizationPolicy</strong></p>\n    <p>To prevent self-service sign-up to Microsoft 365 services for users with the contoso.com domain, you need to modify the authorization policy of the tenant. The Update-MgPolicyAuthorizationPolicy cmdlet is used to update the authorization policies, including enabling or disabling self-service sign-up options.</p>\n    <p>This approach allows you to control the self-service registration feature at the tenant level, ensuring that users cannot create accounts using the contoso.com email domain.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Update-MgPolicyAuthorizationPolicy",
      "Update-MgDomain",
      "Update-MgPolicyPermissionGrantPolicyExclude",
      "Update-MgDomainFederationConfiguration"
    ]
  },
  {
    "id": 93,
    "type": "radio",
    "title": "Question 93",
    "questionText": "\n    <p><strong>Question 93</strong></p>\n    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>\n<div style=\"margin-bottom: 15px; text-align: center;\">\n\n        <img src=\"images/q93_table1.jpg\" alt=\"members group\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n    \n    <ul>\n      <li>Allow users to request access to this application: Yes</li>\n      <li>To which group should assigned users be added: Group1</li>\n      <li>Require approval before granting access to this application: Yes</li>\n      <li>Who is allowed to approve access to this application: User2</li>\n    </ul>\n    <p>Which users can request access to App1?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p><strong>Allow users to request access to this application: Yes</strong>: This setting allows any user in the tenant to request access to App1.</p>\n    <p><strong>Require approval before granting access to this application: Yes</strong>: This setting means that access requests need approval.</p>\n    <p><strong>Who is allowed to approve access to this application: User2</strong>: This setting designates User2 as the approver for access requests.</p>\n    <p>Since the setting \"Allow users to request access to this application\" is set to \"Yes,\" any user in the tenant can request access to App1. This includes User1, User2, and User3.</p>\n    <p><strong>Correct Answer: D. User1, User2, and User3</strong></p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User3 only",
      "User2 and User3 only",
      "User1 and User3 only",
      "User1, User2, and User3"
    ]
  },
  {
    "id": 94,
    "type": "dropdown",
    "title": "Question 94",
    "questionText": "\n    <p><strong>Question 94: Hotspot</strong></p>\n    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>\n<div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q94_user_role.jpg\" alt=\"User Role\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n\n    <p>The tenant contains the identities shown in the following table.</p>\n<div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q94_group.jpg\" alt=\"Group Identities\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n\n    <p>Which users can create custom security attributes, and to which identities can the attributes be assigned?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px; display: grid; grid-template-columns: auto 1fr; gap: 12px 15px; align-items: center;\">\n      <strong>Can create custom security attributes:</strong>\n      <select class=\"inline-select\" data-key=\"attributeCreation\" style=\"padding: 6px; width: 100%; max-width: 300px;\">\n        <option value=\"\">-- Select Option --</option>\n        <option value=\"User1 only\">User1 only</option>\n        <option value=\"User2 only\">User2 only</option>\n        <option value=\"User1 and User2 only\">User1 and User2 only</option>\n        <option value=\"User1, User2, and User3\">User1, User2, and User3</option>\n      </select>\n\n      <strong>Custom security attributes can be assigned to:</strong>\n      <select class=\"inline-select\" data-key=\"attributeAssignment\" style=\"padding: 6px; width: 100%; max-width: 300px;\">\n        <option value=\"\">-- Select Option --</option>\n        <option value=\"MI only\">MI only</option>\n        <option value=\"Service1 only\">Service1 only</option>\n        <option value=\"MI and Service1 only\">MI and Service1 only</option>\n        <option value=\"All identities\">All identities</option>\n      </select>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "attributeCreation": "User2 only",
      "attributeAssignment": "MI and Service1 only"
    },
    "correctAnswerText": "\n    <p><strong>User2 only.</strong></p>\n    <p>This setting dictates which specific user(s) or entity has the permission to define or create new custom security attributes within the directory.</p>\n    <p><strong>MI and Service1 only.</strong></p>\n    <p>This setting determines which types of objects in the directory can have custom security attributes applied to them.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 95,
    "type": "radio",
    "title": "Question 95",
    "questionText": "\n    <p><strong>Question 95</strong></p>\n    <p>You have two Microsoft Entra tenants named contoso.com and fabrikam.com. Contoso.com contains the identities shown in the following table.</p>\n    <p>&lt;insert table named: user type&gt;</p>\n    <p>You configure cross-tenant synchronization from contoso.com to fabrikam.com.</p>\n    <p>Which identities will sync with fabrikam.com?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n    <p><strong>Correct Answer: A – User1 only</strong></p>\n    <p><strong>Reasoning:</strong> In Microsoft Entra cross-tenant synchronization, the service is specifically designed to synchronize User objects across tenants to facilitate collaboration.</p>\n    <p><strong>User Synchronization:</strong> When you configure the sync from contoso.com to fabrikam.com, individual users (like User1) are provisioned as B2B collaboration users in the target tenant.</p>\n    <p><strong>Groups are NOT Synced:</strong> Cross-tenant synchronization does not synchronize groups (Group1 or Group2) themselves.</p>\n    <p>While a user's membership attributes might influence their access, the actual group object and its membership list do not move between tenants.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User1 only",
      "User1 and Group1 only",
      "User1 and Group2 only",
      "User1, Group1, and Group2"
    ]
  },
{
    id: 96,

    type: "matrix",

    title: "Question 96: Hot Spot",

    questionText: `
        <p><strong>Question 96: Hot Spot</strong></p>

        <p>
            You have a Microsoft 365 E5 subscription that contains two groups
            named Group1 and Group2 and the users shown in the following table.
        </p>

        <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q96_department.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

 	<p>Group2 is a member of Group1.</p>
        <p>
            You configure cross-tenant synchronization with a partner organization
            named fabrikam.com by using the following configurations:
        </p>

        <div style="
            background:#f9f9f9;
            padding:10px 15px;
            border-left:4px solid #0078d4;
            margin:10px 0;
            border-radius:4px;
        ">
            <ul style="
                margin:0;
                padding-left:20px;
                line-height:1.6;
            ">
                <li>
                    <strong>Provisioning status:</strong> On
                </li>

                <li>
                    <strong>Users and groups:</strong> Group1
                </li>

                <li>
                    <strong>Prevent accidental deletion:</strong> 500
                </li>

                <li>
                    <strong>Scope:</strong> Sync only assigned users and groups
                </li>

                <li>
                    <strong>Scoping filter:</strong>
                    Department EQUALS Marketing
                </li>
            </ul>
        </div>

        <p>
            From the Cross-tenant synchronization settings,
            you set Provisioning Mode to Automatic.
        </p>

        <p>
            For each of the following statements,
            select <strong>Yes</strong> if the statement is true.
            Otherwise, select <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "q96_statement1",
            label:
                "User1 will be provisioned in the Microsoft Entra tenant of fabrikam.com."
        },

        {
            id: "q96_statement2",
            label:
                "User2 will be provisioned in the Microsoft Entra tenant of fabrikam.com."
        },

        {
            id: "q96_statement3",
            label:
                "User3 will be provisioned in the Microsoft Entra tenant of fabrikam.com."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        q96_statement1: 0,
        q96_statement2: 1,
        q96_statement3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>User1:</strong> Yes
            </li>

            <li>
                <strong>User2:</strong> No
            </li>

            <li>
                <strong>User3:</strong> No
            </li>
        </ul>

        <p>
            <strong>User1 will be provisioned in the Microsoft Entra tenant of fabrikam.com: Yes</strong>
        </p>

        <p>
            User1 satisfies the synchronization scope requirements and
            matches the Department = Marketing filter.
            Therefore User1 is provisioned in the target tenant.
        </p>

        <p>
            <strong>User2 will be provisioned in the Microsoft Entra tenant of fabrikam.com: No</strong>
        </p>

        <p>
            User2 does not satisfy the synchronization scope and therefore
            is not provisioned to fabrikam.com.
        </p>

        <p>
            <strong>User3 will be provisioned in the Microsoft Entra tenant of fabrikam.com: No</strong>
        </p>

        <p>
            User3 does not meet the effective synchronization requirements under
            the configured group assignment and scoping filter combination.
        </p>
    `
},
  {
    "id": 97,
    "type": "dropdown",
    "title": "Question 97",
    "questionText": "\n    <p><strong>Question 97: Hotspot</strong></p>\n    <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. Contoso.com contains the identities shown in the following table.</p>\n    <p>&lt;insert table named: membership ou here&gt;</p>\n    <p>You have a Microsoft Entra tenant that contains a user named User1.</p>\n    <p>You deploy Microsoft Entra Cloud Sync and configure a scoping filter by using the following string: CN=Group1,OU=OU1,DC=contoso,DC=com.</p>\n    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n      <table style=\"width: 100%; border-collapse: collapse;\">\n        <thead>\n          <tr style=\"border-bottom: 2px solid #ccc;\">\n            <th style=\"text-align: left; padding: 8px;\">Statements</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">Contoso\\User1 syncs from contoso.com to the tenant.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q97_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">Contoso\\User2 syncs from contoso.com to the tenant.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q97_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr>\n            <td style=\"padding: 8px;\">Contoso\\Group1 syncs from contoso.com to the tenant.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q97_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "q97_statement1": "Yes",
      "q97_statement2": "No",
      "q97_statement3": "Yes"
    },
    "correctAnswerText": "\n    <p><strong>Contoso\\User1 syncs from contoso.com to the tenant — Yes</strong><br>\n    <em>Reasoning:</em> This user is located in an OU that is \"selected\" for synchronization, or they meet the attribute criteria (like having a specific department or city) set in the sync rules.</p>\n    \n    <p><strong>Contoso\\User2 syncs from contoso.com to the tenant — No</strong><br>\n    <em>Reasoning:</em> This is the critical \"filter\" point. User2 is likely in an unselected OU (like a \"Disabled Users\" OU) or they lack a required attribute (like an email address or a specific \"sync\" flag) that the sync engine is looking for.</p>\n    \n    <p><strong>Contoso\\Group1 syncs from contoso.com to the tenant — Yes</strong><br>\n    <em>Reasoning:</em> Similar to User1, this group is located within the sync scope. Note that for a group to sync effectively, its members must also be within the sync scope for those memberships to appear in the cloud.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 98,
    "type": "radio",
    "title": "Question 98",
    "questionText": "\n    <p><strong>Question 98</strong></p>\n    <p>You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1 and a Microsoft Teams team named Team1. The subscription contains five security groups named Group1, Group2, Group3, Group4, and Group5.</p>\n    <p>You need to implement access packages for Site1 and Team1. The solution must meet the following requirements:</p>\n    \n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li>Members of Group3 must be able to request access to Site1 only.</li>\n        <li>Members of Group1 must be able to request access to Site1 and Team1.</li>\n        <li>Members of Group4 must be able to request access to Site1 and Team1.</li>\n        <li>Only members of Group2 must be able to approve access package requests from Group1 members.</li>\n        <li>Only members of Group5 must be able to approve access package requests from Group3 and Group4 members.</li>\n      </ul>\n    </div>\n\n    <p>What is the minimum number of access packages you should create?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>Correct Answer: B – 3</strong></p>\n    <p><strong>Justification:</strong></p>\n    <p>An access package can be scoped to multiple resources, but a single package cannot have different sets of approvers for different requestors.</p>\n    <p>Group3 must be limited to Site1 only and have its own approvers (Group5). This requires a dedicated package that includes only Site1 and assigns Group5 as the approver group.</p>\n    <p>Group1 and Group4 both need access to Site1 and Team1, but only Group1’s requests are approved by Group2, while Group4’s requests are approved by Group5. Because the approver set differs, these two requestor groups cannot share the same package. Hence they each need a separate package that includes both Site1 and Team1 and assigns the appropriate approvers.</p>\n    <p>Consequently the minimum set of packages is:</p>\n    <ul>\n      <li><strong>PackageA:</strong> Site1 only, approvers = Group5 (covers Group3 requests).</li>\n      <li><strong>PackageB:</strong> Site1+Team1, approvers = Group2 (covers Group1 requests).</li>\n      <li><strong>PackageC:</strong> Site1+Team1, approvers = Group5 (covers Group4 requests).</li>\n    </ul>\n    <p>Creating only two packages would force either Group3 or Group4 to share an approver that is not allowed, violating the requirement. Four or five packages would satisfy the functional needs but are not minimal.</p>\n    <p>Therefore, the minimum number of access packages required is 3 (option B).</p>\n    <p><strong>References:</strong><br>\n    Azure AD Entitlement Management – Access packages overview: https://learn.microsoft.com/entra/identity-governance/entitlement-management-access-packages<br>\n    Plan access packages in Azure AD entitlement management: https://learn.microsoft.com/entra/identity-governance/entitlement-management-how-to-plan-access-packages</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    "id": 99,
    "type": "dropdown",
    "title": "Question 99",
    "questionText": "\n    <p><strong>Question 99: Hotspot</strong></p>\n    <p>You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.</p>\n<div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q99_GroupType.jpg\" alt=\"Group Type\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n\n    <p>You plan to manage the lifecycles of the groups.</p>\n    <p>Which groups can be set to expire, and what is the shortest group lifetime you can set? To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px; display: grid; grid-template-columns: auto 1fr; gap: 12px 15px; align-items: center;\">\n      <strong>Can expire:</strong>\n      <select class=\"inline-select\" data-key=\"canExpire\" style=\"padding: 6px; width: 100%; max-width: 350px;\">\n        <option value=\"\">-- Select Option --</option>\n        <option value=\"Group1 only\">Group1 only</option>\n        <option value=\"Group2 only\">Group2 only</option>\n        <option value=\"Group1 and Group3 only\">Group1 and Group3 only</option>\n        <option value=\"Group3 and Group4 only\">Group3 and Group4 only</option>\n        <option value=\"Group2, Group3, and Group4 only\">Group2, Group3, and Group4 only</option>\n      </select>\n\n      <strong>Shortest lifetime:</strong>\n      <select class=\"inline-select\" data-key=\"shortestLifetime\" style=\"padding: 6px; width: 100%; max-width: 350px;\">\n        <option value=\"\">-- Select Option --</option>\n        <option value=\"3 days\">3 days</option>\n        <option value=\"7 days\">7 days</option>\n        <option value=\"14 days\">14 days</option>\n        <option value=\"30 days\">30 days</option>\n        <option value=\"45 days\">45 days</option>\n      </select>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "canExpire": "Group2 only",
      "shortestLifetime": "30 days"
    },
    "correctAnswerText": "\n    <p><strong>Can expire: Group2 only</strong></p>\n    <p>In Microsoft 365, Expiration Policies only apply to Microsoft 365 Groups. If Group 1 is a Security Group and Group 3 is a Mail-enabled Security Group, they cannot have an expiration policy applied to them. Therefore, if Group 2 is the only Microsoft 365 Group in the scenario, it is the only one that \"can expire.\"</p>\n    \n    <p><strong>Shortest lifetime: 30 days</strong></p>\n    <p>This usually refers to the Access Review or Guest Access settings described in the prompt's case study. When multiple policies or review periods are mentioned (e.g., one review every 30 days and another every 180 days), the \"shortest lifetime\" for a user's access before it must be re-validated is the smallest increment—in this case, 30 days.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 100,
    "type": "dropdown",
    "title": "Question 100",
    "questionText": "\n    <p><strong>Question 100: Hotspot</strong></p>\n    <p>You have two Microsoft Entra tenants named contoso.com and fabrikam.com. Contoso.com contains the users shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q100_MembersLocation.jpg\" alt=\"members location\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>You configure cross-tenant synchronization from contoso.com to fabrikam.com by using the following settings:</p>\n\n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li>Users and groups: Group1</li>\n        <li>Provisioning Mode: Automatic</li>\n        <li>Attribute Mappings\n          <ul style=\"margin: 0; padding-left: 20px;\">\n            <li>Source Object Scope: Filter1, Filter2</li>\n          </ul>\n        </li>\n      </ul>\n      <p style=\"margin-top: 8px; margin-bottom: 0;\">Filter1 is configured as shown in the following table.</p>\n    </div>\n\n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q100_DepartmentAttribute.jpg\" alt=\"Department Attribute\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>Filter2 is configured as shown in the following table.</p>\n\n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q100_SourceAttribute.jpg\" alt=\"Source Attribute\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n      <table style=\"width: 100%; border-collapse: collapse;\">\n        <thead>\n          <tr style=\"border-bottom: 2px solid #ccc;\">\n            <th style=\"text-align: left; padding: 8px;\">Statements</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">User1 syncs to fabrikam.com.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q100_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">User2 syncs to fabrikam.com.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q100_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr>\n            <td style=\"padding: 8px;\">User3 syncs to fabrikam.com.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q100_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "q100_statement1": "No",
      "q100_statement2": "No",
      "q100_statement3": "No"
    },
    "correctAnswerText": "\n    <p><strong>User1 syncs to fabrikam.com — No</strong><br>\n    <em>Reasoning:</em> User1 is synchronized to fabrikam.com. This means User1 either exists only in the cloud directory (e.g., created directly in Azure AD) or exists in a different on-premises directory that is not synchronizing with fabrikam.com, or is not synchronized at all.</p>\n    \n    <p><strong>User2 syncs to fabrikam.com — No</strong><br>\n    <em>Reasoning:</em> Similar to User1, User2's account is not being synchronized to the fabrikam.com cloud environment.</p>\n    \n    <p><strong>User3 syncs to fabrikam.com — No</strong><br>\n    <em>Reasoning:</em> The same applies to User3.</p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 101,
    "type": "radio",
    "title": "Question 101",
    "questionText": "\n    <p><strong>Question 101</strong></p>\n    <p>You have a Microsoft Entra tenant.</p>\n    <p>You have the end-user desktop environments shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q101_DeviceDescription.jpg\" alt=\"Device Description\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>You need to deploy Global Secure Access.</p>\n    <p>In which environments can you install the Global Secure Access client?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p><strong>Correct Answer: D – Developers, Office staff, and Senior managers only</strong></p>\n    <p><strong>Reasoning:</strong> The Global Secure Access (GSA) client—which is part of Microsoft’s Security Service Edge (SSE) solution—has specific hardware and OS requirements that generally exclude the types of devices and shared-use patterns typical of Frontline workers.</p>\n    <p><strong>Platform Support:</strong> The client is currently supported on Windows (10/11), macOS, iOS, and Android.</p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Contractors, Developers, Frontline workers, Office staff, and Senior managers",
      "Frontline workers and Senior managers only",
      "Contractors and Office staff only",
      "Developers, Office staff, and Senior managers only"
    ]
  },
  {
    id: 102,

    type: "matrix",

    title: "Question 102: Hot Spot",

    questionText: `
        <p><strong>Question 102: Hot Spot</strong></p>

        <p>
            You have a Microsoft Entra tenant that contains an administrative
            unit named AU1.
            AU1 is configured for assigned membership.
        </p>

        <p>
            The tenant contains the users shown in the following table.
        </p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q102_UserDepartment.jpg"
                alt="User Department"
                style="
         e.
        </p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q102_GroupsDepartment.jpg"
                alt="Groups Department"
                style="
         p>

        <div style="
            background:#f9f9f9;
            padding:10px 15px;
            border-left:4px solid #0078d4;
            margin:10px 0;
            border-radius:4px;
        ">
            <ul style="
                margin:0;
                padding-left:20px;
                line-height:1.6;
                text-align:left;
            ">
                <li>
                    Membership type: Dynamic User
                </li>

                <li>
                    Dynamic membership rule:
                    (user.department -eq "hr")
                </li>
            </ul>
        </div>

        <p>
            For each of the following statements, select
            <strong>Yes</strong>
            if the statement is true.
            Otherwise, select
            <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "q102_statement1",
            label: "HR is a member of AU1."
        },

        {
            id: "q102_statement2",
            label: "User1 is a member of AU1."
        },

        {
            id: "q102_statement3",
            label: "User2 is a member of AU1."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        q102_statement1: 1,
        q102_statement2: 0,
        q102_statement3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>HR is a member of AU1:</strong>
                No
            </li>

            <li>
                <strong>User1 is a member of AU1:</strong>
                Yes
            </li>

            <li>
                <strong>User2 is a member of AU1:</strong>
                No
            </li>
        </ul>

        <p>
            <strong>HR is a member of AU1 — No</strong><br>
            Dynamic User membership evaluates only user objects.
            Groups cannot become members of a Dynamic User
            administrative unit.
        </p>

        <p>
            <strong>User1 is a member of AU1 — Yes</strong><br>
            User1 satisfies the dynamic membership rule:

            <code>
                (user.department -eq "hr")
            </code>

            and is automatically added to AU1.
        </p>

        <p>
            <strong>User2 is a member of AU1 — No</strong><br>
            User2 does not satisfy the dynamic rule.
            Previous assigned membership is removed after the
            administrative unit is converted to Dynamic User membership.
        </p>
    `
},
{
    id: 103,

    type: "matrix",

    title: "Question 103: Hot Spot",

    questionText: `
        <p><strong>Question 103: Hot Spot</strong></p>

        <p>
            You have a Microsoft Entra tenant named
            <code>contoso.com</code>
            that has cross-tenant access configured as shown in the following table.
        </p>

        <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q103_Config.jpg" alt="Configuration" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You have two partner organizations named Fabrikam, Inc. and A. Datum Corporation. Fabrikam has a Microsoft 365 domain named fabrikam.com. A. Datum has a Microsoft 365 domain named adatum.com.</p>
    <p>You configure cross-tenant access for fabrikam.com as shown in the following table.</p>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q103_Config2.jpg" alt="Configuration 2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>
<p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q103_Config2.jpg"
                alt="Cross-Tenant Access Configuration         select <strong>Yes</strong> if the statement is true.
            Otherwise, select <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "q103_statement1",
            label:
                "A user in contoso.com can send a guest invitation to a user that has an email address of user1@fabrikam.com."
        },

        {
            id: "q103_statement2",
            label:
                "A user in contoso.com can send a guest invitation to a user that has an email address of user1@adatum.com."
        },

        {
            id: "q103_statement3",
            label:
                "A user in contoso.com can accept a guest invitation from a user that has an email address of user1@fabrikam.com."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        q103_statement1: 1,
        q103_statement2: 1,
        q103_statement3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Statement 1:</strong>
                No
            </li>

            <li>
                <strong>Statement 2:</strong>
                No
            </li>

            <li>
                <strong>Statement 3:</strong>
                Yes
            </li>
        </ul>

        <p>
            <strong>
                A user in contoso.com can send a guest invitation to a user that has an email address of user1@fabrikam.com — No
            </strong>
        </p>

        <p>
            The tenant is configured with the most restrictive collaboration
            setting. Because fabrikam.com is not included in the permitted
            target domain list, invitations are blocked.
        </p>

        <p>
            <strong>
                A user in contoso.com can send a guest invitation to a user that has an email address of user1@adatum.com — No
            </strong>
        </p>

        <p>
            Adatum.com is also not listed in the allowed target domains.
            Therefore invitations to users from that domain are blocked.
        </p>

        <p>
            <strong>
                A user in contoso.com can accept a guest invitation from a user that has an email address of user1@fabrikam.com — Yes
            </strong>
        </p>

        <p>
            Collaboration restrictions control inbound guest invitations.
            They do not prevent users in contoso.com from accepting invitations
            to collaborate in external tenants. Preventing that behavior
            requires outbound cross-tenant access restrictions.
        </p>
    `
},
{
    id: 104,

    type: "radio",

    title: "Question 104",

    questionText: `
        <p><strong>Question 104</strong></p>

        <p>
            You have a Microsoft Entra tenant.
        </p>

        <p>
            You need to add the Facebook social identity provider to the tenant.
        </p>

        <p>
            What should you do first?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Add a custom domain",
        "Add a WS-Fed identity provider",
        "Add a SAML identity provider",
        "Set Enable guest self-service sign-up via user flows to Yes"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>
                Correct Answer: D. Set Enable guest self-service sign-up via user flows to Yes
            </strong>
        </p>

        <p>
            Adding a social identity provider such as Facebook requires the
            tenant to have External Identities enabled.
        </p>

        <p>
            The first prerequisite is enabling
            <strong>
                Guest self-service sign-up via user flows
            </strong>.
        </p>

        <p>
            This activates the user-flow framework that allows social identity
            providers such as Facebook to be used for authentication.
        </p>

        <p>
            After user flows are enabled:
        </p>

        <ol>
            <li>
                Enable Guest self-service sign-up via user flows.
            </li>

            <li>
                Create or modify a user flow.
            </li>

            <li>
                Add Facebook as an identity provider.
            </li>

            <li>
                Provide the Facebook application ID and secret.
            </li>
        </ol>

        <p>
            <strong>
                Why the other options are incorrect
            </strong>
        </p>

        <ul>
            <li>
                <strong>Add a custom domain</strong> —
                Used for domain verification and branding.
                It is not required for Facebook sign-in.
            </li>

            <li>
                <strong>Add a WS-Fed identity provider</strong> —
                Facebook does not use WS-Federation.
            </li>

            <li>
                <strong>Add a SAML identity provider</strong> —
                Facebook authentication is based on OAuth/OpenID Connect,
                not SAML.
            </li>
        </ul>
    `
},
  {
    "id": 105,
    "type": "radio",
    "title": "Question 105",
    "questionText": "\n    <p>\n      You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of externaluser@partner.com.\n    </p>\n    <p>\n      You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as externaluser@partner.com.\n    </p>\n    <p>\n      What should you do?\n    </p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: C (Run the New-MgInvitation cmdlet)</strong>\n    </p>\n    <p>\n      <strong>Justification:</strong><br>\n      <ul>\n        <li>\n          <strong>Option C – Run the New-MgInvitation cmdlet:</strong> \n          Creates an invitation for an external user (guest) in the tenant, generating a one-time redemption code that can be sent to the contractor. \n          The invited user can authenticate using their own credentials (e.g., externaluser@partner.com) after they accept the invitation, without requiring a local account or custom domain. \n          This is the standard method for granting external contractors access to an enterprise application in Microsoft Entra ID.\n        </li>\n      </ul>\n    </p>\n    <p>\n      <strong>Why the other options are unsuitable:</strong><br>\n      <ul>\n        <li>\n          <strong>A. Run the New-MgUser cmdlet:</strong> \n          Creates a new user object inside the tenant. The contractor would need a managed identity or password hash stored in the tenant, which is not appropriate for a third-party contractor who should keep their own identity provider.\n        </li>\n        <li>\n          <strong>B. Add a custom domain name to contoso.com:</strong> \n          Only affects name resolution and does not create a user or grant access; it does not solve the authentication requirement for an external account.\n        </li>\n        <li>\n          <strong>D. Implement Microsoft Entra Connect sync:</strong> \n          Synchronizes on-premises directories to Entra ID; it is unnecessary for a cloud-only guest and would introduce unnecessary complexity and security considerations for a simple contractor access scenario.\n        </li>\n      </ul>\n    </p>\n    <p>\n      <strong>Conclusion:</strong> The most direct, secure, and supported way to provision external access for the contractor is to send an invitation via New-MgInvitation.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      Microsoft Docs: Invite users to your application as guests<br>\n      Microsoft Docs: New-MgInvitation PowerShell cmdlet\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Run the New-MgUser cmdlet.",
      "Add a custom domain name to contoso.com.",
      "Run the New-MgInvitation cmdlet.",
      "Implement Microsoft Entra Connect sync."
    ]
  },
  {
    "id": 106,
    "type": "radio",
    "title": "Question 106",
    "questionText": "\n    <p>You have a Microsoft Entra tenant.</p>\n    <p>You create an enterprise application collection named HR Apps that has the following settings:</p>\n    \n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li><strong>Applications:</strong> App1, App2, App3</li>\n        <li><strong>Owners:</strong> Admin1</li>\n        <li><strong>Users and groups:</strong> HRUsers</li>\n      </ul>\n    </div>\n\n    <p>All three apps have the following Properties settings:</p>\n\n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li><strong>Enabled for users to sign in:</strong> Yes</li>\n        <li><strong>User assignment required:</strong> Yes</li>\n        <li><strong>Visible to users:</strong> Yes</li>\n      </ul>\n    </div>\n\n    <p>Users report that they only see App1 and App2 in the My Apps portal. You need to ensure that the users can also see App3.</p>\n    <p>What should you do from App3?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: C (From Users and groups, add HRUsers.)</strong>\n    </p>\n    <p>\n      <strong>Justification:</strong><br>\n      The issue is that App3 is not visible to the users in the My Apps portal, even though it is enabled for sign-in and user assignment is required. \n      In Azure AD, visibility of an enterprise application to end-users is controlled by user-group assignments. When an application is assigned to a group, all members of that group automatically see the app in their My Apps view. \n      The current configuration assigns no users or groups to App3; only App1 and App2 have the group HRUsers assigned. Therefore, only those apps appear for the users. \n      Adding HRUsers (or any appropriate user/group) to App3’s Users and groups assignment will make the application visible to those users, fulfilling the requirement without changing security or consent settings.\n    </p>\n    <p>\n      <strong>Why the other options are not appropriate:</strong><br>\n      <ul>\n        <li>\n          <strong>A. Configure a sign-on method:</strong> This only defines how users authenticate (e.g., SAML, OIDC). It does not affect the visibility of the app in the portal.\n        </li>\n        <li>\n          <strong>B. Review User consent permissions:</strong> Consent settings control what users can grant the app permission to do, but they do not determine whether the app appears in My Apps.\n        </li>\n        <li>\n          <strong>D. Change “User assignment required” to No:</strong> Disabling required assignment would allow the app to be visible without a group/user assignment, but it also removes the explicit control over who can use the app and is generally discouraged for security and governance reasons.\n        </li>\n      </ul>\n    </p>\n    <p>\n      <strong>Correct action:</strong><br>\n      C. From Users and groups, add HRUsers.<br>\n      Adding the existing security group to App3 creates the necessary assignment, making the application appear for all members of that group in the My Apps portal.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      Assign users or groups to an enterprise app in Azure AD<br>\n      Manage application visibility in My Apps\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "From Single sign-on, configure a sign-on method.",
      "From Permissions, review the User consent permissions.",
      "From Users and groups, add HRUsers.",
      "From Properties, change User assignment required to No."
    ]
  },
  {
    "id": 107,
    "type": "radio",
    "title": "Question 107",
    "questionText": "\n    <p>You have 2,500 users who are assigned Microsoft 365 E3 licenses. The licenses are assigned to individual users. You assign Microsoft 365 E5 licenses to a group that includes all users.</p>\n    <p>You need to remove the Microsoft 365 E3 licenses from the users by using the least amount of administrative effort.</p>\n    <p>What should you use?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: D (the Licenses blade in the Microsoft Entra admin center)</strong>\n    </p>\n    <p>\n      <strong>Why option D is the best choice:</strong><br>\n      The Licenses blade in the Microsoft Entra (Azure AD) admin center lets administrators view and modify license assignments for many users at once. After the E5 group is assigned, you can simply locate the E3 license, select the users (or the entire group), and remove the E3 assignment with a few clicks—no scripting or cmdlet knowledge required.<br>\n      This approach minimizes administrative overhead because the UI handles bulk operations automatically and provides immediate visual confirmation.\n    </p>\n    <p>\n      <strong>Why the other options are less suitable:</strong><br>\n      <ul>\n        <li>\n          <strong>A. Update-MgGroup:</strong> Updates group properties (e.g., membership rules) but does not interact with user license assignments; it cannot remove a specific license from individual users.\n        </li>\n        <li>\n          <strong>B. Set-WindowsProductKey:</strong> Used to set a product key on a Windows client; it has no effect on Microsoft 365 license assignments in Azure AD.\n        </li>\n        <li>\n          <strong>C. Set-MgUserLicense:</strong> A PowerShell cmdlet that can modify user licenses, but it requires writing and executing scripts for each user or group, which adds complexity compared to the point-and-click Licenses blade.\n        </li>\n      </ul>\n    </p>\n    <p>\n      <strong>Conclusion:</strong><br>\n      Using the Licenses blade in the Microsoft Entra admin center provides the simplest, most efficient method to strip the E3 licenses from all users while keeping the newly assigned E5 licenses intact.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      Assign licenses to users in Microsoft Entra ID<br>\n      Manage user licenses with the Microsoft Entra admin center\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "the Update-MgGroup cmdlet",
      "the Set-WindowsProductKey cmdlet",
      "the Set-MgUserLicense cmdlet",
      "the Licenses blade in the Microsoft Entra admin center"
    ]
  },
  {
    "id": 108,
    "type": "dropdown",
    "title": "Question 108",
    "questionText": "\n    <p><strong>Question 108: Hotspot</strong></p>\n    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q108-MarketingTable.jpg\" alt=\"MarketingTable\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>The tenant contains the administrative units shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q108-Ou_table.jpg\" alt=\"Ou Table\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>The tenant contains the groups shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q108-table3.jpg\" alt=\"Table 3\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>You perform the following actions:</p>\n    \n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li>Assign User1 the User Administrator role for AU2.</li>\n        <li>Assign User3 the Groups Administrator role for AU1.</li>\n        <li>Assign User5 the Authentication Administrator role for AU3.</li>\n      </ul>\n    </div>\n\n    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n      <table style=\"width: 100%; border-collapse: collapse;\">\n        <thead>\n          <tr style=\"border-bottom: 2px solid #ccc;\">\n            <th style=\"text-align: left; padding: 8px;\">Statements</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">User1 can reset the password of User3.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q108_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"padding: 8px;\">User3 can add User4 to Group2.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q108_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr>\n            <td style=\"padding: 8px;\">User5 can configure an authentication method policy that requires all Group4 members to use passwordless sign-in.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q108_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "q108_statement1": "Yes",
      "q108_statement2": "No",
      "q108_statement3": "No"
    },
    "correctAnswerText": "\n    <p>\n      <strong>User1 can reset the password of User3 — Yes</strong><br>\n      <em>Explanation:</em> In Entra ID, administrative roles like Helpdesk Administrator, User Administrator, or Global Administrator possess the rights to reset passwords for non-administrative users. Since this is marked Yes, User1 holds a highly privileged directory role (or a specific administrative unit role) that grants them password-reset authority over standard accounts like User3.\n    </p>\n    <p>\n      <strong>User3 can add User4 to Group2 — No</strong><br>\n      <em>Explanation:</em> To add a user to a group in Entra ID, a user must either be a Group Owner of that specific group, a Groups Administrator, or a User/Global Administrator. Because the answer is No, User3 is a standard user who has not been explicitly assigned as the owner of Group2, nor do they possess directory-wide group management roles.\n    </p>\n    <p>\n      <strong>User5 can configure an authentication method policy that requires all Group4 members to use passwordless sign-in — No</strong><br>\n      <em>Explanation:</em> Modifying tenant-wide security settings, authentication methods, and conditional access policies requires highly specialized, top-tier privileges—specifically the Authentication Policy Administrator, Security Administrator, or Global Administrator roles. A standard user or a lower-level admin (which User5 would be in this scenario) lacks the authorization to create or modify authentication policies affecting entire security groups.\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 109,
    "type": "radio",
    "title": "Question 109",
    "questionText": "\n    <p>You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of externaluser@partner.com.</p>\n    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as externaluser@partner.com.</p>\n    <p>What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>Why option C is correct:</strong><br>\n      The contractor is an external identity that must be able to sign-in to the tenant using a work-or-school account.<br>\n      In Azure AD, external identities are represented as guest users (Azure AD B2B). Creating a guest account in contoso.com allows the contractor to authenticate as externaluser@partner.com and be assigned to the enterprise application App1.<br>\n      Once the guest account exists, you can assign the appropriate application role or license to grant access to App1.\n    </p>\n    <p>\n      <strong>Why the other options are not suitable:</strong><br>\n      <ul>\n        <li>\n          <strong>A – Configure the External collaboration settings:</strong> This setting controls how guest users are invited, but it does not create the actual guest identity needed for authentication.\n        </li>\n        <li>\n          <strong>B – Run the New-MgUser cmdlet:</strong> This creates a native user object inside the tenant; it cannot be used for external contractors who must sign-in with a separate identity.\n        </li>\n        <li>\n          <strong>D – Add a custom domain name to contoso.com:</strong> Adding a domain is unrelated to provisioning an external user; it only affects email/UPN suffixes and does not enable guest authentication.\n        </li>\n      </ul>\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      Create guest users in Azure AD: https://learn.microsoft.com/azure/active-directory/external-identities/create-guest-users<br>\n      Manage Azure AD B2B guest accounts: https://learn.microsoft.com/azure/active-directory/b2b/what-is-b2b<br>\n      Prepared for Microsoft Identity and Access Administrator certification review.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Configure the External collaboration settings.",
      "Run the New-MgUser cmdlet.",
      "Create a guest user account in contoso.com",
      "Add a custom domain name to contoso.com."
    ]
  },
  {
    "id": 110,
    "type": "dropdown",
    "title": "Question 110",
    "questionText": "\n    <p style=\"text-align: left;\">You have a Microsoft Entra tenant that contains the users shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q110_table1.jpg\" alt=\"Domain and OU Filtering\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p style=\"text-align: left;\">The tenant contains the identities shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q110_table2.jpg\" alt=\"Domain and OU Filtering\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p style=\"text-align: left;\">You have an attribute set named Custom1 that contains the custom security attributes shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q110_table_3.jpg\" alt=\"Domain and OU Filtering\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p style=\"text-align: left;\">For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>\n    <p style=\"text-align: left;\"><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n      <table style=\"width: 100%; border-collapse: collapse;\">\n        <thead>\n          <tr style=\"border-bottom: 2px solid #ccc;\">\n            <th style=\"text-align: left; padding: 8px;\">Statements</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n            <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"text-align: left; padding: 8px;\">Admin1 can assign Attribute1 to User1.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement_1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\">\n            <td style=\"text-align: left; padding: 8px;\">Admin2 can modify Attribute1.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement_2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr>\n            <td style=\"text-align: left; padding: 8px;\">Admin2 can assign Attribute2 to Goup1.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement_3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "statement_1": "Yes",
      "statement_2": "No",
      "statement_3": "Yes"
    },
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Statement 1 — Yes:</strong> Admin1 has the necessary permissions to assign Attribute1 to User1.</li>\n      <li><strong>Statement 2 — No:</strong> Admin2 lacks permissions to modify Attribute1 directly.</li>\n      <li><strong>Statement 3 — Yes:</strong> Admin2 is authorized to assign Attribute2 to Group1.</li>\n    </ul>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 111,
    "type": "dropdown",
    "title": "Question 111",
    "questionText": "\n    <p><strong>Question 111: Hotspot</strong></p>\n    <p>You have a Microsoft 365 E5 subscription that contains two administrative units named AU1 and AU2. You create five users as shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q111-table1.jpg\" alt=\"Domain and table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>For which users can User2 and User3 reset passwords?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 650px;\">\n        <span style=\"font-weight: 600;\">User2 can reset password for:</span>\n        <select class=\"inline-select\" data-key=\"user2\" style=\"padding: 6px; width: 320px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"User4\">User4</option>\n          <option value=\"User1 and User4 only\">User1 and User4 only</option>\n          <option value=\"User1, User3, User4, and User5\">User1, User3, User4, and User5</option>\n          <option value=\"User3 only\">User3 only</option>\n          <option value=\"User4 only\">User4 only</option>\n          <option value=\"User5 only\">User5 only</option>\n        </select>\n      </div>\n      <div style=\"display: flex; align-items: center; justify-content: space-between; max-width: 650px;\">\n        <span style=\"font-weight: 600;\">User3 can reset password for:</span>\n        <select class=\"inline-select\" data-key=\"user3\" style=\"padding: 6px; width: 320px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"User1, User5\">User1, User5</option>\n          <option value=\"User1 only\">User1 only</option>\n          <option value=\"User1 and User2 only\">User1 and User2 only</option>\n          <option value=\"User1, User2, and User4\">User1, User2, and User4</option>\n          <option value=\"User2 and User4 only\">User2 and User4 only</option>\n          <option value=\"User5 only\">User5 only</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "user2": "User4",
      "user3": "User1, User5"
    },
    "correctAnswerText": "\n    <p>\n      <strong>User2 can reset password for: User4</strong>\n    </p>\n    <p>\n      <strong>User3 can reset password for: User1, User5</strong>\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 112,
    "type": "dropdown",
    "title": "Question 112",
    "questionText": "\n    <p><strong>Question 112: Hotspot</strong></p>\n    <p>You have a Microsoft 365 E5 subscription that contains a user named User1. User1 needs to perform the following tasks:</p>\n    \n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li>Create a Microsoft 365 group named Group1 that has dynamic user membership</li>\n        <li>Assign a Microsoft Entra Suite license to Group1.</li>\n      </ul>\n    </div>\n\n    <p>In which portals can User1 perform each task?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 750px;\">\n        <span style=\"font-weight: 600;\">Create Group1:</span>\n        <select class=\"inline-select\" data-key=\"createGroup1\" style=\"padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Microsoft Entra admin center only\">Microsoft Entra admin center only</option>\n          <option value=\"Microsoft 365 admin center only\">Microsoft 365 admin center only</option>\n          <option value=\"Microsoft Entra admin center and Microsoft 365 admin center only\">Microsoft Entra admin center and Microsoft 365 admin center only</option>\n          <option value=\"Microsoft Entra admin center and Microsoft Intune admin center only\">Microsoft Entra admin center and Microsoft Intune admin center only</option>\n          <option value=\"Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center\">Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center</option>\n        </select>\n      </div>\n      <div style=\"display: flex; align-items: center; justify-content: space-between; max-width: 750px;\">\n        <span style=\"font-weight: 600;\">Assign a Microsoft Entra Suite license to Group1:</span>\n        <select class=\"inline-select\" data-key=\"assignLicense\" style=\"padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Microsoft Entra admin center only\">Microsoft Entra admin center only</option>\n          <option value=\"Microsoft 365 admin center only\">Microsoft 365 admin center only</option>\n          <option value=\"Microsoft Entra admin center and Microsoft 365 admin center only\">Microsoft Entra admin center and Microsoft 365 admin center only</option>\n          <option value=\"Microsoft Entra admin center and Microsoft Intune admin center only\">Microsoft Entra admin center and Microsoft Intune admin center only</option>\n          <option value=\"Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center\">Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "createGroup1": "Microsoft Entra admin center only",
      "assignLicense": "Microsoft Entra admin center and Microsoft 365 admin center only"
    },
    "correctAnswerText": "\n    <p>\n      <strong>Create Group1: Microsoft Entra admin center only</strong><br>\n      <em>Explanation:</em> Although Microsoft 365 groups can typically be created in the Microsoft 365 admin center, configuring <strong>dynamic user membership</strong> for a Microsoft 365 group requires capabilities specific to Microsoft Entra ID (Azure AD), which can only be configured in the Microsoft Entra admin center.\n    </p>\n    <p>\n      <strong>Assign a Microsoft Entra Suite license to Group1: Microsoft Entra admin center and Microsoft 365 admin center only</strong><br>\n      <em>Explanation:</em> License assignments to groups can be managed from both the Microsoft Entra admin center and the Microsoft 365 admin center.\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 113,
    "type": "dropdown",
    "title": "Question 113",
    "questionText": "\n    <p><strong>Question 113: Hotspot</strong></p>\n    <p>You have a Microsoft Entra tenant named contoso.com that contains a group named Group1. Group1 contains 50 users in your company’s IT department and 50 uses in your company’s accounts department.</p>\n    <p>You have a partner company that has a Microsoft Entra tenant named fabrikam.com. You configure cross-tenant synchronization between contoso.com and fabrikam.com.</p>\n    <p>You need to sync the members of Group1 to fabrikam.com. The solution must meet the following requirements:</p>\n    \n    <div style=\"background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;\">\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6;\">\n        <li>Ensure that only the IT department users sync with fabrikam.com.</li>\n        <li>Minimize administrative effort.</li>\n      </ul>\n    </div>\n\n    <p>What should you do in the Cross-tenant synchronization settings?</p>\n    <p>To answer, select the appropriate options in the answer area.</p>\n    <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 750px;\">\n        <span style=\"font-weight: 600;\">For the configuration object:</span>\n        <select class=\"inline-select\" data-key=\"configObject\" style=\"padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"From Expression builder, build an expression.\">From Expression builder, build an expression.</option>\n          <option value=\"From Provision on demand, add Group1.\">From Provision on demand, add Group1.</option>\n          <option value=\"From Users and groups, add Group1.\">From Users and groups, add Group1.</option>\n          <option value=\"From Users and groups, add the IT department users\">From Users and groups, add the IT department users</option>\n        </select>\n      </div>\n      <div style=\"display: flex; align-items: center; justify-content: space-between; max-width: 750px;\">\n        <span style=\"font-weight: 600;\">For the configuration object from Settings:</span>\n        <select class=\"inline-select\" data-key=\"configObjectSettings\" style=\"padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;\">\n          <option value=\"\">-- Select Option --</option>\n          <option value=\"Add a scoping filter\">Add a scoping filter</option>\n          <option value=\"Add new attribute mappings\">Add new attribute mappings</option>\n          <option value=\"Modify the attribute mappings\">Modify the attribute mappings</option>\n        </select>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "configObject": "From Users and groups, add Group1.",
      "configObjectSettings": "Add a scoping filter"
    },
    "correctAnswerText": "\n    <p>\n      <strong>For the configuration object: From Users and groups, add Group1.</strong><br>\n      <em>Explanation:</em> To scope cross-tenant synchronization to a group, you first add the group under Users and groups. This minimizes administrative effort by targeting Group1 directly instead of picking individual IT users manually.\n    </p>\n    <p>\n      <strong>For the configuration object from Settings: Add a scoping filter</strong><br>\n      <em>Explanation:</em> Since Group1 contains both IT and accounts department users, but only the IT department users need to be synchronized, you add a scoping filter (e.g., based on department) to restrict provisioning to just the desired subset of users.\n    </p>\n  ",
    "isCaseStudy": false
  },
 {
    id: 114,

    type: "matrix",

    title: "Question 114: Hot Spot",

    questionText: `
        <p><strong>Question 114: Hot Spot</strong></p>

        <p>
            You have a Microsoft 365 tenant that contains the administrative units
            shown in the following table.
        </p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q114_table1.jpg"
                alt="Administrative Units"
 dministrators shown in the following table.
        </p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q114_table2.jpg"
                alt="Administrators"
                style="
                          </p>

        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q114_table3.jpg"
                alt="Users"
                style="
                    width:100%;
                    max-width:550px;
                    Otherwise, select
            <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "stmt1",
            label: "Admin1 can reset the password of User1."
        },

        {
            id: "stmt2",
            label: "Admin2 can reset the password of User2."
        },

        {
            id: "stmt3",
            label: "Admin3 can reset the password of User3."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 0,
        stmt2: 0,
        stmt3: 1
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Admin1 can reset the password of User1:</strong>
                Yes
            </li>

            <li>
                <strong>Admin2 can reset the password of User2:</strong>
                Yes
            </li>

            <li>
                <strong>Admin3 can reset the password of User3:</strong>
                No
            </li>
        </ul>

        <p>
            <strong>Admin1 can reset the password of User1: Yes</strong><br>
            Admin1 has the required administrative-unit scoped permissions to
            manage User1 and perform password reset operations.
        </p>

        <p>
            <strong>Admin2 can reset the password of User2: Yes</strong><br>
            Admin2 has permissions scoped to the administrative unit that
            contains User2 and can therefore reset User2's password.
        </p>

        <p>
            <strong>Admin3 can reset the password of User3: No</strong><br>
            Admin3 does not have sufficient permissions within the scope of the
            administrative unit that contains User3.
        </p>
    `
},
  {
    "id": 117,
    "type": "radio",
    "title": "Question 117",
    "questionText": "\n    <p><strong>Question 117</strong></p>\n    <p>You have a Microsoft Entra tenant that uses Microsoft Entra ID Protection and contains the users shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q17_table1.jpg\" alt=\"table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>You need to implement a Conditional Access policy that enforces a remediation requirement for risky users. Which users can create the policy?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p>\n      <strong>Correct Answer: B (User1 and User2 only)</strong>\n    </p>\n    <p>\n      <em>Explanation:</em> Creating and managing Conditional Access policies requires appropriate administrative privileges (such as the Conditional Access Administrator or Security Administrator role), which are assigned to User1 and User2. User3 does not possess the required permissions.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "User1 only",
      "User1 and User2 only",
      "User1 and User3 only",
      "User1, User2, and User3"
    ]
  },
  {
    "id": 119,
    "type": "radio",
    "title": "Question 119",
    "questionText": "\n    <p>You configure a new Microsoft 365 tenant to use a default domain name of contoso.com.</p>\n    <p>You need to ensure that you can control access to Microsoft 365 resources by using conditional access policies.</p>\n    <p>What should you do first?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p>\n      <strong>Why option B is correct:</strong><br>\n      Taken from article in answer: “If your tenant was created on or after October 22, 2019, it is possible security defaults are already enabled in your tenant. To protect all of our users, security defaults are being rolled out to all new tenants created.”<br>\n      To enable Conditional Access Policies (CAP), you have to disable Security defaults.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Disable the User consent settings.",
      "Disable Security defaults.",
      "Configure a multi-factor authentication (MFA) registration policy.",
      "Configure password protection for Windows Server Active Directory."
    ]
  },
  {
    "id": 120,
    "type": "radio",
    "title": "Question 120",
    "questionText": "\n    <p>Your company has a Microsoft 365 tenant.</p>\n    <p>The company has a call center that contains 300 users. In the call center, the users share desktop computers and might use a different computer every day.</p>\n    <p>The call center computers are NOT configured for biometric identification.</p>\n    <p>The users are prohibited from having a mobile phone in the call center.</p>\n    <p>You need to require multi-factor authentication (MFA) for the call center users when they access Microsoft 365 services.</p>\n    <p>What should you include in the solution?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Why option D is correct:</strong><br>\n      <ul>\n        <li><strong>A. a named network location:</strong> Not an MFA option.</li>\n        <li><strong>B. the Microsoft Authenticator app:</strong> No mobile phones are allowed in the call center.</li>\n        <li><strong>C. Windows Hello for Business authentication:</strong> There are no biometric options in the office, and the data is stored locally on the device, whereas users switch PCs every day.</li>\n        <li><strong>D. FIDO2 tokens:</strong> Ideal for shared workstation scenarios where users don't have phones and move between different computers daily, providing a secure hardware-based passwordless MFA method.</li>\n      </ul>\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-passwordless\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "a named network location",
      "the Microsoft Authenticator app",
      "Windows Hello for Business authentication",
      "FIDO2 tokens"
    ]
  },
  {
    "id": 121,
    "type": "radio",
    "title": "Question 121",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n    <p>All users who run applications registered in Azure AD are subject to conditional access policies. You need to prevent the users from using legacy authentication.</p>\n    <p>What should you include in the conditional access policies to filter out legacy authentication attempts?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>Directly blocking legacy authentication:</strong><br>\n      The easiest way to block legacy authentication across your entire organization is by configuring a Conditional Access policy that applies specifically to legacy authentication clients and blocks access.\n    </p>\n    <p>\n      <strong>Client apps:</strong><br>\n      By default, all newly created Conditional Access policies will apply to all client app types even if the client apps condition is not configured.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/block-legacy-authentication\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "a cloud apps or actions condition",
      "a user risk condition",
      "a client apps condition",
      "a sign-in risk condition"
    ]
  },
  {
    "id": 122,
    "type": "radio",
    "title": "Question 122",
    "questionText": "\n    <p>You have an Azure Active Directory (Azure AD) tenant. You open the risk detections report.</p>\n    <p>Which risk detection type is classified as a user risk?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>Leaked credentials</strong> indicates that the user's valid credentials have been leaked.<br>\n      <em>Note:</em> There are several versions of this question in the exam. The question can have other incorrect answer options, including the following:<br>\n      • password spray<br>\n      • malicious IP address<br>\n      • unfamiliar sign-in properties\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "impossible travel",
      "anonymous IP address",
      "atypical travel",
      "leaked credentials"
    ]
  },
  {
    "id": 123,
    "type": "radio",
    "title": "Question 123",
    "questionText": "\n    <p>You have a Microsoft 365 tenant.</p>\n    <p>All users have computers that run Windows 10. Most computers are company-owned and joined to Azure Active Directory (Azure AD). Some computers are user- owned and are only registered in Azure AD.</p>\n    <p>You need to prevent users who connect to Microsoft SharePoint Online on their user-owned computer from downloading or syncing files. Other users must NOT be restricted.</p>\n    <p>Which policy type should you create?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>Why option C is correct:</strong><br>\n      After review this on a real tenant first you need to select SPO in Cloud apps or actions.<br>\n      That action will enable in session settings. App enforced restrictions might require additional admin configurations within the cloud apps. The restrictions will only take effect for new sessions.<br>\n      So because first action is configure the application that will be affected by sessions settings, choosing C, instead B can the option to select.\n    </p>\n    <p>\n      <em>Note on phrasing:</em> This is not worded properly enough. In CA, if you go into session controls and select 'Use Conditional Access App Control', you can monitor or block downloads. However, options like restricting downloads/syncs based on device state (such as user-owned devices) point towards utilizing conditional access controls.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "a Microsoft Cloud App Security activity policy that has Microsoft Office 365 governance actions configured",
      "an Azure AD conditional access policy that has session controls configured",
      "an Azure AD conditional access policy that has client apps conditions configured",
      "a Microsoft Cloud App Security app discovery policy that has governance actions configured"
    ]
  },
  {
    "id": 124,
    "type": "radio",
    "title": "Question 124",
    "questionText": "\n    <p>You have an Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>\n    <p>The on-premises network contains a VPN server that authenticates to the on-premises Active Directory domain. The VPN server does NOT support Azure Multi-Factor Authentication (MFA).</p>\n    <p>You need to recommend a solution to provide Azure MFA for VPN connections. What should you include in the recommendation?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      <strong>The correct answer is C. Network Policy Server (NPS).</strong>\n    </p>\n    <p>\n      Network Policy Server (NPS) is a server role that allows you to implement RADIUS authentication, authorization, and accounting. You can use NPS to integrate Azure MFA with your VPN server.\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Azure AD Application Proxy",
      "an Azure AD Password Protection proxy",
      "Network Policy Server (NPS)",
      "a pass-through authentication proxy"
    ]
  },
  {
    "id": 125,
    "type": "radio",
    "title": "Question 125",
    "questionText": "\n    <p>You have a Microsoft 365 tenant.</p>\n    <p>The Azure Active Directory (Azure AD) tenant is configured to sync with an on-premises Active Directory domain.</p>\n    <p>The domain contains the servers shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q125_table1.jpg\" alt=\"table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p>The domain controllers are prevented from communicating to the internet. You implement Azure AD Password Protection on Server1 and Server2.</p>\n    <p>You deploy a new server named Server4 that runs Windows Server 2019.</p>\n    <p>You need to ensure that Azure AD Password Protection will continue to work if a single server fails. What should you implement on Server4?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p>\n      <strong>The Azure AD Password Protection proxy service</strong> initiates an outbound connection (Port 443) to Azure to pull the banned password list.<br>\n      The downloaded banned password list is pulled by the agent installed on DCs.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-password-ban-bad-on-premises-deploy\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Azure AD Connect",
      "Azure AD Application Proxy",
      "Password Change Notification Service (PCNS)",
      "the Azure AD Password Protection proxy service"
    ]
  },
  {
    "id": 126,
    "type": "dragdrop",
    "title": "Question 126",
    "questionText": "\n    <p><strong>Question 126: Drag and Drop</strong></p>\n    <p>You have a Microsoft 365 E5 tenant. You purchase a cloud app named App1.</p>\n    <p>You need to enable real-time session-level monitoring of App1 by using Microsoft Cloud App Security.</p>\n    <p>In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <p>\n      <strong>Steps breakdown for real-time session monitoring with Microsoft Cloud App Security (MCAS):</strong>\n    </p>\n    <ol>\n      <li><strong>Publish App1 in Azure Active Directory (Azure AD):</strong> The application must first be integrated and published within Azure AD so it can be managed.</li>\n      <li><strong>Create a conditional access policy that has session controls configured:</strong> Route user traffic to MCAS using Conditional Access session controls (Conditional Access App Control).</li>\n      <li><strong>From Microsoft Cloud App Security, modify the Connected apps settings for App1:</strong> You need to connect the app via Conditional Access App Control within MCAS.</li>\n      <li><strong>From Microsoft Cloud App Security, create a session policy:</strong> Define specific real-time monitoring and control behaviors for the session.</li>\n    </ol>\n    <p>\n      <strong>References:</strong><br>\n      https://techcommunity.microsoft.com/t5/itops-talk-blog/step-by-step-blocking-data-downloads-via-microsoft-cloud-app/ba-p/326357\n    </p>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "From Microsoft Cloud App Security, create a session policy.",
      "Publish App1 in Azure Active Directory (Azure AD).",
      "Create a conditional access policy that has session controls configured.",
      "From Microsoft Cloud App Security, modify the Connected apps settings for App1."
    ],
    "dropTargets": [
      {
        "id": "step1",
        "label": "Step 1",
        "correctAnswer": "Publish App1 in Azure Active Directory (Azure AD)."
      },
      {
        "id": "step2",
        "label": "Step 2",
        "correctAnswer": "Create a conditional access policy that has session controls configured."
      },
      {
        "id": "step3",
        "label": "Step 3",
        "correctAnswer": "From Microsoft Cloud App Security, modify the Connected apps settings for App1."
      },
      {
        "id": "step4",
        "label": "Step 4",
        "correctAnswer": "From Microsoft Cloud App Security, create a session policy."
      }
    ]
  },
  {
    "id": 127,
    "type": "radio",
    "title": "Question 127",
    "questionText": "\n    <p>You have a Microsoft 365 tenant.</p>\n    <p>All users have mobile phones and laptops.</p>\n    <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptop to a wired network that has internet access.</p>\n    <p>You plan to implement multi-factor authentication (MFA).</p>\n    <p>Which MFA authentication method can the users use from the remote location?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n    <p>\n      In Windows 10, Windows Hello for Business replaces passwords with strong two-factor authentication on PCs and mobile devices. This authentication consists of a new type of user credential that is tied to a device and uses a biometric or PIN.\n    </p>\n    <p>\n      After an initial two-step verification of the user during enrollment, Windows Hello is set up on the user's device and Windows asks the user to set a gesture, which can be a biometric, such as a fingerprint, or a PIN. The user provides the gesture to verify their identity. Windows then uses Windows Hello to authenticate users.\n    </p>\n    <p>\n      <strong>Incorrect Answers:</strong><br>\n      • <strong>A:</strong> A notification through the Microsoft Authenticator app requires connectivity to send the verification code to the device requesting the logon.<br>\n      • <strong>B:</strong> An app password can be used to open an application but it cannot be used to sign in to a computer.<br>\n      • <strong>D:</strong> SMS requires a mobile phone.\n    </p>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods<br>\n      https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-overview\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "a notification through the Microsoft Authenticator app",
      "an app password",
      "Windows Hello for Business",
      "SMS"
    ]
  },
  {
    "id": 128,
    "type": "radio",
    "title": "Question 128",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n      </div>\n      <p style=\"text-align: left;\">You have a Microsoft 365 tenant.</p><br>\n      <p style=\"text-align: left;\">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>\n      <p style=\"text-align: left;\">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>\n      <p style=\"text-align: left;\">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>\n      <p style=\"text-align: left;\"><strong>Solution:</strong> From the Azure portal, you configure the Notifications settings for multi-factor authentication (MFA). Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>You need to configure the fraud alert settings.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 129,
    "type": "radio",
    "title": "Question 129",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n      </div>\n      <p style=\"text-align: left;\">You have a Microsoft 365 tenant.</p><br>\n      <p style=\"text-align: left;\">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>\n      <p style=\"text-align: left;\">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>\n      <p style=\"text-align: left;\">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>\n      <p style=\"text-align: left;\"><strong>Solution:</strong> From the Azure portal, you configure the Account lockout settings for multi-factor authentication (MFA). Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>The account lockout settings are applied only when a PIN code is entered for the MFA prompt. To automatically block users who report fraud, you need to configure Fraud Alert settings.</p>\n      <p><strong>Reference:</strong> https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 130,
    "type": "radio",
    "title": "Question 130",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n      </div>\n      <p style=\"text-align: left;\">You have a Microsoft 365 tenant.</p><br>\n      <p style=\"text-align: left;\">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>\n      <p style=\"text-align: left;\">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>\n      <p style=\"text-align: left;\">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>\n      <p style=\"text-align: left;\"><strong>Solution:</strong> From the Azure portal, you configure the Block/unblock users settings for multi-factor authentication (MFA). Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>You need to configure the fraud alert settings under Azure Active Directory > Security > Multifactor authentication > Fraud alert to automatically block users when they submit fraud alerts.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 131,
    "type": "dropdown",
    "title": "Question 131",
    "questionText": "\n    <p style=\"text-align: left;\">You have a Microsoft 365 tenant.</p>\n    <p style=\"text-align: left;\">You need to identify users who have leaked credentials. The solution must meet the following requirements:</p>\n    <div style=\"margin: 10px 0; padding: 10px 15px; background: #fff; border-left: 4px solid #0078d4; border: 1px solid #e1dfdd; border-radius: 2px;\">\n      <p style=\"margin: 0; text-align: left;\">Identify sign-ins by users who are suspected of having leaked credentials.<br>\n      Flag the sign-ins as a high-risk event.<br>\n      Immediately enforce a control to mitigate the risk, while still allowing the user to access applications.</p>\n    </div>\n    <p style=\"text-align: left;\">What should you use? <br>To answer, select the appropriate options in the answer area.</p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n        <div style=\"display: flex; flex-direction: column; gap: 6px;\">\n          <label style=\"text-align: left; font-weight: 500;\">To classify leaked credentials as high-risk, use:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_1\" style=\"padding: 6px; width: 100%;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Azure Active Directory (Azure AD) Identity Protection\">Azure Active Directory (Azure AD) Identity Protection</option>\n            <option value=\"Azure Active Directory (Azure AD) Privileged Identity Management (PIM)\">Azure Active Directory (Azure AD) Privileged Identity Management (PIM)</option>\n            <option value=\"Identity Governance\">Identity Governance</option>\n            <option value=\"Self-service password reset (SSPR)\">Self-service password reset (SSPR)</option>\n          </select>\n        </div>\n        <div style=\"display: flex; flex-direction: column; gap: 6px;\">\n          <label style=\"text-align: left; font-weight: 500;\">To trigger remediation, use:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_2\" style=\"padding: 6px; width: 100%;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Client apps not using Modern authentication\">Client apps not using Modern authentication</option>\n            <option value=\"Device state\">Device state</option>\n            <option value=\"Sign-in risk\">Sign-in risk</option>\n            <option value=\"User location\">User location</option>\n            <option value=\"User risk\">User risk</option>\n          </select>\n        </div>\n        <div style=\"display: flex; flex-direction: column; gap: 6px;\">\n          <label style=\"text-align: left; font-weight: 500;\">To mitigate the risk, select:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_3\" style=\"padding: 6px; width: 100%;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Apply app enforced restrictions\">Apply app enforced restrictions</option>\n            <option value=\"Block access\">Block access</option>\n            <option value=\"Grant access but require app protection policy\">Grant access but require app protection policy</option>\n            <option value=\"Grant access but require password change\">Grant access but require password change</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "dropdown_1": "Azure Active Directory (Azure AD) Identity Protection",
      "dropdown_2": "User risk",
      "dropdown_3": "Grant access but require password change"
    },
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Azure Active Directory (Azure AD) Identity Protection:</strong> Used to detect risks such as leaked credentials.</li>\n      <li><strong>User risk:</strong> Leaked credentials represent a user risk condition (as opposed to sign-in risk, which evaluates the real-time sign-in attempt properties).</li>\n      <li><strong>Grant access but require password change:</strong> Mitigates the risk by forcing a secure password reset upon the next sign-in while still allowing authorized access, satisfying the requirement to allow users to continue accessing applications safely.</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 132,
    "type": "dropdown",
    "title": "Question 132",
    "questionText": "\n    <p><strong>Question 132: Hotspot</strong></p>\n    <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>\n    \n    <div style=\"margin-bottom: 15px; text-align: center;\">\n      <img src=\"images/q132_table1.jpg\" alt=\"q132 table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n    </div>\n\n    <p style=\"text-align: left;\">You plan to implement Azure AD Identity Protection.</p>\n    <p style=\"text-align: left;\">Which users can configure the user risk policy, and which users can view the risky users report? To answer, select the appropriate options in the answer area.</p>\n    <p style=\"text-align: left;\"><em>NOTE: Each correct selection is worth one point.</em></p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n        <div style=\"display: flex; flex-direction: column; gap: 6px;\">\n          <label style=\"text-align: left; font-weight: 500;\">Configure the user risk policy:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_1\" style=\"padding: 6px; width: 100%;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"User3 only\">User3 only</option>\n            <option value=\"User3 and User4 only\">User3 and User4 only</option>\n            <option value=\"User1, User2, and User3 only\">User1, User2, and User3 only</option>\n            <option value=\"User1, User3, and User4 only\">User1, User3, and User4 only</option>\n            <option value=\"User1, User2, User3, and User4\">User1, User2, User3, and User4</option>\n          </select>\n        </div>\n        <div style=\"display: flex; flex-direction: column; gap: 6px;\">\n          <label style=\"text-align: left; font-weight: 500;\">View the risky users report:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_2\" style=\"padding: 6px; width: 100%;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"User3 only\">User3 only</option>\n            <option value=\"User3 and User4 only\">User3 and User4 only</option>\n            <option value=\"User1, User2, and User3 only\">User1, User2, and User3 only</option>\n            <option value=\"User1, User3, and User4 only\">User1, User3, and User4 only</option>\n            <option value=\"User1, User2, User3, and User4\">User1, User2, User3, and User4</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "dropdown_1": "User3 only",
      "dropdown_2": "User3 and User4 only"
    },
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Configure the user risk policy:</strong> <strong>User3 only</strong> (Security Administrator). Security Administrators have update access to Identity Protection policies like the user risk policy.</li>\n      <li><strong>View the risky users report:</strong> <strong>User3 and User4 only</strong> (Security Administrator and Security Operator). Both roles have permissions to read/view Identity Protection reports such as the Risky Users Report.</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 133,
    "type": "dropdown",
    "title": "Question 133",
    "questionText": "\n      <p><strong>Question 133</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains a group named Group3 and an administrative unit named Department1.</p>\n      <p>Department1 has the users shown in the Users exhibit. (Click the Users tab.)</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q133_exhibit1.jpg\" alt=\"133 exhibit 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>Department1 has the groups shown in the Groups exhibit. (Click the Groups tab.)</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q133_exhibit2.jpg\" alt=\"133 exhibit 2\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>Department1 has the user administrator assignments shown in the Assignments exhibit. (Click the Assignments tab.)</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q133_exhibit3.jpg\" alt=\"133 exhibit 3\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>The members of Group2 are shown in the Group2 exhibit. (Click the Group2 tab.)</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q133_exhibit4.jpg\" alt=\"133 exhibit 4\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <table class=\"matrix-table\" style=\"width:100%; border-collapse: collapse; margin-top: 15px;\">\n        <thead>\n          <tr style=\"border-bottom: 2px solid #ddd; text-align: left;\">\n            <th style=\"padding: 8px;\">Statements</th>\n            <th style=\"padding: 8px; text-align: center; width: 80px;\">Yes</th>\n            <th style=\"padding: 8px; text-align: center; width: 80px;\">No</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr style=\"border-bottom: 1px solid #eee;\" id=\"row_statement1\">\n            <td style=\"padding: 10px; font-size: 14px;\">Admin1 can reset the passwords of User3 and User4.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\" id=\"row_statement2\">\n            <td style=\"padding: 10px; font-size: 14px;\">Admin1 can add User1 to Group 2</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n          <tr style=\"border-bottom: 1px solid #eee;\" id=\"row_statement3\">\n            <td style=\"padding: 10px; font-size: 14px;\">Admin 2 can reset the password of User1.</td>\n            <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n            <td style=\"text-align: center;\"></td>\n          </tr>\n        </tbody>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "statement1": "No",
      "statement2": "Yes",
      "statement3": "Yes"
    },
    "correctAnswerText": "\n      #1: No<br>\n      Because user3 and user4 are nested and from G2. See below from: https://docs.microsoft.com/en-us/azure/active-directory/roles/administrative-units<br>\n      \"A scoped role assignment doesn't apply to members of groups added to an administrative unit, unless the group members are directly added to the administrative unit. For more information, see Add members to an administrative unit.\"<br><br>\n      #2: Yes<br>\n      User Admin have the following attributes \"microsoft.directory/groups/members/update\" Which can be confirmed:<br>\n      https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#user-administrator<br><br>\n      #3: Yes, User1 is a direct member for the admin unit.<br><br>\n      Reference:<br>\n      https://docs.microsoft.com/en-us/azure/active-directory/roles/administrative-units\n    ",
    "isCaseStudy": false
  },
  {
    "id": 134,
    "type": "radio",
    "title": "Question 134",
    "questionText": "\n      <div style=\"border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;\">\n        <strong>Scenario:</strong><br>\n        Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>\n        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>\n        You have a Microsoft 365 tenant.<br>\n        All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.<br>\n        Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.\n      </div>\n      <p><strong>Question 134</strong></p>\n      <p>You need to block the users automatically when they report an MFA request that they did not initiate.</p>\n      <p><strong>Solution:</strong> From the Azure portal, you configure the Fraud alert settings for multi-factor authentication (MFA).</p>\n      <p>Does this meet the goal?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>The fraud alert feature lets users report fraudulent attempts to access their resources. When an unknown and suspicious MFA prompt is received, users can report the fraud attempt using the Microsoft Authenticator app or through their phone.</p>\n      <p>The following fraud alert configuration options are available:</p>\n      <p>✑ Automatically block users who report fraud.<br>\n      ✑ Code to report fraud during initial greeting.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "id": 135,
    "type": "radio",
    "title": "Question 135",
    "questionText": "\n      <p><strong>Question 135</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptop to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n      <p>The Authenticator app can be used as a software token to generate an OATH verification code. After entering your username and password, you enter the code provided by the Authenticator app into the sign-in interface.</p>\n      <p><strong>Incorrect Answers:</strong></p>\n      <p><strong>A:</strong> A notification through the Microsoft Authenticator app requires connectivity to send the verification code to the device requesting the logon.</p>\n      <p><strong>B:</strong> An email requires network connectivity.</p>\n      <p><strong>C:</strong> Security questions are not used as an authentication method but can be used during the self-service password reset (SSPR) process.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-authenticator-app#verification-code-from-mobile-app</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "a notification through the Microsoft Authenticator app",
      "email",
      "security questions",
      "a verification code from the Microsoft Authenticator app"
    ]
  },
  {
    "id": 136,
    "type": "dropdown",
    "title": "Question 136",
    "questionText": "\n      <p><strong>Question 136</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>You create a named location named HighRiskCountries that contains a list of high-risk countries.</p>\n      <p>You need to limit the amount of time a user can stay authenticated when connecting from a high-risk country.</p>\n      <p>What should you configure in a conditional access policy?</p>\n      <p>To answer, select the appropriate options in the answer area.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 10px;\">\n        <tr>\n          <td style=\"width: 55%; font-weight: 500; vertical-align: middle;\">Configure HighRiskCountries by using:</td>\n          <td style=\"width: 45%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown1\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"A cloud app or action\">A cloud app or action</option>\n              <option value=\"A condition\">A condition</option>\n              <option value=\"A grant control\">A grant control</option>\n              <option value=\"A session control\">A session control</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 55%; font-weight: 500; vertical-align: middle;\">Configure Sign-in frequency by using:</td>\n          <td style=\"width: 45%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown2\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"A cloud app or action\">A cloud app or action</option>\n              <option value=\"A condition\">A condition</option>\n              <option value=\"A grant control\">A grant control</option>\n              <option value=\"A session control\">A session control</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "dropdown1": "A condition",
      "dropdown2": "A session control"
    },
    "correctAnswerText": "\n      <p><strong>Configure HighRiskCountries by using: A condition</strong></p>\n      <p>Named locations such as HighRiskCountries are configured under Conditions in a Conditional Access policy (e.g., specifying locations as a condition for the policy to apply).</p>\n      <p><strong>Configure Sign-in frequency by using: A session control</strong></p>\n      <p>Sign-in frequency allows you to configure the time period before a user is asked to sign in again, which is managed via Session controls in a Conditional Access policy.</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 137,
    "type": "dropdown",
    "title": "Question 137",
    "questionText": "\n      <p><strong>Question 137</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>A user named User1 attempts to sign in to the tenant by entering the following incorrect passwords:</p>\n      <p>\n        ✑ Pa55w0rd12<br>\n        ✑ Pa55w0rd12<br>\n        ✑ Pa55w0rd12<br>\n        ✑ Pa55w.rd12<br>\n        ✑ Pa55w.rd123<br>\n        ✑ Pa55w.rd123<br>\n        ✑ Pa55w.rd123<br>\n        ✑ Pa55word12<br>\n        ✑ Pa55word12<br>\n        ✑ Pa55word12<br>\n        ✑ Pa55w.rd12\n      </p>\n      <p>You need to identify how many sign-in attempts were tracked for User1, and how User1 can unlock her account before the 300-second lockout duration expires.</p>\n      <p>What should you identify? To answer, select the appropriate options in the answer area.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 10px;\">\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">Tracked sign-in attempts:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown1\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">Unlock by:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown2\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"Clearing the browser cache\">Clearing the browser cache</option>\n              <option value=\"Signing in by using inPrivate browsing mode\">Signing in by using inPrivate browsing mode</option>\n              <option value=\"Performing a self-service password reset (SSPR)\">Performing a self-service password reset (SSPR)</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "dropdown1": "11",
      "dropdown2": "Performing a self-service password reset (SSPR)"
    },
    "correctAnswerText": "\n      <p><strong>Tracked sign-in attempts: 11</strong></p>\n      <p>All 11 incorrect password attempts are tracked by Azure AD smart lockout, regardless of whether the passwords were duplicates or unique.</p>\n      <p><strong>Unlock by: Performing a self-service password reset (SSPR)</strong></p>\n      <p>A user can unlock their account or reset their password before the lockout duration expires by performing a self-service password reset (SSPR).</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-sspr-deployment</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 138,
    "type": "dropdown",
    "title": "Question 138",
    "questionText": "\n      <p><strong>Question 138</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that has Security defaults disabled. You are creating a conditional access policy as shown in the following exhibit.</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q138_table1.jpg\" alt=\"q138 exhibit 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 10px;\">\n        <tr>\n          <td style=\"width: 55%; font-weight: 500; vertical-align: middle;\">To ensure that User1 is prompted for multi-factor authentication (MFA) when accessing Cloud apps, you must configure the [answer choice].</td>\n          <td style=\"width: 45%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown1\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"Conditions settings\">Conditions settings</option>\n              <option value=\"Enable policy setting\">Enable policy setting</option>\n              <option value=\"Grant settings\">Grant settings</option>\n              <option value=\"Sessions settings\">Sessions settings</option>\n              <option value=\"Users and groups setting\">Users and groups setting</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 55%; font-weight: 500; vertical-align: middle;\">To ensure that User1 is prompted for authentication every eight hours, you must configure the [answer choice].</td>\n          <td style=\"width: 45%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown2\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"Conditions settings\">Conditions settings</option>\n              <option value=\"Enable policy setting\">Enable policy setting</option>\n              <option value=\"Grant settings\">Grant settings</option>\n              <option value=\"Sessions settings\">Sessions settings</option>\n              <option value=\"Users and groups setting\">Users and groups setting</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "dropdown1": "Grant settings",
      "dropdown2": "Sessions settings"
    },
    "correctAnswerText": "\n      <p><strong>To ensure that User1 is prompted for multi-factor authentication (MFA) when accessing Cloud apps, you must configure the Grant settings.</strong></p>\n      <p>Grant controls in a Conditional Access policy allow you to enforce requirements such as \"Require multi-factor authentication\".</p>\n      <p><strong>To ensure that User1 is prompted for authentication every eight hours, you must configure the Sessions settings.</strong></p>\n      <p>Session controls, such as Sign-in frequency, allow you to limit the frequency of authentication or session persistence.</p>\n      <p><Strong>Reference:</Strong> https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-all-users-mfa</p>\n\n    ",
    "isCaseStudy": false
  },
  {
    "id": 139,
    "type": "radio",
    "title": "Question 139",
    "questionText": "\n      <p><strong>Question 139</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named SecAdmin1. SecAdmin1 is assigned the Security administrator role.</p>\n      <p>SecAdmin1 reports that she cannot reset passwords from the Azure AD Identity Protection portal. You need to ensure that SecAdmin1 can manage passwords and invalidate sessions on behalf of non- administrative users. The solution must use the principle of least privilege.</p>\n      <p>Which role should you assign to SecAdmin1?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p><strong>A</strong></p>\n      <p><strong>In details:</strong></p>\n      <p>Privileged Auth Admin can reset passwords of non-admins and admin accounts.</p>\n      <p>Helpdesk Admins can reset non-admins and Helpdesk Admins password.</p>\n      <p>Authentication Administrator can only reset non-admin accounts password.</p>\n      <p>To follow the least privilege requirement, Authentication Administrator should be the answer.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Authentication administrator",
      "Helpdesk administrator",
      "Privileged authentication administrator",
      "Security operator"
    ]
  },
  {
    "id": 140,
    "type": "radio",
    "title": "Question 140",
    "questionText": "\n      <p><strong>Question 140</strong></p>\n      <p>You configure Azure Active Directory (Azure AD) Password Protection as shown in the exhibit. (Click the Exhibit tab.)</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q140_table1.jpg\" alt=\"q140 exhibit 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>You are evaluating the following passwords:</p>\n      <p>\n        ✑ Pr0jectlitw@re<br>\n        ✑ T@ilw1nd<br>\n        ✑ C0nt0s0\n      </p>\n      <p>Which passwords will be blocked?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p><strong>Full Question Correction:</strong></p>\n      <p>You are evaluating the following passwords:</p>\n      <p>\n        ✑ Pr0jectlitw@re<br>\n        ✑ T@ilw1nd<br>\n        ✑ C0nt0s0\n      </p>\n      <p>Which passwords will be blocked?</p>\n      <p><strong>Correct Answer = C</strong></p>\n      <p><strong>Reference:</strong> https://blog.enablingtechcorp.com/azure-ad-password-protection-password-evaluation</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Pr0jectlitw@re and T@ilw1nd only",
      "C0nt0s0 only",
      "C0nt0s0, Pr0jectlitw@re, and T@ilw1nd",
      "C0nt0s0 and T@ilw1nd only",
      "C0nt0s0 and Pr0jectlitw@re only"
    ]
  },
  {
    "id": 141,
    "type": "radio",
    "title": "Question 141",
    "questionText": "\n      <p><strong>Question 141</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptop to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>The Authenticator app can be used as a software token to generate an OATH verification code. After entering your username and password, you enter the code provided by the Authenticator app into the sign-in interface.</p>\n      <p><strong>Incorrect Answers:</strong></p>\n      <p><strong>B:</strong> Security questions are not used as an authentication method but can be used during the self-service password reset (SSPR) process.</p>\n      <p><strong>C, D:</strong> An automated voice call and an SMS requires mobile connectivity.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "a verification code from the Microsoft Authenticator app",
      "security questions",
      "voice",
      "SMS"
    ]
  },
  {
    "id": 142,
    "type": "dropdown",
    "title": "Question 142",
    "questionText": "\n      <p><strong>Question 142</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>\n      <div style=\"margin-bottom: 15px; text-align: center;\">\n        <img src=\"images/q142_table1.jpg\" alt=\"q142 table 1\" style=\"width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;\">\n      </div>\n      <p>User2 reports that he can only configure multi-factor authentication (MFA) to use the Microsoft Authenticator app. You need to ensure that User2 can configure alternate MFA methods.</p>\n      <p>Which configuration is required, and which user should perform the configuration? To answer, select the appropriate options in the answer area.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 10px;\">\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">Configuration:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown1\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"Enable access reviews.\">Enable access reviews.</option>\n              <option value=\"Enable Azure AD Privileged Identity Management (PIM).\">Enable Azure AD Privileged Identity Management (PIM).</option>\n              <option value=\"Modify security defaults.\">Modify security defaults.</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">User:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown2\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"User1 only\">User1 only</option>\n              <option value=\"User2 only\">User2 only</option>\n              <option value=\"User3 only\">User3 only</option>\n              <option value=\"User1 and User2 only\">User1 and User2 only</option>\n              <option value=\"User1 and User3 only\">User1 and User3 only</option>\n              <option value=\"User2 and User3 only\">User2 and User3 only</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "dropdown1": "Modify security defaults.",
      "dropdown2": "User1 only"
    },
    "correctAnswerText": "\n      <p>Box 1: Modify security defaults. Privileged Authentication Administrator</p>\n      <p>Users with this role can set or reset any authentication method (including passwords) for any user, including Global Administrators. Privileged Authentication Administrators can force users to re-register against existing non-password credential (such as MFA or FIDO) and revoke 'remember MFA on the device', prompting for MFA on the next sign-in of all users.</p>\n      <p>The Authentication Administrator role has permission to force re-registration and multifactor authentication for standard users and users with some admin roles.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q142_explanation.jpg\" alt=\"q142 explanation\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>Box 2: User1 only.</p>\n      <p>Security Administrator.</p>\n      <p>Users with this role have permissions to manage security-related features in the Microsoft 365 Defender portal, Azure Active Directory Identity Protection, Azure Active Directory Authentication, Azure Information Protection, and Office 365 Security & Compliance Center.</p>\n      <p><strong>Incorrect:</strong></p>\n      <p>Not User3. Service Support Administrator.</p>\n      <p>Users with this role can create and manage support requests with Microsoft for Azure and Microsoft 365 services, and view the service dashboard and message center in the Azure portal and Microsoft 365 admin center.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 143,
    "type": "radio",
    "title": "Question 143",
    "questionText": "\n      <p><strong>Question 143</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant.</p>\n      <p>You configure self-service password reset (SSPR) by using the following settings:</p>\n      <p>\n        ✑ Require users to register when signing in: Yes<br>\n        ✑ Number of methods required to reset: 1\n      </p>\n      <p>What is a valid authentication method available to users?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p>When administrators require one method be used to reset a password, verification code is the only option available.</p>\n      <p><strong>Note:</strong> When administrators require two methods be used to reset a password, users are able to use notification OR verification code in addition to any other enabled methods.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-howitworks</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "a Microsoft Teams chat",
      "a mobile app notification",
      "a mobile app code",
      "an FIDO2 security token"
    ]
  },
  {
    "id": 144,
    "type": "radio",
    "title": "Question 144",
    "questionText": "\n      <p><strong>Question 144</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that uses Azure AD Identity Protection and contains the resources shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q144_table1.jpg\" alt=\"q144 table\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>Azure Multi-factor Authentication (MFA) is enabled for all users.</p>\n      <p>User1 triggers a medium severity alert that requires additional investigation.</p>\n      <p>You need to force User1 to reset his password the next time he signs in.</p>\n      <p>The solution must minimize administrative effort.</p>\n      <p>What should you do?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p><strong>Scenario: User compromised (True positive)</strong></p>\n      <p>'Risky users' report shows an at-risk user [Risk state = At risk] with low risk [Risk level = Low] and that user was indeed compromised.</p>\n      <p><strong>Feedback:</strong> Select the user and click on 'Confirm user compromised'.</p>\n      <p><strong>What happens under the hood?</strong> Azure AD will move the user risk to High [Risk state = Confirmed compromised; Risk level = High] and will add a new detection 'Admin confirmed user compromised'.</p>\n      <p><strong>Notes:</strong> Currently, the 'Confirm user compromised' option is only available in 'Risky users' report.</p>\n      <p>The detection 'Admin confirmed user compromised' is shown in the tab 'Risk detections not linked to a sign-in' in the 'Risky users' report.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-risk-feedback</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Reconfigure the user risk policy to trigger on medium or low severity.",
      "Mark User1 as compromised.",
      "Reset the Azure MFA registration for User1.",
      "Configure a sign-in risk policy"
    ]
  },
  {
    "id": 145,
    "type": "dropdown",
    "title": "Question 145",
    "questionText": "\n      <p><strong>Question 145</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q145_table1.jpg\" alt=\"145 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>In Azure AD Identity Protection, you configure a user risk policy that has the following settings:</p>\n      <p>\n        ✑ Assignments:<br>\n        - Users: Group1<br>\n        - User risk: Low and above<br>\n        ✑ Controls:<br>\n        - Access: Block access<br>\n        ✑ Enforce policy: On\n      </p>\n      <p>In Azure AD Identity Protection, you configure a sign-in risk policy that has the following settings:</p>\n      <p>\n        ✑ Assignments:<br>\n        - Users: Group2<br>\n        - Sign-in risk: Low and above<br>\n        ✑ Controls:<br>\n        - Access: Require multi-factor authentication<br>\n        ✑ Enforce policy: On\n      </p>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            <!-- Hidden dummy input satisfies app.js standard radio check -->\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">User1 can sign in from an anonymous IP address.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q145_1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">User2 can sign in from an anonymous IP address.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q145_2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">User3 can sign in from an anonymous IP address.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q145_3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "matrix_q145_1": "Yes",
      "matrix_q145_2": "No",
      "matrix_q145_3": "Yes"
    },
    "correctAnswerText": "\n      <p><strong>Box 1: Yes</strong></p>\n      <p>Azure AD Identity Protection can review user sign-in attempts and take additional action if there's suspicious behavior. Sign-ins from anonymous IP addresses trigger risk detection.</p>\n      <p><strong>Box 2: No</strong></p>\n      <p>User2 belongs to Group2 and is targeted by the sign-in risk policy configured to require multi-factor authentication for low and above risk levels, blocking anonymous IP sign-ins without MFA or depending on configuration restrictions.</p>\n      <p><strong>Box 3: Yes</strong></p>\n      <p>User3 sign-in from an anonymous IP address triggers risk policies accordingly.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 146,
    "type": "radio",
    "title": "Question 146",
    "questionText": "\n      <p><strong>Question 146</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant.</p>\n      <p>You configure self-service password reset (SSPR) by using the following settings:</p>\n      <p>\n        ✑ Require users to register when signing in: Yes<br>\n        ✑ Number of methods required to reset: 1\n      </p>\n      <p>What is a valid authentication method available to users?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>A one-gate policy requires one piece of authentication data, such as an email address or phone number. A one-gate policy applies in the following circumstances:</p>\n      <p>It's within the first 30 days of a trial subscription; or</p>\n      <p>A custom domain hasn't been configured for your Azure AD tenant so is using the default *.onmicrosoft.com. The default *.onmicrosoft.com domain isn't recommended for production use; and Azure AD Connect isn't synchronizing identities.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#administrator-reset-policy-differences</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "an email to an address outside your organization",
      "a smartcard",
      "an FID02 security token",
      "a Microsoft Teams chat"
    ]
  },
  {
    "id": 147,
    "type": "radio",
    "title": "Question 147",
    "questionText": "\n      <p><strong>Question 147</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q147_table1.jpg\" alt=\"147 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>The tenant has the authentication methods shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q147_table2.jpg\" alt=\"147 table2\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>Which users will sign in to cloud apps by matching a number shown in the app with a number shown on their phone?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p><strong>Microsoft Authenticator -</strong></p>\n      <p>You can also allow your employee's phone to become a passwordless authentication method. You may already be using the Authenticator app as a convenient multi-factor authentication option in addition to a password.</p>\n      <p>You can also use the Authenticator App as a passwordless option.</p>\n      <p>The Authenticator App turns any iOS or Android phone into a strong, passwordless credential. Users can sign in to any platform or browser by getting a notification to their phone, matching a number displayed on the screen to the one on their phone, and then using their biometric (touch or face) or PIN to confirm.</p>\n      <p><strong>Incorrect:</strong></p>\n      <p>* Not User2</p>\n      <p><strong>FIDO2 security keys -</strong></p>\n      <p>The FIDO (Fast IDentity Online) Alliance helps to promote open authentication standards and reduce the use of passwords as a form of authentication. FIDO2 is the latest standard that incorporates the web authentication (WebAuthn) standard.</p>\n      <p>FIDO2 security keys are an unphishable standards-based passwordless authentication method that can come in any form factor. Fast Identity Online (FIDO) is an open standard for passwordless authentication. FIDO allows users and organizations to leverage the standard to sign in to their resources without a username or password using an external security key or a platform key built into a device.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-passwordless</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "User1 only",
      "User2 only",
      "User3 only",
      "User1 and User2 only",
      "User2 and User3 only"
    ]
  },
  {
    "id": 148,
    "type": "radio",
    "title": "Question 148",
    "questionText": "\n      <p><strong>Question 148</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named User1 and the conditional access policies shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q148_table1.jpg\" alt=\"148 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You need to evaluate which policies will be applied to User1 when User1 attempts to sign-in from various IP addresses.</p>\n      <p>Which feature should you use?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p>The Azure AD conditional access What if tool allows you to understand the impact of your conditional access policies on your environment. Instead of test driving your policies by performing multiple sign-ins manually, this tool enables you to evaluate a simulated sign-in of a user. The simulation estimates the impact this sign-in has on your policies and generates a simulation report. The report does not only list the applied conditional access policies but also classic policies if they exist.</p>\n      <p><strong>Reference:</strong> https://azure.microsoft.com/en-us/updates/azure-ad-conditional-access-what-if-tool-is-now-available</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Access reviews",
      "Identity Secure Score",
      "The What If tool",
      "the Microsoft 365 network connectivity test tool"
    ]
  },
  {
    "id": 149,
    "type": "radio",
    "title": "Question 149",
    "questionText": "\n      <p><strong>Question 149</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and Windows 10 laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptops to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p>App Passwords are a legacy feature for old Office versions. Windows Hello is the way to go.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "an app password",
      "voice",
      "Windows Hello for Business",
      "security questions"
    ]
  },
  {
    "id": 150,
    "type": "radio",
    "title": "Question 150",
    "questionText": "\n      <p><strong>Question 150</strong></p>\n      <p>You create a conditional access policy that blocks access when a user triggers a high-severity sign-in alert. You need to test the policy under the following conditions:</p>\n      <p>\n        ✑ A user signs in from another country.<br>\n        ✑ A user triggers a sign-in risk.\n      </p>\n      <p>What should you use to complete the test?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>The Azure AD conditional access What if tool allows you to understand the impact of your conditional access policies on your environment. Instead of test driving your policies by performing multiple sign-ins manually, this tool enables you to evaluate a simulated sign-in of a user. The simulation estimates the impact this sign-in has on your policies and generates a simulation report. The report does not only list the applied conditional access policies but also classic policies if they exist.</p>\n      <p><strong>Reference:</strong> https://azure.microsoft.com/en-us/updates/azure-ad-conditional-access-what-if-tool-is-now-available</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "the Conditional Access What If tool",
      "sign-ins logs in Azure Active Directory (Azure AD)",
      "the activity logs in Microsoft Defender for Cloud Apps",
      "access reviews in Azure Active Directory (Azure AD)"
    ]
  },
  {
    "id": 151,
    "type": "dropdown",
    "title": "Question 151",
    "questionText": "\n      <p><strong>Question 151</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q151_table1.jpg\" alt=\"151 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You have the locations shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q151_table2.jpg\" alt=\"151 table2\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>The tenant contains a named location that has the following configurations:</p>\n      <p>\n        ✑ Name: Location1<br>\n        ✑ Mark as trusted location: Enabled IPv4 range: 10.10.0.0/16 -<br>\n        MFA has a trusted IP address range of 193.17.17.0/24.<br>\n        ✑ Name: CAPolicy1<br>\n        ✑ Assignments<br>\n        - Users or workload identities: Group1<br>\n        - Cloud apps or actions: All cloud apps<br>\n        ✑ Conditions<br>\n        - Locations: All trusted locations<br>\n        ✑ Access controls<br>\n        - Grant<br>\n        - Grant access: Require multi-factor authentication<br>\n        - Session: 0 controls selected<br>\n        ✑ Enable policy: On\n      </p>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            <!-- Hidden dummy input satisfies app.js standard radio check -->\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">If User1 connects to the tenant from IP address 10.10.0.150, the user will be prompted for MFA.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q151_1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">If User2 connects to the tenant from IP address 10.10.1.160, the user will be prompted for MFA.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q151_2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">If User2 connects to the tenant from IP address 192.168.1.20, the user will be prompted for MFA.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"matrix_q151_3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "matrix_q151_1": "No",
      "matrix_q151_2": "Yes",
      "matrix_q151_3": "No"
    },
    "correctAnswerText": "\n      <p><strong>Box 1: No</strong></p>\n      <p>10.10.0.150 is from a trusted location.</p>\n      <p><strong>Note:</strong> The trusted IPs feature of Azure AD Multi-Factor Authentication bypasses multi-factor authentication prompts for users who sign in from a defined IP address range. You can set trusted IP ranges for your on-premises environments. When users are in one of these locations, there's no Azure AD Multi-Factor Authentication prompt. The trusted IPs feature requires Azure AD Premium P1 edition.</p>\n      <p><strong>Box 2: Yes</strong></p>\n      <p>(although the request is from a trusted location, that doesn't mean the MFA prompt will be bypassed! If there was CA policy configured to require MFA with the trusted locations EXCLUDED, then the user would not get the MFA prompt)</p>\n      <p><strong>Box 3: No</strong></p>\n      <p>(request is coming from the IP that is added to the MFA trusted IPs list in the legacy MFA portal https://account.activedirectory.windowsazure.com/UserManagement/MfaSettings.aspx)</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 152,
    "type": "dropdown",
    "title": "Question 152",
    "questionText": "\n      <p><strong>Question 152</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that has Email one-time passcode for guests set to Yes.</p>\n      <p>You invite the guest users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q152_table1.jpg\" alt=\"152 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>Which users will receive a one-time passcode, and how long will the passcode be valid?</p>\n      <p>To answer, select the appropriate options in the answer area.</p>\n      <p>NOTE: Each correct selection is worth one point.</p>\n      <p><strong>Answer Area</strong></p>\n      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 10px;\">\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">Users:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown1\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"Guest1 only\">Guest1 only</option>\n              <option value=\"Guest2 only\">Guest2 only</option>\n              <option value=\"Guest3 only\">Guest3 only</option>\n              <option value=\"Guest1 and Guest2 only\">Guest1 and Guest2 only</option>\n              <option value=\"Guest2 and Guest3 only\">Guest2 and Guest3 only</option>\n              <option value=\"Guest1, Guest2, and Guest3\">Guest1, Guest2, and Guest3</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 35%; font-weight: 500; vertical-align: middle;\">Valid for:</td>\n          <td style=\"width: 65%; vertical-align: middle;\">\n            <select class=\"inline-select\" data-key=\"dropdown2\" style=\"width: 100%; padding: 6px; border: 1px solid #ccc; background-color: #fff; font-size: 14px;\">\n              <option value=\"\">-- Select --</option>\n              <option value=\"30 minutes\">30 minutes</option>\n              <option value=\"60 minutes\">60 minutes</option>\n              <option value=\"24 hours\">24 hours</option>\n              <option value=\"48 hours\">48 hours</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n    ",
    "prompt": "",
    "correctAnswer": {
      "dropdown1": "Guest3 only",
      "dropdown2": "30 minutes"
    },
    "correctAnswerText": "\n      <p><strong>Box 1: Guest3 only</strong></p>\n      <p>When does a guest user get a one-time passcode?</p>\n      <p>When a guest user redeems an invitation or uses a link to a resource that has been shared with them, they'll receive a one-time passcode if:</p>\n      <p>- They don't have an Azure AD account</p>\n      <p>- They don't have a Microsoft account</p>\n      <p>- The inviting tenant didn't set up federation with social (like Google) or other identity providers.</p>\n      <p><strong>Box 2: 30 minutes</strong></p>\n      <p>One-time passcodes are valid for 30 minutes. After 30 minutes, that specific one-time passcode is no longer valid, and the user must request a new one. User sessions expire after 24 hours. After that time, the guest user receives a new passcode when they access the resource. Session expiration provides added security, especially when a guest user leaves their company or no longer needs access.</p>\n      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/external-identities/one-time-passcode</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 153,
    "type": "radio",
    "title": "Question 153",
    "questionText": "\n      <p><strong>Question 153</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>You currently allow email clients that use Basic authentication to connect to Microsoft Exchange Online.</p>\n      <p>You need to ensure that users can connect to Exchange only from email clients that use Modern authentication protocols.</p>\n      <p>What should you implement?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p><strong>Explanation:</strong></p>\n      <p>https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/block-legacy-authentication</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "an OAuth policy in Microsoft Defender for Cloud Apps",
      "a conditional access policy in Azure Active Directory (Azure AD)",
      "a compliance policy in Microsoft Endpoint Manager",
      "an application control profile in Microsoft Endpoint Manager"
    ]
  },
  {
    "id": 154,
    "type": "radio",
    "title": "Question 154",
    "questionText": "\n      <p><strong>Question 154</strong></p>\n      <p>You have an Azure subscription that contains an Azure SQL database named db1.</p>\n      <p>You deploy an Azure App Service web app named App1 that provides product information to users that connect to App1 anonymously.</p>\n      <p>You need to provide App1 with access to db1. The solution must meet the following requirements:</p>\n      <p>\n        • Credentials must only be available to App1.<br>\n        • Administrative effort must be minimized. Which type of credentials should you use?\n      </p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>A. a system-assigned managed identity. Why this is the best choice: A system-assigned managed identity is the most secure and efficient way to handle this scenario because it perfectly aligns with your two core requirements: Credentials only available to App1: The identity is tied directly to the lifecycle of the web app. It is automatically created in Microsoft Entra ID (Azure AD), and its credentials (secrets) are managed entirely by Azure behind the scenes. They are never exposed to developers or stored in code/configuration files.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "a system-assigned managed identity",
      "an Azure Active Directory (Azure AD) user account",
      "a SQL Server account",
      "a user-assigned managed identity"
    ]
  },
  {
    "id": 155,
    "type": "radio",
    "title": "Question 155",
    "questionText": "\n      <p><strong>Question 155</strong></p>\n      <p>You have an Azure subscription that contains the custom roles shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q155_table1.jpg\" alt=\"155 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You need to create a custom Azure subscription role named Role3 by using the Azure portal. Role3 will use the baseline permissions of an existing role.</p>\n      <p>Which roles can you clone to create Role3?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 2,
    "correctAnswerText": "\n      <p>The answer is correct. C. tested in the lab. You can clone Role2 (CustomRole) and Azure Built-in Roles</p>\n      <p>It's unclear if the question asks which roles can be cloned from a single action or in general, but I'd say the latter. So, both custom and Azure built-in roles can be cloned - https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal#clone-a-role</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Role2 only",
      "built-in Azure subscription roles only",
      "built-in Azure subscription roles and Role2 only",
      "built-in Azure subscription roles and built-in Azure AD roles only",
      "Role1, Role2, built-in Azure subscription roles, and built-in Azure AD roles"
    ]
  },
  {
    "id": 156,
    "type": "radio",
    "title": "Question 156",
    "questionText": "\n      <p><strong>Question 156</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and Windows 10 laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptops to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>A. Windows Hello for business > app password. This question comes up several times and many users indicate that Windows hello for business is what should be the answer.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Windows Hello for Business",
      "an app password",
      "security questions",
      "email"
    ]
  },
  {
    "id": 157,
    "type": "radio",
    "title": "Question 157",
    "questionText": "\n      <p><strong>Question 157</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and Windows 10 laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptops to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>Windows Hello for Business</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "voice",
      "Windows Hello for Business",
      "email",
      "security questions"
    ]
  },
  {
    "id": 158,
    "type": "dropdown",
    "title": "Question 158",
    "questionText": "\n      <p><strong>Question 158</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure subscription that contains the following virtual machine:</p>\n      <ul>\n        <li>Name: V1</li>\n        <li>Azure region: East US</li>\n        <li>System-assigned managed identity: Disabled</li>\n      </ul>\n      <p>You create the managed identities shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q158_table1.jpg\" alt=\"158 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You perform the following actions:</p>\n      <ul>\n        <li>Assign Managed1 to V1.</li>\n        <li>Create a resource group named RG1 in the West US region.</li>\n      </ul>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">You can assign Managed2 to V1.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q158_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">You can assign Managed3 to V1.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q158_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">You can assign VM1 the Owner role for RG1.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q158_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "q158_statement1": "Yes",
      "q158_statement2": "Yes",
      "q158_statement3": "No"
    },
    "correctAnswerText": "\n      <p>Refer to the uploaded image and to the corresponding explanation for answers.</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 159,
    "type": "dropdown",
    "title": "Question 159",
    "questionText": "\n      <p><strong>Question 159</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure subscription that contains the key vaults shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q159_table1.jpg\" alt=\"159 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>The subscription contains the users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q159_table2.jpg\" alt=\"159 table2\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>On June 1, Admin4 performs the following actions:</p>\n      <ul>\n        <li>Deletes a certificate named Certificate1 from KeyVault1</li>\n        <li>Deletes a secret named Secret1 from KeyVault2</li>\n      </ul>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.</p>\n\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">Admin1 can recover Secret1 on June 7.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q159_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">Admin2 can purge Certificate1 on June 12.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q159_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">Admin3 can purge Certificate1 on June 14.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q159_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "q159_statement1": "Yes",
      "q159_statement2": "No",
      "q159_statement3": "No"
    },
    "correctAnswerText": "\n      <p><strong>Explanation:</strong></p>\n      <p><strong>Yes</strong> - Key Vault Administrator can perform all data plane operations on a key vault. and purge protection is disabled for KeyVault2.<br>\n      NB: Purge protection is an optional Key Vault behavior and is not enabled by default. Do not mismatch with soft-delete</p>\n      <p><strong>No</strong> - We are still in the Purge protection remaining period.<br>\n      NB: Also the Key Vault contributor role doesn't allow to get access to certificate</p>\n      <p><strong>No</strong> - We are still in the Purge protection remaining period.<br>\n      Even if the Certificate Officer role allow to get access to certificate</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 160,
    "type": "radio",
    "title": "Question 160",
    "questionText": "\n      <p><strong>Question 160</strong></p>\n      <p>You have an Azure AD tenant.</p>\n      <p>You open the risk detections report.</p>\n      <p>Which risk detection type is classified as a user risk?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n      <p><strong>Sign-in Risk policies cover:</strong></p>\n      <ul>\n        <li>Anonymous IP address</li>\n        <li>Additional Risk detected</li>\n        <li>Admin confirmed user compromised</li>\n        <li>Anomalous token</li>\n        <li>Atypical travel</li>\n        <li>Azure AD threat intelligence</li>\n        <li>Impossible travel</li>\n        <li>Malicious IP</li>\n        <li>Malware linked IP</li>\n        <li>Mass Access to sensitive files</li>\n        <li>New country</li>\n        <li>Password spray</li>\n        <li>Suspicious browser</li>\n        <li>Suspicious inbox forwarding</li>\n        <li>Suspicious inbox manipulation rules</li>\n        <li>token issuer anomaly</li>\n        <li>Unfamiliar sign-in properties</li>\n      </ul>\n      <p><strong>User risk policies cover:</strong></p>\n      <ul>\n        <li>Additional risk detected</li>\n        <li>Anomalous user activity</li>\n        <li>Azure AD threat intelligence</li>\n        <li>Leaked credentials</li>\n        <li>Possible attempt to access Primary Refresh Token (PRT)</li>\n      </ul>\n      <p>https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Password spray",
      "anonymous IP address",
      "unfamiliar sign-in properties",
      "Azure AD threat intelligence"
    ]
  },
  {
    "id": 161,
    "type": "radio",
    "title": "Question 161",
    "questionText": "\n      <p><strong>Question 161</strong></p>\n      <p>You have an Azure Active Directory (Azure AD) tenant.</p>\n      <p>You configure self-service password reset (SSPR) by using the following settings:</p>\n      <ul>\n        <li>Require users to register when signing in: Yes</li>\n        <li>Number of methods required to reset: 1</li>\n      </ul>\n      <p>What is a valid authentication method available to users?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n      <p>It is only if 2 authentication methods are required.</p>\n      <p>https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-howitworks#mobile-app-and-sspr</p>\n      <p>When using a mobile app as a method for password reset, like the Microsoft Authenticator app, the following considerations apply:</p>\n      <ul>\n        <li>When administrators require one method be used to reset a password, verification code is the only option available.</li>\n        <li>When administrators require two methods be used to reset a password, users are able to use notification OR verification code in addition to any other enabled methods.</li>\n      </ul>\n    ",
    "isCaseStudy": false,
    "options": [
      "a smartcard",
      "a mobile app code",
      "a mobile app notification",
      "an email to an address outside your organization"
    ]
  },
  {
    "id": 162,
    "type": "radio",
    "title": "Question 162",
    "questionText": "\n      <p><strong>Question 162</strong></p>\n      <p>You create a new Microsoft 365 E5 tenant.</p>\n      <p>You need to ensure that when users connect to the Microsoft 365 portal from an anonymous IP address, they are prompted to use multi-factor authentication (MFA).</p>\n      <p>What should you configure?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 0,
    "correctAnswerText": "\n      <p>Sign-in risk is correct. Examples for Sign-In Risk:</p>\n      <ul>\n        <li>Anonymous IP address</li>\n        <li>Atypical travel</li>\n        <li>Malware linked IP address</li>\n        <li>Unfamiliar sign-in properties</li>\n        <li>Leaked credentials</li>\n        <li>Password spray</li>\n      </ul>\n    ",
    "isCaseStudy": false,
    "options": [
      "a sign-in risk policy",
      "a user risk policy",
      "an MFA registration policy"
    ]
  },
  {
    "id": 163,
    "type": "dropdown",
    "title": "Question 163",
    "questionText": "\n      <p><strong>Question 163</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>You configure a conditional access policy as shown in the Conditional Access policy exhibit. (Click the Conditional Access policy tab.)</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q163_exhibit.jpg\" alt=\"163 exhibit\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You view the User administrator role settings as shown in the Role setting details exhibit. (Click the Role setting details tab.)</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q163_exhibit2.jpg\" alt=\"163 exhibit2\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You view the User administrator role assignments as shown in the Role assignments exhibit. (Click the Role assignments tab.)</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q163_exhibit3.jpg\" alt=\"163 exhibit3\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">Before Admin1 can perform a task that requires the User administrator role, an approver must approve the activation request.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q163_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">Admin2 can request activation of the User administrator role for a period of two hours.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q163_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">If Admin3 connects to the Azure Active Directory admin center, and then activates the User administrator role, Admin3 will be prompted to authenticate by using multi-factor authentication (MFA) twice.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q163_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "q163_statement1": "Yes",
      "q163_statement2": "Yes",
      "q163_statement3": "No"
    },
    "correctAnswerText": "\n      <p><strong>Explanation:</strong></p>\n      <p><strong>Before Admin1 can perform a task... an approver must approve the activation request — Yes</strong><br>\n      This indicates that the \"Require approval to activate\" setting has been enabled for the User Administrator role. In PIM, you can designate specific users or groups as Approvers. When an eligible user like Admin1 tries to activate the role, the request sits in a \"Pending\" state until an approver signs off on it.</p>\n      <p><strong>Admin2 can request activation of the User administrator role for a period of two hours — Yes</strong><br>\n      Every PIM role has a \"Maximum activation duration\" (the default is often 8 hours). As long as the two-hour request is equal to or less than the maximum duration set by the administrator, the request is valid.</p>\n      <p><strong>If Admin3 connects... and then activates... Admin3 will be prompted to authenticate by using MFA twice — No</strong><br>\n      This is a common misconception. Microsoft Entra ID uses session-based authentication. If Admin3 already performed MFA to sign in to the portal (because of a Conditional Access policy), that MFA \"claim\" is stored in their security token. When they go to activate their PIM role, PIM checks for that MFA claim. Since it’s already there, the user is not prompted a second time. They only provide MFA once per session.</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 164,
    "type": "dropdown",
    "title": "Question 164",
    "questionText": "\n      <p><strong>Question 164</strong></p>\n      <p><strong>HOTSPOT</strong></p>\n      <p>You have an Azure AD tenant that contains the users shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q164_table1.jpg\" alt=\"q161 table1\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You have the Azure AD Identity Protection policies shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q164_table2.jpg\" alt=\"q164 table2\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>You review the Risky users report and the Risky sign-ins report and perform actions for each user as shown in the following table.</p>\n      <div style=\"margin: 15px 0; text-align: center;\">\n        <img src=\"images/q164_table3.jpg\" alt=\"q161 table3\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" />\n      </div>\n      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>\n      <p><em>NOTE: Each correct selection is worth one point.</em></p>\n\n      <div style=\"margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;\">\n        <table style=\"width: 100%; border-collapse: collapse;\">\n          <thead>\n            <tr style=\"border-bottom: 2px solid #ccc;\">\n              <th style=\"text-align: left; padding: 8px;\">Statements</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">Yes</th>\n              <th style=\"text-align: center; padding: 8px; width: 80px;\">No</th>\n            </tr>\n          </thead>\n          <tbody>\n            \n\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">User1 can sign in by using multi-factor authentication (MFA).</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q164_statement1\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid #eee;\">\n              <td style=\"padding: 8px;\">User2 can sign in by using multi-factor authentication (MFA).</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q164_statement2\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 8px;\">User3 can sign in from an anonymous IP address.</td>\n              <td style=\"text-align: center;\"><select class=\"inline-select answer-select\" data-key=\"q164_statement3\" style=\"padding:6px;min-width:100px;\"><option value=\"\">-- Select --</option><option value=\"Yes\">Yes</option><option value=\"No\">No</option></select></td>\n              <td style=\"text-align: center;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
    "prompt": "",
    "correctAnswer": {
      "q164_statement1": "No",
      "q164_statement2": "No",
      "q164_statement3": "Yes"
    },
    "correctAnswerText": "\n      <p><strong>Explanation:</strong></p>\n      <p><strong>User1 can sign in by using multi-factor authentication (MFA): No</strong><br>\n      - Blocked access prevents self-remediation through password resets & Azure AD MFA.</p>\n      <p><strong>User2 can sign in by using multi-factor authentication (MFA): No</strong><br>\n      - Blocked access prevents self-remediation through password resets & Azure AD MFA.</p>\n      <p><strong>User3 can sign in from an anonymous IP address: Yes</strong><br>\n      - Anonymous IP address sign-in risk is Medium.</p>\n    ",
    "isCaseStudy": false
  },
  {
    "id": 165,
    "type": "radio",
    "title": "Question 165",
    "questionText": "\n      <p><strong>Question 165</strong></p>\n      <p>You have an Azure subscription that contains a user named User1. You need to meet the following requirements:</p>\n      <ul>\n        <li>Prevent User1 from being added as an owner of newly registered apps.</li>\n        <li>Ensure that User1 can manage the application proxy settings.</li>\n        <li>Ensure that User1 can register apps.</li>\n        <li>Use the principle of least privilege. Which role should you assign to User1?</li>\n      </ul>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n      <p><strong>Answer: Application administrator</strong></p>\n      <p>The Application Administrator role allows users to create and manage all aspects of enterprise applications, application registrations, and application proxy settings while maintaining least privilege compared to Global Administrator, whereas Application Developer doesn't manage application proxy settings by default.</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "Application developer",
      "Cloud application administrator",
      "Service support administrator",
      "Application administrator"
    ]
  },
  {
    "id": 166,
    "type": "dragdrop",
    "title": "Question 166",
    "questionText": "\n      <p><strong>Question 166: Drag and Drop</strong></p>\n      <p>You have a Microsoft 365 E5 subscription and an Azure subscription. You need to meet the following requirements:</p>\n      <ul>\n        <li>Ensure that users can sign in to Azure virtual machines by using their Microsoft 365 credentials.</li>\n        <li>Delegate the ability to create new virtual machines.</li>\n      </ul>\n      <p>What should you use for each requirement? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all.</p>\n    ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n      <p><strong>1. Azure role-based access control (Azure RBAC)</strong><br>\n      https://learn.microsoft.com/en-us/azure/active-directory/devices/howto-vm-sign-in-azure-ad-windows#configure-role-assignments-for-the-vm</p>\n      \n      <p><strong>2. Azure AD built-in roles</strong><br>\n      https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles</p>\n    ",
    "isCaseStudy": false,
    "availableItems": [
      "Azure AD built-in roles",
      "Azure AD managed identities",
      "Azure role-based access control (Azure RBAC)"
    ],
    "dropTargets": [
      {
        "id": "step1",
        "label": "Ensure that users can sign in to Azure virtual machines by using their Microsoft 365 credentials:",
        "correctAnswer": "Azure role-based access control (Azure RBAC)"
      },
      {
        "id": "step2",
        "label": "Delegate the ability to create new virtual machines:",
        "correctAnswer": "Azure AD built-in roles"
      }
    ]
  },
  {
    "id": 167,
    "type": "radio",
    "title": "Question 167",
    "questionText": "\n      <p><strong>Question 167</strong></p>\n      <p>You have a Microsoft 365 tenant.</p>\n      <p>All users have mobile phones and Windows 10 laptops.</p>\n      <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptops to a wired network that has internet access.</p>\n      <p>You plan to implement multi-factor authentication (MFA).</p>\n      <p>Which MFA authentication method can the users use from the remote location?</p>\n    ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n      <p>Windows Hello for Business</p>\n    ",
    "isCaseStudy": false,
    "options": [
      "a notification through the Microsoft Authenticator app",
      "SMS",
      "email",
      "Windows Hello for Business"
    ]
  },
  {
    "id": 168,
    "type": "dropdown",
    "title": "Question 168",
    "questionText": "\n    <p style=\"text-align: left;\">Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with an Azure AD tenant. The AD DS domain contains the organizational units (OUs) shown in the following table.</p>\n    \n<div style=\"margin: 12px 0; text-align: center;\">\n<img src=\"images/q168_table1.jpg\" style=\"max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;\" alt=\"q168 table1\" />\n</div>\n\n    <p style=\"text-align: left;\">You need to create a break-glass account named BreakGlass.</p>\n    <p style=\"text-align: left;\">Where should you create BreakGlass, and which role should you assign to BreakGlass? To answer, select the appropriate options in the answer area.</p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; flex-direction: column; gap: 16px;\">\n        <div style=\"display: flex; align-items: center; gap: 12px;\">\n          <label style=\"font-weight: 500; min-width: 80px; text-align: right;\">Location:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_1\" style=\"padding: 6px; flex-grow: 1;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Azure AD\">Azure AD</option>\n            <option value=\"OU1\">OU1</option>\n            <option value=\"OU2\">OU2</option>\n          </select>\n        </div>\n        <div style=\"display: flex; align-items: center; gap: 12px;\">\n          <label style=\"font-weight: 500; min-width: 80px; text-align: right;\">Role:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_2\" style=\"padding: 6px; flex-grow: 1;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Billing Administrator\">Billing Administrator</option>\n            <option value=\"Global Administrator\">Global Administrator</option>\n            <option value=\"Owner\">Owner</option>\n            <option value=\"Privileged Role Administrator\">Privileged Role Administrator</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "dropdown_1": "Azure AD",
      "dropdown_2": "Global Administrator"
    },
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Azure AD:</strong> Emergency access accounts (break-glass accounts) should be cloud-only accounts created directly in Azure AD (cloud-only) rather than synced from on-premises AD DS. This ensures that if the on-premises directory infrastructure or synchronization mechanism fails, the emergency account remains accessible.</li>\n      <li><strong>Global Administrator:</strong> Break-glass accounts are assigned the Global Administrator role in Azure AD to ensure full administrative access is available during an emergency when standard authentication methods fail.</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://learn.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access#how-to-create-an-emergency-access-account\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 169,
    "type": "radio",
    "title": "Question 169",
    "questionText": "\n    <p style=\"text-align: left;\">You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1.</p>\n    <p style=\"text-align: left;\">You need to ensure that users can request access to Site1.</p>\n    <p style=\"text-align: left;\">The solution must meet the following requirements:</p>\n    <ul style=\"margin-top: 5px; margin-bottom: 15px;\">\n      <li style=\"text-align: left;\">Automatically approve requests from users based on their group membership.</li>\n      <li style=\"text-align: left;\">Automatically remove the access after 30 days.</li>\n    </ul>\n    <p style=\"text-align: left;\">What should you do?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 1,
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Create an access package:</strong> Microsoft Entra entitlement management (formerly Azure AD entitlement management) allows organizations to manage access to groups, applications, and SharePoint Online sites through access packages. Access packages can enforce automatic approvals based on requestor attributes/group memberships and include automatic expiration settings (e.g., removing access after 30 days).</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-access-package-create\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "Create a Conditional Access policy.",
      "Create an access package.",
      "Configure Role settings in Azure AD Privileged Identity Management.",
      "Create a Microsoft Defender for Cloud Apps access policy."
    ]
  },
  {
    "id": 170,
    "type": "dropdown",
    "title": "Question 170",
    "questionText": "\n    <p style=\"text-align: left;\">You have an Azure subscription.</p>\n    <p style=\"text-align: left;\">You need to create two custom roles named Role1 and Role2.</p>\n    <p style=\"text-align: left;\">The solution must meet the following requirements:</p>\n    <ul style=\"margin-top: 5px; margin-bottom: 15px;\">\n      <li style=\"text-align: left;\">Users that are assigned Role1 can manage application security groups.</li>\n      <li style=\"text-align: left;\">Users that are assigned Role2 can manage Azure Firewall.</li>\n    </ul>\n    <p style=\"text-align: left;\">Which resource provider permissions are required for each role? To answer, select the appropriate options in the answer area.</p>\n\n    <div style=\"margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;\">\n      <div style=\"display: flex; flex-direction: column; gap: 16px;\">\n        <div style=\"display: flex; align-items: center; gap: 12px;\">\n          <label style=\"font-weight: 500; min-width: 60px; text-align: right;\">Role1:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_1\" style=\"padding: 6px; flex-grow: 1;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Microsoft.App\">Microsoft.App</option>\n            <option value=\"Microsoft.Computer\">Microsoft.Computer</option>\n            <option value=\"Microsoft.Network\">Microsoft.Network</option>\n            <option value=\"Microsoft.Security\">Microsoft.Security</option>\n          </select>\n        </div>\n        <div style=\"display: flex; align-items: center; gap: 12px;\">\n          <label style=\"font-weight: 500; min-width: 60px; text-align: right;\">Role2:</label>\n          <select class=\"inline-select\" data-key=\"dropdown_2\" style=\"padding: 6px; flex-grow: 1;\">\n            <option value=\"\">-- Select Option --</option>\n            <option value=\"Microsoft.App\">Microsoft.App</option>\n            <option value=\"Microsoft.Management\">Microsoft.Management</option>\n            <option value=\"Microsoft.Network\">Microsoft.Network</option>\n            <option value=\"Microsoft.Security\">Microsoft.Security</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  ",
    "prompt": "",
    "correctAnswer": {
      "dropdown_1": "Microsoft.Network",
      "dropdown_2": "Microsoft.Network"
    },
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>Role 1: Microsoft.Network</strong> — This indicates that the first role is granted permissions to manage networking resources, such as Virtual Networks (VNets), Network Security Groups (NSGs), Application Security Groups (ASGs), or Load Balancers.</li>\n      <li><strong>Role 2: Microsoft.Network</strong> — The second role is also assigned to the networking provider to allow management of Azure Firewall resources.</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftnetwork\n    </p>\n  ",
    "isCaseStudy": false
  },
  {
    "id": 171,
    "type": "radio",
    "title": "Question 171",
    "questionText": "\n    <p style=\"text-align: left;\">You have a Microsoft 365 tenant.</p>\n    <p style=\"text-align: left;\">All users have mobile phones and Windows 10 laptops.</p>\n    <p style=\"text-align: left;\">The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptop to a wired network that has internet access.</p>\n    <p style=\"text-align: left;\">You plan to implement multi-factor authentication (MFA).</p>\n    <p style=\"text-align: left;\">Which MFA authentication method can the users use from the remote location?</p>\n  ",
    "prompt": "Select the correct option:",
    "correctAnswer": 3,
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ul>\n      <li><strong>a verification code from the Microsoft Authenticator app:</strong> The Authenticator app can be used as a software token to generate an OATH verification code. After entering your username and password, you enter the code provided by the Authenticator app into the sign-in interface.</li>\n    </ul>\n    <p><strong>Incorrect Answers:</strong></p>\n    <ul>\n      <li><strong>security questions:</strong> Security questions are not used as an authentication method but can be used during the self-service password reset (SSPR) process.</li>\n      <li><strong>voice / an app password:</strong> An automated voice call and an SMS require mobile connectivity.</li>\n    </ul>\n    <p>\n      <strong>References:</strong><br>\n      https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods\n    </p>\n  ",
    "isCaseStudy": false,
    "options": [
      "voice",
      "an app password",
      "security questions",
      "a verification code from the Microsoft Authenticator app"
    ]
  },
  {
    "id": 172,
    "type": "dragdrop",
    "title": "Question 172",
    "questionText": "\n    <p><strong>Question 172: Drag and Drop</strong></p><br>\n    <p>You have a Microsoft 365 E5 tenant. You purchase a cloud app named App1.</p><b>\n    <p>You need to enable real-time session-level monitoring of App1 by using Microsoft Defender for Cloud Apps.</p><br>\n    <p>In which order should you perform the actions?</p><br>\n    <p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order</p>\n  ",
    "prompt": "Select an item, then select the matching answer area:",
    "correctAnswerText": "\n    <p><strong>Explanation:</strong></p>\n    <ol>\n      <li>Publish App1.</li>\n      <li>Create a conditional access policy that has session controls configured.</li>\n      <li>From MCAS modify the Connected apps settings.</li>\n      <li>From MCAS create a session policy.</li>\n    </ol>\n    <p>\n      <strong>Reference:</strong><br>\n      https://techcommunity.microsoft.com/t5/itops-talk-blog/step-by-step-blocking-data-downloads-via-microsoft-cloud-app/ba-p/326357\n    </p>\n  ",
    "isCaseStudy": false,
    "availableItems": [
      "Publish App1 in Azure AD.",
      "Create a conditional access policy that has session controls configured.",
      "From Microsoft Defender for Cloud Apps, create a session policy.",
      "From Microsoft Defender for Cloud Apps, modify the Connected apps settings for App1."
    ],
    "dropTargets": [
      {
        "id": "step1",
        "label": "step1",
        "correctAnswer": "Publish App1 in Azure AD."
      },
      {
        "id": "step2",
        "label": "step2",
        "correctAnswer": "Create a conditional access policy that has session controls configured."
      },
      {
        "id": "step3",
        "label": "step3",
        "correctAnswer": "From Microsoft Defender for Cloud Apps, modify the Connected apps settings for App1."
      },
      {
        "id": "step4",
        "label": "step4",
        "correctAnswer": "From Microsoft Defender for Cloud Apps, create a session policy."
      }
    ]
  },
{
    id: 173,
    isCaseStudy: true,
    title: "Question 173",

    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User administrator<br>
            User4 - Privileged role administrator<br>
            User5 - Identity Governance Administrator<br><br>

            <strong>Groups:</strong><br>
            IT_Group1 (Security, Assigned)<br>
            AdatumUsers (Security, Assigned)<br><br>

            <strong>Litware Environment:</strong><br>
            • Litware has an AD DS forest named litware.com.
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure an access review for Package1.<br>
            • Require admin approval for application access.<br>
            • Sync litware.com users and groups.<br>
            • Limit guest invitations to specific administrators.<br>
            • Increase Azure AD device limit to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and have a grace period option.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods must include:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator app<br><br>

            • No trust relationship between adatum.com and litware.com.<br>
            • Use the principle of least privilege.
        `
    },

    questionText: `
      &lt;p&gt;&lt;strong&gt;Question 173: Case Study - ADatum Corporation&lt;/strong&gt;&lt;/p&gt;
      &lt;p&gt;You implement the planned changes for SSPR. What occurs when User3 attempts to use SSPR? To answer, select the appropriate options in the answer area.&lt;/p&gt;

      &lt;div style="margin-top:15px;background:#f9f9f9;padding:12px;border:1px solid #ddd;border-radius:4px;"&gt;

        &lt;p style="margin-bottom:8px;"&gt;
            &lt;strong&gt;Number of authentication methods required:&lt;/strong&gt;

            &lt;select
                data-key="authMethodsCount"
                style="padding:6px;margin-left:10px;"
            &gt;
                &lt;option value=""&gt;-- Select Option --&lt;/option&gt;
                &lt;option value="1"&gt;1&lt;/option&gt;
                &lt;option value="2"&gt;2&lt;/option&gt;
                &lt;option value="3"&gt;3&lt;/option&gt;
                &lt;option value="4"&gt;4&lt;/option&gt;
            &lt;/select&gt;
        &lt;/p&gt;

        &lt;p&gt;
            &lt;strong&gt;Authentication methods that can be used:&lt;/strong&gt;

            &lt;select
                data-key="authMethodsAllowed"
                style="padding:6px;margin-left:10px;"
            &gt;
                &lt;option value=""&gt;-- Select Option --&lt;/option&gt;
                &lt;option value="Microsoft Authenticator only"&gt;Microsoft Authenticator only&lt;/option&gt;
                &lt;option value="Security questions only"&gt;Security questions only&lt;/option&gt;
                &lt;option value="Email and phone only"&gt;Email and phone only&lt;/option&gt;
                &lt;option value="Phone and Microsoft Authenticator only"&gt;Phone and Microsoft Authenticator only&lt;/option&gt;
                &lt;option value="Email, phone, and Microsoft Authenticator only"&gt;Email, phone, and Microsoft Authenticator only&lt;/option&gt;
                &lt;option value="Email, phone, Microsoft Authenticator, and security questions"&gt;Email, phone, Microsoft Authenticator, and security questions&lt;/option&gt;
            &lt;/select&gt;
        &lt;/p&gt;

      &lt;/div&gt;
    `,

    type: "dropdown",

    correctAnswer: {
        authMethodsCount: "1",
        authMethodsAllowed:
            "Email, phone, Microsoft Authenticator, and security questions"
    },

    correctAnswerText: `
        <p><strong>Correct Selections:</strong></p>

        <ul>
            <li>
                <strong>Number of authentication methods required:</strong>
                1
            </li>

            <li>
                <strong>Authentication methods that can be used:</strong>
                Email, phone, Microsoft Authenticator, and security questions
            </li>
        </ul>

        <p>
            <strong>Explanation:</strong>
            Users must provide one authentication method to reset their password.
            Available configured methods include Email, Phone,
            Security Questions, and Microsoft Authenticator.
        </p>
    `
},
{
    id: 174,
    isCaseStudy: true,

    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User administrator<br>
            User4 - Privileged role administrator<br>
            User5 - Identity Governance Administrator<br><br>

            <strong>Groups:</strong><br>
            IT_Group1 (Security, Assigned)<br>
            AdatumUsers (Security, Assigned)<br><br>

            <strong>Litware Environment:</strong><br>
            • Litware has an AD DS forest named litware.com.
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure access reviews.<br>
            • Require admin approval for application access.<br>
            • Synchronize litware.com users and groups.<br>
            • Restrict guest invitations.<br>
            • Increase Azure AD device limits.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be eligible for role activation.<br>
            • Users must register for MFA.<br>
            • Users must be allowed a registration grace period.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator<br><br>

            • No trust relationship between adatum.com and litware.com.<br>
            • Follow least-privilege principles.
        `
    },

    title: "Question 174",

    questionText: `
      &lt;p&gt;&lt;strong&gt;Question 174: Case Study - ADatum Corporation&lt;/strong&gt;&lt;/p&gt;

      &lt;p&gt;
      You need to support the planned changes and meet the technical requirements
      for MFA. Which feature should you use, and how long before the users must
      complete the registration?
      &lt;/p&gt;

      &lt;div style="margin-top:15px;background:#f9f9f9;padding:12px;border:1px solid #ddd;border-radius:4px;"&gt;

        &lt;p style="margin-bottom:8px;"&gt;

            &lt;strong&gt;Feature:&lt;/strong&gt;

            &lt;select
                data-key="feature"
                style="padding:6px;margin-left:10px;"
            &gt;

                &lt;option value=""&gt;-- Select Option --&lt;/option&gt;

                &lt;option value="An authentication method policy"&gt;
                    An authentication method policy
                &lt;/option&gt;

                &lt;option value="A Conditional Access policy"&gt;
                    A Conditional Access policy
                &lt;/option&gt;

                &lt;option value="An MFA registration policy"&gt;
                    An MFA registration policy
                &lt;/option&gt;

                &lt;option value="The Multi-Factor Authentication Server settings"&gt;
                    The Multi-Factor Authentication Server settings
                &lt;/option&gt;

            &lt;/select&gt;

        &lt;/p&gt;

        &lt;p&gt;

            &lt;strong&gt;Grace period:&lt;/strong&gt;

            &lt;select
                data-key="gracePeriod"
                style="padding:6px;margin-left:10px;"
            &gt;

                &lt;option value=""&gt;-- Select Option --&lt;/option&gt;

                &lt;option value="7 days"&gt;
                    7 days
                &lt;/option&gt;

                &lt;option value="14 days"&gt;
                    14 days
                &lt;/option&gt;

                &lt;option value="28 days"&gt;
                    28 days
                &lt;/option&gt;

            &lt;/select&gt;

        &lt;/p&gt;

      &lt;/div&gt;
    `,

    type: "dropdown",

    correctAnswer: {
        feature: "An MFA registration policy",
        gracePeriod: "14 days"
    },

    correctAnswerText: `
        <p><strong>Correct Selections:</strong></p>

        <ul>
            <li>
                <strong>Feature:</strong>
                An MFA registration policy
            </li>

            <li>
                <strong>Grace period:</strong>
                14 days
            </li>
        </ul>

        <p>
            <strong>Explanation:</strong>
            Azure AD Identity Protection MFA registration policy
            prompts users to register for multifactor authentication.
            Users can postpone registration during a configurable
            grace period. The correct grace period is 14 days.
        </p>
    `
},
{
    id: 175,
    isCaseStudy: true,
    title: "Question 175",

    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.<br><br>

            The tenant contains the users shown in the following table:<br>

            User1 - None<br>
            User2 - None<br>
            User3 - User administrator<br>
            User4 - Privileged role administrator<br>
            User5 - Identity Governance Administrator<br><br>

            <strong>Litware Environment:</strong><br>
            • Litware has an AD DS forest named litware.com.
        `,

        "Problem Statements": `
            ADatum identifies the following issues:<br>

            • Multiple users in the sales department have up to five devices.<br>
            • A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.<br>
            • When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.<br>
            • Anyone in the organization can invite guest users, including other guests and non-administrators.<br>
            • The helpdesk spends too much time resetting user passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA) for all users.<br>
            • Configure an access review for an access package named Package1.<br>
            • Require admin approval for application access to organizational data.<br>
            • Sync the AD DS users and groups of litware.com with the Azure AD tenant.<br>
            • Ensure that only users that are assigned specific admin roles can invite guest users.<br>
            • Increase the maximum number of devices that can be joined or registered to Azure AD to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.<br>
            • Users must provide one authentication method to reset their password by using SSPR.<br>
            • Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.<br>
            • The principle of least privilege must be used.
        `
    },

    questionText: `
        You need to resolve the recent security incident issues.<br>
        What should you configure for each incident?
    `,

    type: "dragdrop",

    prompt: "Drag the appropriate policy types to the correct issues:",

    availableItems: [
        "An authentication method policy",
        "A Conditional Access policy",
        "A sign-in risk policy",
        "A user risk policy"
    ],

    dropTargets: [
        {
            id: "target1",
            label: "Leaked credentials",
            correctAnswer: "A user risk policy"
        },
        {
            id: "target2",
            label: "A sign-in from a suspicious browser",
            correctAnswer: "A sign-in risk policy"
        },
        {
            id: "target3",
            label: "Resources accessed from an anonymous IP address",
            correctAnswer: "A sign-in risk policy"
        }
    ],

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>Leaked credentials:</strong>
                A user risk policy
            </li>

            <li>
                <strong>A sign-in from a suspicious browser:</strong>
                A sign-in risk policy
            </li>

            <li>
                <strong>Resources accessed from an anonymous IP address:</strong>
                A sign-in risk policy
            </li>
        </ul>

        <p><strong>Explanation:</strong></p>

        <p>
            <strong>Leaked credentials</strong> indicate that a user's identity may
            have been compromised. A User Risk Policy is designed to detect and
            remediate compromised identities and typically requires a password reset.
        </p>

        <p>
            <strong>A sign-in from a suspicious browser</strong> represents a risky
            sign-in event. A Sign-In Risk Policy evaluates the risk associated with
            a specific authentication attempt and can require multifactor
            authentication or block access.
        </p>

        <p>
            <strong>Resources accessed from an anonymous IP address</strong> are also
            treated as risky sign-in events. Connections originating from anonymous
            VPNs, proxies, or Tor exit nodes are commonly evaluated through
            Sign-In Risk Policies and often result in MFA challenges.
        </p>
    `
},
{
    id: 176,

    type: "radio",

    title: "Question 176",

    questionText: `
        <p><strong>Question 176</strong></p>

        <p>
            A user named User1 receives an error message when attempting to access
            the Microsoft Defender for Cloud Apps portal.
        </p>

        <p>
            You need to identify the cause of the error.
        </p>

        <p>
            The solution must minimize administrative effort.
        </p>

        <p>
            What should you use?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Log Analytics",
        "Sign-in logs",
        "Audit logs",
        "Provisioning logs"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. Sign-in logs
        </p>

        <p>
            Sign-in logs provide detailed information about authentication
            attempts, including:
        </p>

        <ul>
            <li>User sign-in activity</li>
            <li>Failure reasons</li>
            <li>Conditional Access results</li>
            <li>Authentication requirements</li>
            <li>Risk detections</li>
            <li>Application access events</li>
        </ul>

        <p>
            Because User1 receives an error when attempting to access
            Microsoft Defender for Cloud Apps, reviewing the Microsoft Entra
            sign-in logs is the fastest and least administrative effort way
            to determine why the access attempt failed.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Log Analytics</strong> requires additional data
                collection and investigation and is not the primary place
                to identify a user sign-in failure.
            </li>

            <li>
                <strong>Audit logs</strong> record configuration changes and
                administrative activity rather than sign-in failures.
            </li>

            <li>
                <strong>Provisioning logs</strong> are used for identity
                provisioning and synchronization activities and would not
                normally identify a portal access error.
            </li>
        </ul>
    `
},
{
    id: 177,

    type: "radio",

    title: "Question 177",

    questionText: `
        <p><strong>Question 177</strong></p>

        <p>
            You have a Microsoft 365 E5 subscription that uses
            Microsoft Defender for Cloud Apps and Yammer.
        </p>

        <p>
            You need to prevent users from signing in to Yammer
            from high-risk locations.
        </p>

        <p>
            What should you do in the Microsoft Defender for Cloud Apps portal?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Create an access policy.",
        "Create an activity policy.",
        "Unsanction Yammer.",
        "Create an anomaly detection policy."
    ],

    correctAnswer: 0,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            A. Create an access policy
        </p>

        <p>
            Microsoft Defender for Cloud Apps access policies can be used
            together with Conditional Access App Control to monitor and control
            user sessions in real time.
        </p>

        <p>
            Access policies can restrict or block access based on:
        </p>

        <ul>
            <li>User location</li>
            <li>IP address</li>
            <li>User or device risk</li>
            <li>Session context</li>
            <li>Application usage</li>
        </ul>

        <p>
            Because the requirement is to prevent users from signing in to
            Yammer from high-risk locations, an access policy is the
            appropriate solution.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Activity policy</strong> is used to monitor and detect
                user activities after they occur, not to block sign-ins.
            </li>

            <li>
                <strong>Unsanction Yammer</strong> is not appropriate because
                Yammer is a Microsoft 365 application and the requirement is
                location-based access control.
            </li>

            <li>
                <strong>Anomaly detection policy</strong> detects unusual
                behavior but does not directly prevent sign-ins from
                high-risk locations.
            </li>
        </ul>

        <p>
            <strong>Reference:</strong><br>
            https://learn.microsoft.com/en-us/defender-cloud-apps/access-policy-aad
        </p>
    `
},
{
    id: 178,

    type: "radio",

    title: "Question 178",

    questionText: `
        <p><strong>Question 178</strong></p>

        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            All users have mobile phones and Windows 10 laptops.
        </p>

        <p>
            The users frequently work from remote locations that do not have
            Wi-Fi access or mobile phone connectivity.
        </p>

        <p>
            While working from the remote locations, the users connect their
            laptop to a wired network that has internet access.
        </p>

        <p>
            You plan to implement multi-factor authentication (MFA).
        </p>

        <p>
            Which MFA authentication method can the users use from the remote location?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "SMS",
        "Email",
        "Security questions",
        "A verification code from the Microsoft Authenticator app"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. A verification code from the Microsoft Authenticator app
        </p>

        <p>
            Users are working in locations that have:
        </p>

        <ul>
            <li>No mobile phone connectivity</li>
            <li>No Wi-Fi connectivity</li>
            <li>A wired internet connection available on their laptops</li>
        </ul>

        <p>
            SMS-based MFA requires mobile network access, therefore it will not work.
        </p>

        <p>
            Email is not a supported Microsoft Entra multifactor authentication
            verification method for standard MFA challenges.
        </p>

        <p>
            Security questions are primarily used for Self-Service Password Reset (SSPR)
            and not for MFA verification.
        </p>

        <p>
            Microsoft Authenticator supports offline Time-Based One-Time Passcodes (TOTP).
            A verification code can be generated even when the phone has no internet
            connection and no mobile signal.
        </p>

        <p>
            Therefore, the only authentication method that satisfies the requirement
            is a verification code generated by the Microsoft Authenticator app.
        </p>
    `
},
{
    id: 179,

    type: "radio",

    title: "Question 179",

    questionText: `
        <p><strong>Question 179</strong></p>

        <p>
            You have an Azure Active Directory (Azure AD) tenant.
        </p>

        <p>
            You open the risk detections report.
        </p>

        <p>
            Which risk detection type is classified as a user risk?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Impossible travel",
        "Anonymous IP address",
        "Malicious IP address",
        "Azure AD threat intelligence"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. Azure AD threat intelligence
        </p>

        <p>
            Microsoft Entra ID Protection classifies detections into two major categories:
        </p>

        <ul>
            <li>
                <strong>User risk</strong> – Indicates that a user identity is likely compromised.
            </li>

            <li>
                <strong>Sign-in risk</strong> – Indicates that a specific sign-in attempt is suspicious.
            </li>
        </ul>

        <p>
            <strong>Azure AD threat intelligence</strong> is classified as a
            <strong>User Risk</strong> detection because it indicates that the identity itself may have been compromised.
        </p>

        <p>
            The following are examples of sign-in risk detections:
        </p>

        <ul>
            <li>Impossible travel</li>
            <li>Anonymous IP address</li>
            <li>Malicious IP address</li>
        </ul>

        <p>
            These detections evaluate the risk associated with a specific authentication attempt, not the overall user identity.
        </p>

        <p>
            <strong>Reference:</strong><br>
            https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks
        </p>
    `
},
{
    id: 180,

    type: "radio",

    title: "Question 180",

    questionText: `
        <p><strong>Question 180</strong></p>

        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            All users have mobile phones and Windows 10 laptops.
        </p>

        <p>
            The users frequently work from remote locations that do not have
            Wi-Fi access or mobile phone connectivity.
        </p>

        <p>
            While working from the remote locations, the users connect their
            laptop to a wired network that has internet access.
        </p>

        <p>
            You plan to implement multi-factor authentication (MFA).
        </p>

        <p>
            Which MFA authentication method can the users use from the remote location?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "SMS",
        "Email",
        "Security questions",
        "A verification code from the Microsoft Authenticator app"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. A verification code from the Microsoft Authenticator app
        </p>

        <p>
            Users are working from locations that have:
        </p>

        <ul>
            <li>No Wi-Fi connectivity</li>
            <li>No mobile phone connectivity</li>
            <li>A wired internet connection available on the laptop</li>
        </ul>

        <p>
            SMS authentication requires a mobile network connection and therefore
            cannot be relied upon in this scenario.
        </p>

        <p>
            Email is not a standard Microsoft Entra MFA verification method
            for authentication challenges.
        </p>

        <p>
            Security questions are associated with Self-Service Password Reset
            (SSPR) and are not used as a primary MFA method.
        </p>

        <p>
            Microsoft Authenticator supports offline Time-Based One-Time Passcodes (TOTP).
            Verification codes can be generated even when the device has no
            mobile network connection and no Wi-Fi connection.
        </p>

        <p>
            Therefore, a verification code generated from the Microsoft
            Authenticator app is the only authentication method that satisfies
            the requirements.
        </p>
    `
},
{
    id: 181,

    type: "radio",

    title: "Question 181",

    questionText: `
        <p><strong>Question 181</strong></p>

        <p>
            You have an Azure AD tenant.
        </p>

        <p>
            You configure self-service password reset (SSPR)
            by using the following settings:
        </p>

        <ul>
            <li>
                Require users to register when signing in: Yes
            </li>

            <li>
                Number of methods required to reset: 1
            </li>
        </ul>

        <p>
            What is a valid authentication method available to users?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "An FIDO2 security token",
        "A mobile app code",
        "A Microsoft Teams chat",
        "A Windows Hello PIN"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. A mobile app code
        </p>

        <p>
            Self-Service Password Reset (SSPR) supports several authentication
            methods that can be used to verify a user's identity before
            resetting a password.
        </p>

        <p>
            One supported method is a verification code generated from the
            Microsoft Authenticator mobile application.
        </p>

        <p>
            A mobile app code is a valid SSPR authentication method and
            satisfies the configured requirement of requiring only one method
            to reset a password.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>FIDO2 security token</strong> is used for passwordless
                authentication and sign-in scenarios, but not as an SSPR
                authentication method.
            </li>

            <li>
                <strong>Microsoft Teams chat</strong> is not an SSPR
                verification method.
            </li>

            <li>
                <strong>Windows Hello PIN</strong> is used for local and
                passwordless sign-in and is not a supported method for SSPR
                verification.
            </li>
        </ul>

        <p>
            Therefore the valid authentication method available to users is
            a mobile app code generated by Microsoft Authenticator.
        </p>
    `
},
{
    id: 182,

    type: "dropdown",

    title: "Question 182: Hot Spot",

    questionText: `
        <p><strong>Question 182: Hot Spot</strong></p>

        <p>
            You have an Azure subscription.
        </p>

        <p>
            From Entitlement Management, you plan to create a catalog named
            Catalog1 that will contain a custom extension.
        </p>

        <p>
            What should you create first, and what should you use to distribute
            Catalog1?
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>

        <div style="
            margin-top:15px;
            background:#f9f9f9;
            padding:12px;
            border:1px solid #ddd;
            border-radius:4px;
        ">

            <table style="
                width:100%;
                border-collapse:collapse;
            ">

                <tbody>

                    <tr>
                        <td style="
                            padding:10px;
                            width:250px;
                            font-weight:600;
                        ">
                            First create:
                        </td>

                        <td style="padding:10px;">
                            <select
                                data-key="firstCreate"
                                style="
                                    padding:6px;
                                    min-width:260px;
                                "
                            >
                                <option value="">
                                    -- Select --
                                </option>

                                <option value="A managed account">
                                    A managed account
                                </option>

                                <option value="An Azure Automation account">
                                    An Azure Automation account
                                </option>

                                <option value="An Azure logic app">
                                    An Azure logic app
                                </option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding:10px;
                            font-weight:600;
                        ">
                            Distribute Catalog1 by using:
                        </td>

                        <td style="padding:10px;">
                            <select
                                data-key="distributionMethod"
                                style="
                                    padding:6px;
                                    min-width:260px;
                                "
                            >
                                <option value="">
                                    -- Select --
                                </option>

                                <option value="A playbook">
                                    A playbook
                                </option>

                                <option value="A workflow">
                                    A workflow
                                </option>

                                <option value="An access package">
                                    An access package
                                </option>
                            </select>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>
    `,

    correctAnswer: {
        firstCreate: "An Azure logic app",
        distributionMethod: "An access package"
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>First create:</strong>
                An Azure logic app
            </li>

            <li>
                <strong>Distribute Catalog1 by using:</strong>
                An access package
            </li>
        </ul>

        <p>
            <strong>Why "An Azure logic app" is correct:</strong>
        </p>

        <p>
            Custom extensions in Microsoft Entra Entitlement Management use
            Azure Logic Apps to automate tasks during access package assignment
            or removal processes.
        </p>

        <p>
            Before a custom extension can be added to a catalog, the Logic App
            that contains the automation workflow must exist.
        </p>

        <p>
            <strong>Why "An access package" is correct:</strong>
        </p>

        <p>
            Access packages are the mechanism used to deliver and manage access
            to resources through Entitlement Management.
        </p>

        <p>
            Users request access through an access package, and the catalog
            resources are delivered through that package.
        </p>
    `
},
{
    id: 183,

    type: "radio",

    title: "Question 183",

    questionText: `
        <p><strong>Question 183</strong></p>

        <p>
            You have an Azure AD tenant that contains the users shown in the following table.
        </p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q183-table1.jpg" alt="table 183" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        <p>
            You enable self-service password reset (SSPR) for all the users and configure
            SSPR to require security questions as the only authentication method.
        </p>

        <p>
            Which users must use security questions when resetting their password?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "User4 only",
        "User3 and User4 only",
        "User1 and User4 only",
        "User1, User3, and User4 only",
        "User1, User2, User3, and User4"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. User3 and User4 only
        </p>

        <p>
            Microsoft Entra ID applies a special password reset policy to certain
            administrator roles.
        </p>

        <p>
            Even if SSPR is configured to use only security questions,
            privileged administrator accounts are required to use stronger
            authentication methods and cannot rely solely on security questions.
        </p>

        <p>
            Standard users and users who are not subject to the administrator
            reset policy follow the configured SSPR methods.
        </p>

        <p>
            The administrator reset policy requires stronger verification
            mechanisms and overrides the normal SSPR configuration.
        </p>

        <p>
            Therefore, only User3 and User4 must use security questions when
            resetting their password under the configured scenario.
        </p>

        <p>
            <strong>Reference:</strong><br>
            https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#administrator-reset-policy-differences
        </p>
    `
},
{
    id: 184,

    type: "radio",

    title: "Question 184",

    questionText: `
        <p><strong>Question 184</strong></p>

        <p>
            You have an Azure Active Directory (Azure AD) tenant.
        </p>

        <p>
            You need to implement smart lockout with a lockout threshold
            of 10 failed sign-ins.
        </p>

        <p>
            What should you configure in the Azure AD admin center?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Authentication strengths",
        "Password protection",
        "User risk policy",
        "Sign-in risk policy"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. Password protection
        </p>

        <p>
            Azure AD Smart Lockout is configured through
            <strong>Password Protection</strong>.
        </p>

        <p>
            Smart Lockout helps protect accounts against brute-force attacks by:
        </p>

        <ul>
            <li>
                Tracking failed sign-in attempts
            </li>

            <li>
                Locking accounts after a specified threshold is exceeded
            </li>

            <li>
                Distinguishing familiar sign-ins from malicious attempts
            </li>

            <li>
                Automatically protecting accounts from password-guessing attacks
            </li>
        </ul>

        <p>
            To configure a lockout threshold such as
            <strong>10 failed sign-ins</strong>, you modify the
            Smart Lockout settings under Password Protection.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Authentication strengths</strong>
                control MFA requirements and authentication methods,
                not Smart Lockout settings.
            </li>

            <li>
                <strong>User risk policy</strong>
                evaluates compromised user accounts and remediation actions,
                not failed sign-in thresholds.
            </li>

            <li>
                <strong>Sign-in risk policy</strong>
                evaluates risky sign-in attempts and can trigger MFA or
                block access, but it does not configure Smart Lockout.
            </li>
        </ul>
    `
},
{
    id: 185,

    type: "radio",

    title: "Question 185",

    questionText: `
               <p>
            You configure a new Microsoft 365 tenant to use a default domain
            name of <code>contoso.com</code>.
        </p>

        <p>
            You need to ensure that you can control access to Microsoft 365
            resources by using Conditional Access policies.
        </p>

        <p>
            What should you do first?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Disable Security defaults",
        "Configure password protection for the Azure AD tenant",
        "Configure a multi-factor authentication (MFA) registration policy",
        "Disable the User consent settings"
    ],

    correctAnswer: 0,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            A. Disable Security defaults
        </p>

        <p>
            Security defaults and Conditional Access cannot be used together.
        </p>

        <p>
            When Security defaults are enabled, Microsoft Entra ID manages
            baseline security controls automatically and Conditional Access
            policies are unavailable.
        </p>

        <p>
            Before you can create and manage Conditional Access policies,
            Security defaults must be disabled.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Password protection</strong> controls password bans,
                lockout behavior, and password hygiene. It does not enable
                Conditional Access.
            </li>

            <li>
                <strong>MFA registration policy</strong> helps users register
                for MFA but is not a prerequisite for Conditional Access.
            </li>

            <li>
                <strong>User consent settings</strong> control application
                consent behavior and are unrelated to Conditional Access
                availability.
            </li>
        </ul>

        <p>
            Therefore, the first action required is to disable
            <strong>Security defaults</strong>.
        </p>
    `
},
{
    id: 186,

    type: "radio",

    title: "Question 186",

    questionText: `
        
        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            An on-premises Active Directory domain is configured to sync with
            the Azure AD tenant. The domain contains the servers shown in the following table.
        </p>

<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q186-table1.jpg" alt="table 186" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
               <p>
            The domain controllers are prevented from communicating to the internet.
        </p>

        <p>
            You implement Azure AD Password Protection on Server1 and Server2.
        </p>

        <p>
            You deploy a new server named Server4 that runs Windows Server 2022.
        </p>

        <p>
            You need to ensure that Azure AD Password Protection will continue
            to work if a single server fails.
        </p>

        <p>
            What should you implement on Server4?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Azure AD Connect",
        "Azure AD Application Proxy",
        "Password Change Notification Service (PCNS)",
        "The Azure AD Password Protection proxy service"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. The Azure AD Password Protection proxy service
        </p>

        <p>
            Azure AD Password Protection for on-premises Active Directory uses
            a proxy service that communicates with Microsoft Entra ID and
            distributes password policy information to domain controllers.
        </p>

        <p>
            Microsoft recommends deploying multiple Password Protection proxy
            servers to provide redundancy and high availability.
        </p>

        <p>
            Because the domain controllers cannot communicate directly with the
            internet, the proxy servers act as intermediaries between the
            on-premises environment and Microsoft Entra ID.
        </p>

        <p>
            Deploying the Azure AD Password Protection proxy service on Server4
            ensures that password protection continues to function if one of
            the existing proxy servers becomes unavailable.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Azure AD Connect</strong> is used for directory
                synchronization and does not provide Password Protection proxy
                functionality.
            </li>

            <li>
                <strong>Azure AD Application Proxy</strong> publishes internal
                applications externally and is unrelated to password protection.
            </li>

            <li>
                <strong>Password Change Notification Service (PCNS)</strong>
                is used with Microsoft Identity Manager password synchronization
                and is not part of Azure AD Password Protection.
            </li>
        </ul>

        <p>
            <strong>Reference:</strong><br>
            https://learn.microsoft.com/en-us/entra/identity/authentication/concept-password-ban-bad-on-premises#how-microsoft-entra-password-protection-works
        </p>
    `
},
{
    id: 187,

    type: "radio",

    title: "Question 187",

    questionText: `
         <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            All users have mobile phones and Windows 10 laptops.
        </p>

        <p>
            The users frequently work from remote locations that do not have
            Wi-Fi access or mobile phone connectivity.
        </p>

        <p>
            While working from the remote locations, the users connect their
            laptops to a wired network that has internet access.
        </p>

        <p>
            You plan to implement multi-factor authentication (MFA).
        </p>

        <p>
            Which MFA authentication method can the users use from the remote location?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Voice",
        "Email",
        "Security questions",
        "A verification code from the Microsoft Authenticator app"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. A verification code from the Microsoft Authenticator app
        </p>

        <p>
            The users are working in locations that have:
        </p>

        <ul>
            <li>No Wi-Fi access</li>
            <li>No mobile phone connectivity</li>
            <li>A wired internet connection available on the laptop</li>
        </ul>

        <p>
            Voice-based verification requires telephone connectivity and
            therefore cannot be relied upon in this scenario.
        </p>

        <p>
            Email is not a standard Microsoft Entra MFA verification method.
        </p>

        <p>
            Security questions are used for Self-Service Password Reset (SSPR)
            and not for Azure MFA authentication.
        </p>

        <p>
            Microsoft Authenticator supports offline Time-Based One-Time
            Passwords (TOTP).
        </p>

        <p>
            The app can generate verification codes even when the mobile device
            has no cellular signal and no internet connection.
        </p>

        <p>
            Therefore, a verification code from Microsoft Authenticator is the
            only authentication method that satisfies the requirements.
        </p>
    `
},
{
    id: 188,

    type: "dropdown",

    title: "Question 188: Hot Spot",

    questionText: `
	<p>You have an Azure subscription that contains the resources shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q188-table1.jpg" alt="q188_table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
         <p>
            You need to configure access to Vault1.
        </p>

        <p>
            The solution must meet the following requirements:
        </p>

        <ul>
            <li>
                Ensure that User1 can manage and create keys in Vault1.
            </li>

            <li>
                Ensure that User2 can access a certificate stored in Vault1.
            </li>

            <li>
                Use the principle of least privilege.
            </li>
        </ul>

        <p>
            Which role should you assign to each user?
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>

        <div style="
            margin-top:15px;
            background:#f9f9f9;
            padding:12px;
            border:1px solid #ddd;
            border-radius:4px;
        ">
            <table style="
                width:100%;
                border-collapse:collapse;
            ">
                <tbody>

                    <tr>
                        <td style="
                            padding:10px;
                            width:220px;
                            font-weight:600;
                        ">
                            User1:
                        </td>

                        <td style="padding:10px;">
                            <select
                                data-key="user1Role"
                                style="
                                    padding:6px;
                                    min-width:260px;
                                "
                            >
                                <option value="">
                                    -- Select --
                                </option>

                                <option value="Key Vault Certificates Officer">
                                    Key Vault Certificates Officer
                                </option>

                                <option value="Key Vault Crypto Officer">
                                    Key Vault Crypto Officer
                                </option>

                                <option value="Key Vault Secrets Officer">
                                    Key Vault Secrets Officer
                                </option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding:10px;
                            font-weight:600;
                        ">
                            User2:
                        </td>

                        <td style="padding:10px;">
                            <select
                                data-key="user2Role"
                                style="
                                    padding:6px;
                                    min-width:260px;
                                "
                            >
                                <option value="">
                                    -- Select --
                                </option>

                                <option value="Key Vault Certificates Officer">
                                    Key Vault Certificates Officer
                                </option>

                                <option value="Key Vault Crypto Officer">
                                    Key Vault Crypto Officer
                                </option>

                                <option value="Key Vault Secrets Officer">
                                    Key Vault Secrets Officer
                                </option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    `,

    correctAnswer: {
        user1Role: "Key Vault Crypto Officer",
        user2Role: "Key Vault Certificates Officer"
    },

    correctAnswerText: `
        <p>
            <strong>Correct Answers:</strong>
        </p>

        <ul>
            <li>
                <strong>User1:</strong>
                Key Vault Crypto Officer
            </li>

            <li>
                <strong>User2:</strong>
                Key Vault Certificates Officer
            </li>
        </ul>

        <p>
            <strong>User1 – Key Vault Crypto Officer</strong>
        </p>

        <p>
            This role allows management of cryptographic keys, including
            creating, deleting, updating, and using keys.
        </p>

        <p>
            It satisfies the requirement that User1 must manage and create
            keys in Vault1 while maintaining least privilege.
        </p>

        <p>
            <strong>User2 – Key Vault Certificates Officer</strong>
        </p>

        <p>
            This role is designed for certificate management operations
            such as creating, importing, renewing, and managing certificates.
        </p>

        <p>
            It satisfies the requirement that User2 must access a certificate
            stored in Vault1 while following the principle of least privilege.
        </p>
    `
},
{
    id: 189,

    type: "checkbox",

    title: "Question 189",

    questionText: `
        
        <p>
            You have an Azure AD tenant that has multi-factor authentication (MFA)
            enforced and self-service password reset (SSPR) enabled.
        </p>

        <p>
            You enable combined registration in interrupt mode.
        </p>

        <p>
            You create a new user named User1.
        </p>

        <p>
            Which two authentication methods can User1 use to complete the
            combined registration process?
        </p>

        <p>
            <em>Each correct answer presents a complete solution.</em>
        </p>
    `,

    prompt: "Select two correct options:",

    options: [
        "A FIDO2 security key",
        "A hardware token",
        "A one-time passcode email",
        "Windows Hello for Business",
        "The Microsoft Authenticator app"
    ],

    correctAnswer: [0, 4],

    correctAnswerText: `
        <p>
            <strong>Correct Answers:</strong>
        </p>

        <ul>
            <li>
                A. A FIDO2 security key
            </li>

            <li>
                E. The Microsoft Authenticator app
            </li>
        </ul>

        <p>
            Combined registration allows users to register authentication
            methods for both Azure AD Multi-Factor Authentication (MFA)
            and Self-Service Password Reset (SSPR) in a single registration
            experience.
        </p>

        <p>
            <strong>A. A FIDO2 security key</strong><br>
            Users can use a FIDO2 security key, which is a hardware device that
            provides strong authentication, typically in the form of a USB key
            or a biometric-enabled security key.
        </p>

        <p>
            <strong>E. The Microsoft Authenticator app</strong><br>
            Users can use the Microsoft Authenticator app, which supports
            multi-factor authentication and can provide either push
            notifications or verification codes during authentication.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                Hardware tokens are not supported through the standard
                combined registration workflow.
            </li>

            <li>
                One-time passcode email is not a supported MFA registration
                method.
            </li>

            <li>
                Windows Hello for Business is used for passwordless device
                sign-in and is not one of the authentication methods users
                register during combined registration.
            </li>
        </ul>
    `
},
{
    id: 190,

    type: "dragdrop",

    title: "Question 190: Hot Spot",

    questionText: `
        
        <p>
            You have an Azure AD tenant that contains a user named Admin1.
        </p>

        <p>
            Admin1 uses the
            <strong>Require password change for high-risk users</strong>
            policy template to create a new Conditional Access policy.
        </p>

        <p>
            Who is included and excluded by default in the policy assignment?
        </p>

        <p>
            To answer, drag the appropriate options to the correct target.
        </p>
    `,

    prompt: "Drag the appropriate options to the correct targets.",

    availableItems: [
        "Admin1",
        "All guest and external users",
        "All users",
        "Directory roles",
        "None"
    ],

    dropTargets: [
        {
            id: "include",
            label: "Include",
            correctAnswer: "All users"
        },
        {
            id: "exclude",
            label: "Exclude",
            correctAnswer: "None"
        }
    ],

    correctAnswerText: `
        <p>
            <strong>Correct Answers:</strong>
        </p>

        <ul>
            <li>
                <strong>Include:</strong>
                All users
            </li>

            <li>
                <strong>Exclude:</strong>
                None
            </li>
        </ul>

        <p>
            The
            <strong>Require password change for high-risk users</strong>
            Conditional Access template is designed to protect all users in the
            organization.
        </p>

        <p>
            By default, the template includes
            <strong>All users</strong>
            to ensure all accounts are evaluated when a high-risk condition
            is detected.
        </p>

        <p>
            The default configuration excludes
            <strong>None</strong>,
            meaning there are no exceptions and every included user is subject
            to the policy requirements.
        </p>

        <p>
            This broad scope helps ensure that high-risk accounts are required
            to change their password and recover access securely.
        </p>
    `
},
{
    id: 191,

    type: "radio",

    title: "Question 191",

    questionText: `
       
        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            All users have mobile phones and Windows 10 laptops.
        </p>

        <p>
            The users frequently work from remote locations that do not have
            Wi-Fi access or mobile phone connectivity.
        </p>

        <p>
            While working from the remote locations, the users connect their
            laptops to a wired network that has internet access.
        </p>

        <p>
            You plan to implement multi-factor authentication (MFA).
        </p>

        <p>
            Which MFA authentication method can the users use from the remote location?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Voice",
        "Email",
        "Security questions",
        "Windows Hello for Business"
    ],

    correctAnswer: 3,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            D. Windows Hello for Business
        </p>

        <p>
            Windows Hello for Business provides strong authentication by using
            device-based credentials such as:
        </p>

        <ul>
            <li>Facial recognition</li>
            <li>Fingerprint recognition</li>
            <li>A PIN protected by hardware security</li>
        </ul>

        <p>
            Windows Hello for Business can be used without mobile network
            connectivity and does not require Wi-Fi access on a phone.
        </p>

        <p>
            Because the users have Windows 10 laptops available and can access
            resources through a wired connection, Windows Hello for Business
            remains a valid authentication method in the remote locations.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>Voice</strong> requires telephone connectivity,
                which is unavailable in the remote locations.
            </li>

            <li>
                <strong>Email</strong> is not a Microsoft Entra MFA
                authentication method.
            </li>

            <li>
                <strong>Security questions</strong> are used primarily for
                Self-Service Password Reset (SSPR), not MFA.
            </li>
        </ul>
    `
},
{
    id: 192,

    type: "radio",

    title: "Question 192",

    questionText: `
       
        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            You currently allow email clients that use Basic authentication
            to connect to Microsoft Exchange Online.
        </p>

        <p>
            You need to ensure that users can connect to Exchange Online
            only from email clients that use Modern authentication protocols.
        </p>

        <p>
            What should you implement?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "A conditional access policy in Azure AD",
        "A compliance policy in Microsoft Intune",
        "An OAuth policy in Microsoft Defender for Cloud Apps",
        "An application control profile in Microsoft Intune"
    ],

    correctAnswer: 0,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            A. A conditional access policy in Azure AD
        </p>

        <p>
            Conditional Access policies can be used to block legacy
            authentication protocols and require the use of Modern
            Authentication for Microsoft 365 services such as
            Exchange Online.
        </p>

        <p>
            Modern Authentication uses standards such as:
        </p>

        <ul>
            <li>OAuth 2.0</li>
            <li>OpenID Connect</li>
            <li>SAML</li>
        </ul>

        <p>
            By creating a Conditional Access policy that blocks
            legacy authentication clients, users are forced to use
            Modern Authentication protocols when connecting to
            Exchange Online.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>A compliance policy in Microsoft Intune</strong>
                evaluates device compliance and does not control
                Exchange Online authentication protocols.
            </li>

            <li>
                <strong>An OAuth policy in Microsoft Defender for Cloud Apps</strong>
                is not used to enforce Modern Authentication for
                Exchange Online access.
            </li>

            <li>
                <strong>An application control profile in Microsoft Intune</strong>
                manages application behavior on managed devices and
                does not block legacy authentication.
            </li>
        </ul>

        <p>
            Therefore, implementing a Conditional Access policy is
            the correct solution.
        </p>
    `
},
{
    id: 193,

    type: "radio",

    title: "Question 193",

    questionText: `
        
        <p>
            You plan to deploy a new Azure AD tenant.
        </p>

        <p>
            Which multifactor authentication (MFA) method will be enabled by default
            for the tenant?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Microsoft Authenticator",
        "SMS",
        "Voice call",
        "Email OTP"
    ],

    correctAnswer: 0,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            A. Microsoft Authenticator
        </p>

        <p>
            In Microsoft Entra ID (formerly Azure AD), the
            <strong>Microsoft Authenticator app</strong>
            is enabled by default as an available authentication method for
            multifactor authentication.
        </p>

        <p>
            Microsoft Authenticator supports:
        </p>

        <ul>
            <li>Push notifications</li>
            <li>One-time verification codes</li>
            <li>Passwordless sign-in</li>
            <li>Number matching for MFA approval</li>
        </ul>

        <p>
            Microsoft recommends Microsoft Authenticator as the primary MFA
            authentication method because it provides stronger security than
            SMS or voice-based authentication.
        </p>

        <p>
            <strong>Why the other options are incorrect:</strong>
        </p>

        <ul>
            <li>
                <strong>SMS</strong> is available when enabled, but it is not
                the default MFA method.
            </li>

            <li>
                <strong>Voice call</strong> is an optional MFA method and must
                be explicitly enabled.
            </li>

            <li>
                <strong>Email OTP</strong> is not a standard Azure AD MFA
                authentication method for tenant users.
            </li>
        </ul>

        <p>
            <strong>Reference:</strong><br>
            https://learn.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-azure-mfa
        </p>
    `
},
{
    id: 194,

    type: "matrix",

    title: "Question 194: Hot Spot",

    questionText: `
        
        <p>
            You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1 and the users shown in the following table.<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q194_table1.jpg" alt="q194 table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        </p>

        <p>
            The users have the devices shown in the following table.
        </p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q194_table2.jpg" alt="q194 table2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        <p>
            You create the following two Conditional Access policies:
        </p>

        <p>
            <strong>Name:</strong> CAPolicy1<br>
            <strong>Assignments</strong><br>
            Users or workload identities: Group1<br>
            Cloud apps or actions: Office 365 SharePoint Online<br>
            Conditions:<br>
            Filter for devices: Exclude filtered devices from the policy<br>
            Rule syntax: device.displayName -startsWith "Device"<br>
            Access controls:<br>
            Grant: Block access<br>
            Session: 0 controls selected<br>
            Enable policy: On
        </p>

        <p>
            <strong>Name:</strong> CAPolicy2<br>
            <strong>Assignments</strong><br>
            Users or workload identities: Group2<br>
            Cloud apps or actions: Office 365 SharePoint Online<br>
            Conditions: 0 conditions selected<br>
            Access controls:<br>
            Grant: Grant access<br>
            Require multifactor authentication<br>
            Session: 0 controls selected<br>
            Enable policy: On
        </p>

        <p>
            All users confirm that they can successfully authenticate using MFA.
        </p>

        <p>
            For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>
    `,

    rows: [
        {
            id: "stmt1",
            label: "User1 can access Site1 from Device1."
        },

        {
            id: "stmt2",
            label: "User2 can access Site1 from Device2."
        },

        {
            id: "stmt3",
            label: "User3 can access Site1 from Device3."
        }
    ],

    columns: [
        {
            value: 0,
            label: "Yes"
        },

        {
            value: 1,
            label: "No"
        }
    ],

    correctAnswer: {
        stmt1: 0,
        stmt2: 0,
        stmt3: 0
    },

    correctAnswerText: `
        <p><strong>Correct Answers:</strong></p>

        <ul>
            <li>
                <strong>User1 can access Site1 from Device1:</strong> Yes
            </li>

            <li>
                <strong>User2 can access Site1 from Device2:</strong> Yes
            </li>

            <li>
                <strong>User3 can access Site1 from Device3:</strong> Yes
            </li>
        </ul>

        <p>
            CAPolicy1 blocks access only for users in Group1 when the device does not match the exclusion filter.
        </p>

        <p>
            CAPolicy2 grants access to users in Group2 provided they successfully complete MFA authentication.
        </p>

        <p>
            Because all users can successfully perform MFA and the device conditions permit access in the described scenarios, User1, User2, and User3 can access Site1 from their respective devices.
        </p>
    `
},
{
    id: 195,

    type: "radio",

    title: "Question 195",

    questionText: `
        
        <p>
            You have a Microsoft 365 E5 subscription that contains three users
            named User1, User2, and User3 and a Microsoft SharePoint Online site
            named Site1.
        </p>

        <p>
            The subscription contains the devices shown in the following table.
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q195_table1.jpg" alt="q195 table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
        </p>

        <p>
            The users sign in to the devices as shown in the following table.
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q195_table2.jpg" alt="q195 table2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
        </p>

        <p>
            You have a Conditional Access policy that has the following settings:
        </p>

        <p>
            <strong>Name:</strong> CA1
        </p>

        <p>
            <strong>Assignments</strong><br>
            Users and groups: User1, User2, User3<br>
            Cloud apps or actions: SharePoint - Site1
        </p>

        <p>
            <strong>Access controls</strong><br>
            Session: Use app enforced restrictions
        </p>

        <p>
            From the SharePoint admin center, you configure
            <strong>Access control for unmanaged devices</strong>
            to allow limited, web-only access.
        </p>

        <p>
            Which users will have full access to Site1?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "User1 only",
        "User2 only",
        "User3 only",
        "User1 and User2 only",
        "User1, User2, and User3"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. User2 only
        </p>

        <p>
            The Conditional Access policy uses
            <strong>Use app enforced restrictions</strong>.
        </p>

        <p>
            SharePoint is configured to allow only limited web access from
            unmanaged devices.
        </p>

        <p>
            Therefore, users accessing SharePoint from unmanaged devices receive
            restricted access rather than full access.
        </p>

        <p>
            User2 is the only user who satisfies the conditions required for
            full access to Site1.
        </p>

        <p>
            As a result, the correct answer is:
        </p>

        <p>
            <strong>User2 only</strong>.
        </p>
    `
},
{
    id: 196,

    type: "radio",

    title: "Question 196",

    questionText: `
        
        <p>
            You have an Azure AD tenant named contoso.com that contains the resources shown in the following table.
        </p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q196_table1.jpg" alt="q196 table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        <div style="margin-bottom:15px;text-align:center;">
            <img
                src="images/q196_table1.jpg"
                alt="Question 196 Resources Table"
                style="width:100%;max-width:550px;heightAdmin1 can enable Security defaults for contoso.com.
        </p>

        <p>
            What should you do first?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Delete Package1.",
        "Delete CAPolicy1.",
        "Assign Admin1 the Authentication Administrator role for AU1.",
        "Configure Identity Governance."
    ],

    correctAnswer: 1,

    correctAnswerText: `
        <p>
            <strong>Correct Answer:</strong>
            B. Delete CAPolicy1.
        </p>

        <p>
            The correct answer is B. Delete CAPolicy1.
        </p>

        <p>
            To enable Security defaults for contoso.com, Admin1 must be assigned at least the Security Administrator role.
        </p>

        <p>
            However, this role is not available in the list of roles for AU1, which is the only authentication method for contoso.com.
        </p>

        <p>
            This is because AU1 has a Conditional Access policy named CAPolicy1 that blocks legacy authentication protocols.
        </p>

        <p>
            Security defaults also block legacy authentication protocols, so they cannot be enabled if there is an existing Conditional Access policy that does the same.
        </p>

        <p>
            Therefore, to enable Security defaults, Admin1 must first delete CAPolicy1 from AU1.
        </p>

        <p>
            This will allow Admin1 to sign in to contoso.com using a legacy authentication protocol and then assign themselves the Security Administrator role.
        </p>

        <p>
            After that, Admin1 can enable Security defaults for contoso.com.
        </p>
    `
},
{
    id: 197,

    type: "dropdown",

    title: "Question 197",

    questionText: `
        <p>
            You have an Azure subscription that is linked to an Azure AD tenant named contoso.com. The subscription contains a group named Group1 and a virtual machine named VM1.
        </p>

        <p>
            You need to meet the following requirements:
        </p>

        <ul>
            <li>Enable a system-assigned managed identity for VM1.</li>
            <li>Add VM1 to Group1.</li>
        </ul>

        <p>
            How should you complete the PowerShell script? To answer, select the appropriate cmdlets in the answer area.
        </p>

        <p>
            Each cmdlet may be used once, more than once, or not at all.
        </p>

        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
            <tbody>
                <tr>
                    <td style="padding:8px;">
                        $vm =
                    </td>

                    <td style="padding:8px;">
                        <select data-key="cmdlet1">
                            <option value="">-- Select --</option>
                            <option value="Get-AzADGroup">Get-AzADGroup</option>
                            <option value="Get-AzADServicePrincipal">Get-AzADServicePrincipal</option>
                            <option value="Get-AzVM">Get-AzVM</option>
                            <option value="Update-AzADServicePrincipal">Update-AzADServicePrincipal</option>
                            <option value="Update-AzVM">Update-AzVM</option>
                        </select>
                    </td>

                    <td>
                        -ResourceGroupName myResourceGroup -Name vm1
                    </td>
                </tr>

                <tr>
                    <td colspan="3" style="padding:8px;">
                        Update-AzVM -ResourceGroupName myResourceGroup -VM $vm -IdentityType SystemAssigned
                    </td>
                </tr>

                <tr>
                    <td style="padding:8px;">
                        $displayname =
                    </td>

                    <td style="padding:8px;">
                        <select data-key="cmdlet2">
                            <option value="">-- Select --</option>
                            <option value="Get-AzADGroup">Get-AzADGroup</option>
                            <option value="Get-AzADServicePrincipal">Get-AzADServicePrincipal</option>
                            <option value="Get-AzVM">Get-AzVM</option>
                            <option value="Update-AzADServicePrincipal">Update-AzADServicePrincipal</option>
                            <option value="Update-AzVM">Update-AzVM</option>
                        </select>
                    </td>

                    <td>
                        -displayname "vm1"
                    </td>
                </tr>

                <tr>
                    <td colspan="3" style="padding:8px;">
                        $group = Get-AzADGroup -searchstring "group1"
                    </td>
                </tr>

                <tr>
                    <td colspan="3" style="padding:8px;">
                        Add-AzureADGroupMember -ObjectId $group.id -RefObjectId $displayname.id
                    </td>
                </tr>
            </tbody>
        </table>
    `,

    correctAnswer: {
        cmdlet1: "Get-AzVM",
        cmdlet2: "Get-AzADServicePrincipal"
    },

    correctAnswerText: `
        Answer:

        Get-AzVM

        Get-AzADServicePrincipal
    `
},
{
    id: 198,

    type: "radio",

    title: "Question 198",

    questionText: `
        <p>
            You have an Azure AD tenant.
        </p>

        <p>
            You deploy a new enterprise application named App1.
        </p>

        <p>
            When users attempt to provide App1 with access to the tenant, the attempt fails.
        </p>

        <p>
            You need to ensure that the users can request admin consent for App1.
            The solution must follow the principle of least privilege.
        </p>

        <p>
            What should you do first?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Enable admin consent requests for the tenant.",
        "Designate a reviewer of admin consent requests for the tenant.",
        "From the Permissions settings of App1, grant App1 admin consent for the tenant.",
        "Create a Conditional Access policy for App1."
    ],

    correctAnswer: 0,

    correctAnswerText: `
        To ensure that users can request admin consent for App1 in your Azure AD tenant, you should first enable admin consent requests for the tenant.

        Enabling admin consent requests allows users to initiate the process of requesting admin consent for applications that require it.

        By default, users do not have the ability to grant admin consent for applications.

        Enabling this feature ensures that users can request admin consent for App1 without having to rely on an administrator to initiate the process.
    `
},
{
    id: 199,

    type: "radio",

    title: "Question 199",

    questionText: `
        <p>
            Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
        </p>

        <p>
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
        </p>

        <p>
            You have a Microsoft 365 tenant.
        </p>

        <p>
            All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.
        </p>

        <p>
            Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.
        </p>

        <p>
            You need to block the users automatically when they report an MFA request that they did not initiate.
        </p>

        <p>
            Solution: From the Azure Active Directory admin center, you configure the Block/unblock users settings for multi-factor authentication (MFA).
        </p>

        <p>
            Does this meet the goal?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Yes",
        "No"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        Report suspicious activity and the legacy Fraud Alert implementation can operate in parallel. You can keep your tenant-wide Fraud Alert functionality in place while you start to use Report suspicious activity with a targeted test group.

        If Fraud Alert is enabled with Automatic Blocking, and Report suspicious activity is enabled, the user will be added to the blocklist and set as high-risk and in-scope for any other policies configured.

        These users will need to be removed from the blocklist and have their risk remediated to enable them to sign in with MFA.

        https://learn.microsoft.com/en-us/entra/identity/authentication/howto-mfa-mfasettings#report-suspicious-activity-and-fraud-alert
    `
},
{
    id: 289,
    isCaseStudy: true,

    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User Administrator<br>
            User4 - Privileged Role Administrator<br>
            User5 - Identity Governance Administrator
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure an access review for Package1.<br>
            • Require admin approval for application access.<br>
            • Sync litware.com users and groups.<br>
            • Limit guest invitations.<br>
            • Increase Azure AD device limit to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and have a grace period option.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods include:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator app
        `
    },

    type: "radio",

    title: "Case Study - Application Access",

    questionText:
        "You need implement the planned changes for application access to organizational data. What should you configure?",

    prompt: "Select the correct option:",

    options: [
        "authentication methods",
        "the User consent settings",
        "access packages",
        "an application proxy"
    ],

    correctAnswer: 2,

    correctAnswerText: `
Correct Answer:
access packages

Explanation:

To require approval before users receive access to organizational data, configure an Access Package in Microsoft Entra Identity Governance.

Path:

Azure AD
→ Identity Governance
→ Access Packages
→ New Access Package

Add the application as a resource and configure approval settings for requests.

This allows application access requests to be approved before access is granted.
`
},
{
    id: 300,

    type: "radio",

    title: "Question 300",

    questionText: `
        <p>
            Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
        </p>

        <p>
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
        </p>

        <p>
            You have an Amazon Web Services (AWS) account, a Google Workspace subscription, and a GitHub account. You deploy an Azure subscription and enable Microsoft 365 Defender.
        </p>

        <p>
            You need to ensure that you can monitor OAuth authentication requests by using Microsoft Defender for Cloud Apps.
        </p>

        <p>
            Solution: From the Microsoft 365 Defender portal, you add the Amazon Web Services app connector.
        </p>

        <p>
            Does this meet the goal?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Yes",
        "No"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        Correct Answer. B, No. The way to manage those third party apps is through the Microsoft Defender for Cloud Apps -> App Connector. If not, there is no way to detect and investigate them.
https://learn.microsoft.com/en-us/defender-cloud-apps/manage-app-permissions

    `
},
{
    id: 301,

    type: "radio",

    title: "Question 301",

    questionText: `
        <p>
            Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
        </p>

        <p>
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
        </p>

        <p>
            You have an Amazon Web Services (AWS) account, a Google Workspace subscription, and a GitHub account. You deploy an Azure subscription and enable Microsoft 365 Defender.
        </p>

        <p>
            You need to ensure that you can monitor OAuth authentication requests by using Microsoft Defender for Cloud Apps.
        </p>

        <p>
            Solution: From the Microsoft 365 Defender portal, you add the Amazon Web Services app connector.
        </p>

        <p>
            Does this meet the goal?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Yes",
        "No"
    ],

    correctAnswer: 1,

    correctAnswerText: `
        Reference:
        https://learn.microsoft.com/en-us/defender-cloud-apps/manage-app-permissions
    `
},
{
    id: 302,

    type: "radio",

    title: "Question 302",

    questionText: `
        <p>
            Your company purchases a Microsoft 365 E5 subscription.
        </p>

        <p>
            A user named User1 is assigned the Security Administrator role.
        </p>

        <p>
            You need to ensure that User1 can create Microsoft Defender for Cloud Apps session policies.
        </p>

        <p>
            What should you do first?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Create a Conditional Access policy and select Require app protection policy.",
        "Create a Conditional Access policy and select Use Conditional Access App Control.",
        "Assign the Cloud Application Administrator role to User1.",
        "Assign the Cloud App Security Administrator role to User1."
    ],

    correctAnswer: 1,

    correctAnswerText: `
        Answer . B. Create a Conditional Access policy and select Use Conditional Access App Control.

        "The relevant apps should be deployed with Conditional Access App Control"

        "Make sure you've configured your IdP solution to work with Defender for Cloud Apps, as follows:

        - For Azure AD Conditional Access, see Configure integration with Azure AD
        - For other IdP solutions, see Configure integration with other IdP solutions"

        References:
        https://learn.microsoft.com/en-us/defender-cloud-apps/session-policy-aad#prerequisites-to-using-session-policies
    `
},
{
    id: 303,
    type: "radio",
    title: "Question 303",
    questionText: `
        <p>You have an Azure subscription that contains a user named User1.</p>
        <p>The App registration settings for the Azure AD tenant are configured as shown in the following exhibit.</p>
        <div style="margin-bottom: 15px; text-align: center;">
            <img src="images/q303_exhibit1.jpg" alt="q303 app registration" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
        </div>
    `,
    prompt: "Select the correct option:",
    options: [
        "Application Developer",
        "Cloud App Security Administrator",
        "Cloud Application Administrator",
        "Application Administrator"
    ],
    correctAnswer: 0,
    correctAnswerText: `
        Assign the Application Developer role to grant the ability to create application registrations when the Users can register applications setting is set to No. This role also grants permission to consent on one's own behalf when the Users can consent to apps accessing company data on their behalf setting is set to No.

        https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles#grant-individual-permissions-to-create-and-consent-to-applications-when-the-default-ability-is-disabled
    `
},
{
    id: 304,

    type: "dropdown",

    title: "Question 304",

    questionText: `
        <p>
            You have an Azure subscription that contains the resources shown in the following table.
        </p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q304_table1.jpg" alt="q304 table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
        <p>
            The subscription contains the virtual machines shown in the following table.
        </p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q304_table2.jpg" alt="q304 table2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
        <p>
            Which identities can be assigned the Owner role for RG1, and to which virtual machines can you assign Managed2?
        </p>

        <p>
            To answer, select the appropriate options in the answer area.
        </p>

        <p>
            <em>NOTE: Each correct selection is worth one point.</em>
        </p>

        <div style="margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">

            <div style="display:flex;align-items:center;gap:12px;margin-bottom:15px;">
                <label style="font-weight:600;min-width:220px;">
                    Identities with Owner role:
                </label>

                <select data-key="ownerRole" style="padding:6px;width:380px;">
                    <option value="">-- Select --</option>
                    <option value="Managed1 only">Managed1 only</option>
                    <option value="Managed1, VM1, and VM3 only">Managed1, VM1, and VM3 only</option>
                    <option value="Managed1, Managed2, and VM1 only">Managed1, Managed2, and VM1 only</option>
                    <option value="Managed1, Managed2, VM1, and VM2 only">Managed1, Managed2, VM1, and VM2 only</option>
                    <option value="Managed1, Managed2, VM1, VM2, and VM3 only">Managed1, Managed2, VM1, VM2, and VM3 only</option>
                </select>
            </div>

            <div style="display:flex;align-items:center;gap:12px;">
                <label style="font-weight:600;min-width:220px;">
                    Virtual machines assigned to Managed2:
                </label>

                <select data-key="managed2Assignment" style="padding:6px;width:380px;">
                    <option value="">-- Select --</option>
                    <option value="VM4 only">VM4 only</option>
                    <option value="VM2 and VM4 only">VM2 and VM4 only</option>
                    <option value="VM1, VM2, and VM4 only">VM1, VM2, and VM4 only</option>
                    <option value="VM1, VM2, VM3, and VM4">VM1, VM2, VM3, and VM4</option>
                </select>
            </div>

        </div>
    `,

    correctAnswer: {
        ownerRole: "Managed1, Managed2, VM1, VM2, and VM3 only",
        managed2Assignment: "VM1, VM2, VM3, and VM4"
    },

    correctAnswerText: `
        Box 1 Managed1,Managed2,VM1,VM2 and VM3 only.

        Box 2 VM1,VM2,VM3 and VM4.
    `
},
{
    id: 305,

    type: "radio",

    title: "Question 305",

    questionText: `
        <p>
            You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Cloud Apps.
        </p>

        <p>
            You plan to increase app security for the subscription.
        </p>

        <p>
            You need to identify which apps do NOT require user authentication.
        </p>

        <p>
            What should you do in the Microsoft 365 Defender portal?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "Review the cloud app catalog.",
        "Create an OAuth policy and review alerts.",
        "Create a snapshot Cloud Discovery report.",
        "Create a discovered app query."
    ],

    correctAnswer: 0,

    correctAnswerText: `
        A is the right answer.

        Tested and confirmed you can filter to see apps that require user authentication from both cloud app catalog and Cloud discovery.

        To identify which apps do NOT require user authentication in the Microsoft 365 Defender portal, you should review the cloud app catalog.

        Reviewing the cloud app catalog in the Microsoft 365 Defender portal provides you with a comprehensive list of all the apps connected to your Microsoft 365 environment.

        It allows you to see which apps require user authentication and which ones do not.
    `
},
{
    id: 306,

    type: "dropdown",

    title: "Question 306",

    questionText: `
        <p>
            You have a Microsoft Entra tenant that contains multiple storage accounts.
        </p>

        <p>
            You plan to deploy multiple Azure App Service apps that will require access to the storage accounts.
        </p>

        <p>
            You need to recommend an identity solution to provide the apps with access to the storage accounts. The solution must minimize administrative effort.
        </p>

        <p>
            Which type of identity should you recommend, and what should you recommend using to control access to the storage accounts?
        </p>

        <p>
            To answer, select the appropriate options in the answer area.
        </p>

        <p>
            NOTE: Each correct selection is worth one point.
        </p>

        <div style="margin-top:15px;background:#f9f9f9;padding:12px;border:1px solid #ddd;border-radius:4px;">

            <table style="width:100%;border-collapse:collapse;">

                <tbody>

                    <tr>
                        <td style="padding:10px;width:220px;font-weight:600;">
                            Identity type:
                        </td>

                        <td style="padding:10px;">

                            <select
                                data-key="identityType"
                                style="padding:6px;min-width:260px;"
                            >
                                <option value="">-- Select --</option>

                                <option value="Microsoft Entra user">
                                    Microsoft Entra user
                                </option>

                                <option value="Service principal">
                                    Service principal
                                </option>

                                <option value="System-assigned managed identity">
                                    System-assigned managed identity
                                </option>

                                <option value="User-assigned managed identity">
                                    User-assigned managed identity
                                </option>

                            </select>

                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;font-weight:600;">
                            To control access, use:
                        </td>

                        <td style="padding:10px;">

                            <select
                                data-key="accessControl"
                                style="padding:6px;min-width:260px;"
                            >
                                <option value="">-- Select --</option>

                                <option value="Microsoft Entra Domain Services">
                                    Microsoft Entra Domain Services
                                </option>

                                <option value="Role-based access control (RBAC)">
                                    Role-based access control (RBAC)
                                </option>

                                <option value="Shared access signature (SAS) tokens">
                                    Shared access signature (SAS) tokens
                                </option>

                                <option value="X.509 certificates">
                                    X.509 certificates
                                </option>

                            </select>

                        </td>
                    </tr>

                </tbody>

            </table>

        </div>
    `,

    correctAnswer: {
        identityType: "System-assigned managed identity",
        accessControl: "Role-based access control (RBAC)"
    },

    correctAnswerText: `
        system assigned managed identity. Role based access Control ( RBAC)

        https://learn.microsoft.com/en-us/azure/app-service/scenario-secure-app-access-storage?tabs=azure-portal
    `
},
{
    id: 307,

    type: "radio",

    title: "Question 307",

    questionText: `
        <p>
            You have an Azure subscription named Sub1 that contains a resource group named RG1.
            RG1 contains an Azure Cosmos DB database named DB1 and an Azure Kubernetes Service (AKS) cluster named AKS1.
            AKS1 uses a managed identity.
        </p>

        <p>
            You need to ensure that AKS1 can access DB1.
        </p>

        <p>
            The solution must meet the following requirements:
        </p>

        <ul>
            <li>
                Ensure that AKS1 uses the managed identity to access DB1.
            </li>

            <li>
                Follow the principle of least privilege.
            </li>
        </ul>

        <p>
            Which role should you assign to the managed identity of AKS1?
        </p>
    `,

    prompt: "Select the correct option:",

    options: [
        "For Sub1, assign the Owner role.",
        "For DB1, assign the Azure Cosmos DB Account Reader Role role.",
        "For RG1, assign the Azure Cosmos DB Data Reader Role role.",
        "For RG1, assign the Reader role."
    ],

    correctAnswer: 1,

    correctAnswerText: `
        B. For DB1, assign the Azure Cosmos DB Account Reader Role.

        Why this is the correct choice:

        To satisfy the principle of least privilege, you must assign the most restrictive role at the most specific scope possible.

        Scope:
        Assigning the role at the DB1 level (the specific database account) is more secure than assigning it at the Resource Group (RG1) or Subscription (Sub1) level, as it prevents the AKS cluster from potentially accessing other resources in those broader scopes.
    `
},
{
    id: 376,
    isCaseStudy: true,
    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User Administrator<br>
            User4 - Privileged Role Administrator<br>
            User5 - Identity Governance Administrator
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure an access review for Package1.<br>
            • Require admin approval for application access.<br>
            • Sync litware.com users and groups.<br>
            • Limit guest invitations.<br>
            • Increase Azure AD device limit to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and have a grace period option.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods include:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator app
        `
    },
    type: "radio",
    title: "Case Study - Access Reviews",
    questionText:
        "You need to implement the planned changes for Package1. Which users can create and manage the access review?",
    prompt: "Select the correct option:",
    options: [
        "User3 only",
        "User4 only",
        "User5 only",
        "User3 and User4",
        "User3 and User5",
        "User4 and User5"
    ],
    correctAnswer: 4,
    correctAnswerText: `
Correct Answer:
User3 and User5

Explanation:
User3 is assigned the User Administrator role.
User5 is assigned the Identity Governance Administrator role.

Identity Governance Administrators and User Administrators can create and manage access reviews.
User4 is assigned the Privileged Role Administrator role and cannot manage access reviews.
`
},
{
    id: 377,
    isCaseStudy: true,
    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User Administrator<br>
            User4 - Privileged Role Administrator<br>
            User5 - Identity Governance Administrator
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure an access review for Package1.<br>
            • Require admin approval for application access.<br>
            • Sync litware.com users and groups.<br>
            • Limit guest invitations.<br>
            • Increase Azure AD device limit to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and have a grace period option.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods include:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator app
        `
    },
    type: "radio",
    title: "Case Study - Guest User Invitations",
    questionText:
        "You need to resolve the issue of the guest user invitations. What should you do for the Azure AD tenant?",
    prompt: "Select the correct option:",
    options: [
        "Configure the Continuous access evaluation settings.",
        "Configure a Conditional Access policy.",
        "Modify the External collaboration settings.",
        "Configure the Access reviews settings."
    ],
    correctAnswer: 2,
    correctAnswerText: `
Correct Answer:
Modify the External collaboration settings.

Explanation:
Guest invitation permissions are controlled through External collaboration settings.
Configure the guest invite settings so that only users assigned specific administrator roles can invite guest users.
`
},
{
    id: 378,
    isCaseStudy: true,
    caseStudyOverview: {
        "Company Description":
            "ADatum Corporation is a consulting company in Montreal. ADatum recently acquired a Vancouver-based company named Litware, Inc.",

        "Existing Environment": `
            <strong>ADatum Environment:</strong><br>
            • The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.<br>
            • ADatum has a Microsoft 365 E5 subscription.<br>
            • The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.<br>
            • ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com.<br>
            • Security defaults are disabled.<br><br>

            <strong>Users:</strong><br>
            User1 - None<br>
            User2 - None<br>
            User3 - User Administrator<br>
            User4 - Privileged Role Administrator<br>
            User5 - Identity Governance Administrator
        `,

        "Problem Statements": `
            • Multiple users in the sales department have up to five devices.<br>
            • Several users leaked credentials.<br>
            • Suspicious browser sign-ins occurred.<br>
            • Resources were accessed from anonymous IP addresses.<br>
            • IT_Group1 does not appear when assigning the Device Administrators role.<br>
            • Anyone can invite guest users.<br>
            • The helpdesk spends too much time resetting passwords.<br>
            • Users currently use only passwords for authentication.
        `,

        "Planned Changes": `
            • Configure self-service password reset (SSPR).<br>
            • Configure multi-factor authentication (MFA).<br>
            • Configure an access review for Package1.<br>
            • Require admin approval for application access.<br>
            • Sync litware.com users and groups.<br>
            • Limit guest invitations.<br>
            • Increase Azure AD device limit to 10.
        `,

        "Technical Requirements": `
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.<br>
            • Users must be prompted to register for MFA and have a grace period option.<br>
            • Users must provide one authentication method for SSPR.<br><br>

            <strong>Available methods include:</strong><br>
            • Email<br>
            • Phone<br>
            • Security questions<br>
            • Microsoft Authenticator app
        `
    },
    type: "checkbox",
    title: "Case Study - User Administrator Role",
    questionText:
        "You need to modify the settings of the User administrator role to meet the technical requirements. Which two actions should you perform for the role? Each correct answer presents part of the solution.",
    prompt: "Select the two correct options:",
    options: [
        "Select Require justification on activation.",
        "Select Require ticket information on activation.",
        "Modify the Expire eligible assignments after setting.",
        "Set all assignments to Eligible.",
        "Set all assignments to Active."
    ],
    correctAnswer: [2, 3],
    correctAnswerText: `
Correct Answers:
• Modify the Expire eligible assignments after setting.
• Set all assignments to Eligible.

Explanation:
The User Administrator assignments must be eligible so that users request activation only when needed.
Configure the eligible assignment expiration to meet the requirement that permission can be requested for up to one year.
`
}
];
