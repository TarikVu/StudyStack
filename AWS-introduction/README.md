# [Build a Full Stack React Application with AWS Amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/)
> [!NOTE]
> This directory is to be used as notes.  The actual projects created via these AWS tutorials can be found on my GitHub Directory.

[Deployed URL ➡](https://main.d2lb1ebjku01lx.amplifyapp.com/)

In this tutorial, you will learn how to create a simple full-stack web application using AWS Amplify. Amplify offers a Git-based CI/CD workflow for building, deploying, and hosting single-page web applications or static sites with serverless backends.


### Table of Contents:
- Prerequsites
  - [Setting up your AWS enviroment](#setup)
  - [Configure AWS for local development](#config)
- [Tasks](#tasks)
- [How to use the cloud](#cloud)    


## <a name = "setup"></a>[Setting Up Your AWS Environment](https://aws.amazon.com/getting-started/guides/setup-environment/) ✅

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




## <a name="config"></a>[Configure AWS Profile for local development](https://docs.amplify.aws/react/start/account-setup/) ✅
### Summary:
- Added Amplify permissions to TarikVu
- Installed [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Deployed Simple app via amplify

  
### Notes:
**Amplify:**<br>
AWS Amplify is a set of tools and services that help developers build scalable full-stack applications, particularly front-end web and mobile apps.


### Other Prerequsites:
- [Install Node.js](https://nodejs.org/en/download/package-manager) ✅
- Familiar with GitHub. ✅


## <a name="tasks"></a> Tasks
- **Task 1: Deploy and Host A react App**
  - Sets up the react app and initializes with npm commands
  - Sets up the Git repo
  - **Sets up Deployment** and Installs Amplify packages.

- **Task 2: Initialize Local App<br>**
  - Sets up Amplify Auth, Data, & Storage
  - Sets up **Sandbox**

- **Task 3: Add Authentication**
  - Install Amplify Libraries
  - UI and CSS Code Provided for basic login
  - Credential Authentication
 
## <a name="cloud"></a> How to use the cloud
Refer to this [article](https://docs.amplify.aws/react/start/account-setup/) to setup the local enviroment.

A cloud sandbox enviroment is needed in order to use Amplify's backend.  
- We can spin up a local enviroment with: 
```npx ampx sandbox```
- To delete a sandbox:
```ctrl+c```
### How to check if a sandbox is currently running on the cloud
1.) Sign in to AWS services
2.) Go to Cloud Formation
-   A sandbox stack will have the name: "amplify-proj-TarikVu-sandbox...."


### Sign in page:
This sign in page is a defaulted one provided by AWS amplify, at the moment it is possible to modify the CSS styling, however modifying the UI in depth may take more research.

The main app is wrapped in `<Authenticator>`  This is from the library "@aws-amplify/ui-react"
If we want to just display the UI that has to do with creating and deleting notes, we can dismiss the amplify packages but keep in mind this will render any of the main backend functionalities useless.
