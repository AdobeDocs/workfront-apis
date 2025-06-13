---
title: Overview - Workfront APIs
description: This is the overview page of Workfront
contributors:
  - https://github.com/icaraps 
---

<Hero slots="heading, text"/>

# Workfront Platform APIs

Workfront Platform provides RESTful APIs that allow you to programmatically perform key operations in your data.

<Resources slots="heading, links"/>

#### Resources

* [General Documentation](https://experienceleague.adobe.com/en/docs/workfront)

## Overview
<br/>

Workfront Approvals public API endpoints are designed to help manage the document version approval process. They allow users to view, add, update, and remove stages and participants involved in decision-making for various asset types.<br/>

- API Paths
  - Gateway URL: https://worfront.adobe.io
  - Base Path: /unified-approvals
  - Example Path: /public/api/v1/approvals/{assetType}/{assetId}

- Required headers: All calls require the headers
  - Authorization: Bearer {access_token}
  - x-api-key: {api_key}
  - x-gw-ims-org-id: {ims_org_id}
  - x-gw-user-id: {user_id}
  - x-gw-subdomain: {subdomain}
  - x-gw-region: {region} (optional)

<br/>

[Unified Approvals API](/api/approvals/unified-approvals)

[ProofHQ API](https://api.proofhq.com/)

<br/>
<br/>
