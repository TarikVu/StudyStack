# [Introduction: Build a Full Stack React Application](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/)
> [!NOTE]
> This directory is to be used as notes.  The actual projects created via these AWS tutorials can be found on my GitHub Directory.

[CLI setup](https://www.youtube.com/watch?v=gswVHTrRX8I)
In this tutorial, you will learn how to create a simple full-stack web application using AWS Amplify. Amplify offers a Git-based CI/CD workflow for building, deploying, and hosting single-page web applications or static sites with serverless backends.

## [Setting Up Your AWS Environment](https://aws.amazon.com/getting-started/guides/setup-environment/) ✅

### Summary:
- Setup MFA with Tarik's iPhone 13 max pro for **root user**
- Created admin group and added user TarikVu to it.
- Created MFA for IAM user TarikVu
- (Skipped) Install AWS CLI
  
### Notes:
**Root User**<br>
What It Is: The root user is the primary account holder for your AWS account. It has unrestricted access to all AWS services and resources within the account.

Usage: You should use the root user sparingly due to its high level of access. Instead, use IAM roles and users for daily tasks to minimize risk.

**Organization**<br>
What It Is: An AWS Organization allows you to manage multiple AWS accounts centrally. It helps with billing, applying policies, and managing permissions across different accounts.

Usage: For a small project or a single application, you might not need multiple AWS accounts or organizations. However, as your setup grows or if you're working in a large team or enterprise environment, an organization can help manage various accounts and apply policies.

**IAM (Identity and Access Management)**<br>
What It Is: IAM is a service that allows you to manage access to AWS resources. You can create users, groups, and roles with specific permissions.

Usage: IAM is crucial for controlling who can access and modify your AWS resources. For your React application, you’ll use IAM to:
- Create IAM Users/Roles: Define users or roles for developers and other team members.
- Assign Permissions: Grant permissions to these users/roles so they can interact with AWS services like S3, DynamoDB, or Lambda.

**IAM Identity Center**<br>
What It Is: IAM Identity Center (formerly AWS SSO) provides centralized access management. It allows users to sign in once and access multiple AWS accounts and applications.<br>

Usage: For a full-stack React application, IAM Identity Center helps streamline user access management, especially if you have multiple AWS accounts or need to manage access for multiple team members.




## [Configure AWS Profile for local development](https://docs.amplify.aws/react/start/account-setup/) ❌
### Summary:
- Added Amplify permissions to TarikVu
- Installed [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

  
### Notes:
**Amplify:**<br>
AWS Amplify is a set of tools and services that help developers build scalable full-stack applications, particularly front-end web and mobile apps.



### Other Prerequsites:
- [Install Node.js](https://nodejs.org/en/download/package-manager) ✅
- Familiar with GitHub. ✅

