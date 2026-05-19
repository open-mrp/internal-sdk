# Healthz

Types:

- <code><a href="./src/resources/healthz.ts">HealthzListResponse</a></code>

Methods:

- <code title="get /healthz">client.healthz.<a href="./src/resources/healthz.ts">list</a>() -> HealthzListResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListAvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIRetrieveToolGroupsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIRetrieveUsageResponse</a></code>

Methods:

- <code title="get /v1/ai/tool-groups">client.ai.<a href="./src/resources/ai/ai.ts">retrieveToolGroups</a>({ ...params }) -> AIRetrieveToolGroupsResponse</code>
- <code title="get /v1/ai/tools">client.ai.<a href="./src/resources/ai/ai.ts">retrieveTools</a>({ ...params }) -> ListAvailableTool</code>
- <code title="get /v1/ai/usage">client.ai.<a href="./src/resources/ai/ai.ts">retrieveUsage</a>({ ...params }) -> AIRetrieveUsageResponse</code>

## Agents

Types:

- <code><a href="./src/resources/ai/agents.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">ConfigInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/agents.ts">ToolInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">create</a>({ ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">retrieve</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="patch /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">update</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">delete</a>(id) -> AgentDeleteResponse</code>
- <code title="put /v1/ai/agents/{id}/status">client.ai.agents.<a href="./src/resources/ai/agents.ts">updateStatus</a>(id, { ...params }) -> AgentDefinition</code>

## Alerts

Types:

- <code><a href="./src/resources/ai/alerts/alerts.ts">Actor</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAlert</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AlertListResponse</a></code>

Methods:

- <code title="get /v1/ai/alerts/{id}">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">retrieve</a>(id, { ...params }) -> AgentAlert</code>
- <code title="get /v1/ai/alerts">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">list</a>({ ...params }) -> AlertListResponse</code>

### Actions

Methods:

- <code title="post /v1/ai/alerts/{id}/actions/acknowledge">client.ai.alerts.actions.<a href="./src/resources/ai/alerts/actions.ts">acknowledge</a>(id, { ...params }) -> AgentAlert</code>

## Memories

Types:

- <code><a href="./src/resources/ai/memories.ts">AgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">Entity</a></code>
- <code><a href="./src/resources/ai/memories.ts">MemoryListResponse</a></code>
- <code><a href="./src/resources/ai/memories.ts">MemoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">create</a>({ ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">retrieve</a>(id) -> AgentMemory</code>
- <code title="patch /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">update</a>(id, { ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">list</a>({ ...params }) -> MemoryListResponse</code>
- <code title="delete /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">delete</a>(id) -> MemoryDeleteResponse</code>

## Runs

Types:

- <code><a href="./src/resources/ai/runs/runs.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="post /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">create</a>({ ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs/{id}">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">retrieve</a>(id, { ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">list</a>({ ...params }) -> RunListResponse</code>

### Actions

Methods:

- <code title="post /v1/ai/runs/{id}/actions/cancel">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">cancel</a>(id, { ...params }) -> AgentRun</code>
- <code title="post /v1/ai/runs/{id}/actions/continue">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">continue</a>(id, { ...params }) -> AgentRun</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthDeleteRefreshTokensResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthScannerPasswordsResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthUpdateAccessTokensResponse</a></code>

Methods:

- <code title="delete /v1/auth/refresh-tokens">client.auth.<a href="./src/resources/auth/auth.ts">deleteRefreshTokens</a>() -> AuthDeleteRefreshTokensResponse</code>
- <code title="post /v1/auth/scanner-passwords">client.auth.<a href="./src/resources/auth/auth.ts">scannerPasswords</a>({ ...params }) -> AuthScannerPasswordsResponse</code>
- <code title="put /v1/auth/access-tokens">client.auth.<a href="./src/resources/auth/auth.ts">updateAccessTokens</a>() -> AuthUpdateAccessTokensResponse</code>
- <code title="post /v1/auth/users">client.auth.<a href="./src/resources/auth/auth.ts">users</a>({ ...params }) -> User</code>

## Actions

Types:

- <code><a href="./src/resources/auth/actions.ts">User</a></code>

Methods:

- <code title="post /v1/auth/actions/login">client.auth.actions.<a href="./src/resources/auth/actions.ts">login</a>({ ...params }) -> User</code>
- <code title="post /v1/auth/actions/magic-login">client.auth.actions.<a href="./src/resources/auth/actions.ts">magicLogin</a>({ ...params }) -> User</code>

## APIKeys

Types:

- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyRetrieveAPIKeysResponse</a></code>

Methods:

- <code title="get /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieve</a>(id, { ...params }) -> APIKey</code>
- <code title="delete /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">delete</a>(id) -> APIKeyDeleteResponse</code>
- <code title="post /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">apiKeys</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="get /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieveAPIKeys</a>({ ...params }) -> APIKeyRetrieveAPIKeysResponse</code>

### Actions

Methods:

- <code title="post /v1/auth/api-keys/actions/fetch-doc-api-key">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">fetchDocAPIKey</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="post /v1/auth/api-keys/{id}/actions/rotate">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">rotate</a>(id, { ...params }) -> CreatedAPIKey</code>

## Passwords

Types:

- <code><a href="./src/resources/auth/passwords/passwords.ts">PasswordCreateResponse</a></code>

Methods:

- <code title="post /v1/auth/passwords">client.auth.passwords.<a href="./src/resources/auth/passwords/passwords.ts">create</a>({ ...params }) -> PasswordCreateResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/passwords/actions.ts">ActionRequestResetResponse</a></code>
- <code><a href="./src/resources/auth/passwords/actions.ts">ActionResetResponse</a></code>

Methods:

- <code title="post /v1/auth/passwords/actions/request-reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">requestReset</a>({ ...params }) -> ActionRequestResetResponse</code>
- <code title="post /v1/auth/passwords/actions/reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">reset</a>({ ...params }) -> ActionResetResponse</code>

## RegistrationSessions

Types:

- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSession</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionAccountsResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionRegistrationSessionsResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionRetrieveRegistrationSessionsResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionUsersResponse</a></code>

Methods:

- <code title="get /v1/auth/registration-sessions/{session_id}">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">retrieve</a>(sessionID) -> RegistrationSession</code>
- <code title="patch /v1/auth/registration-sessions/{session_id}">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">update</a>(sessionID, { ...params }) -> RegistrationSession</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/accounts">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">accounts</a>(sessionID) -> RegistrationSessionAccountsResponse</code>
- <code title="post /v1/auth/registration-sessions">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">registrationSessions</a>({ ...params }) -> RegistrationSessionRegistrationSessionsResponse</code>
- <code title="get /v1/auth/registration-sessions">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">retrieveRegistrationSessions</a>({ ...params }) -> RegistrationSessionRetrieveRegistrationSessionsResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/users">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">users</a>(sessionID, { ...params }) -> RegistrationSessionUsersResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ActionConfirmPaymentResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ActionResendVerificationEmailResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ActionSetupBillingResponse</a></code>

Methods:

- <code title="post /v1/auth/registration-sessions/{session_id}/actions/confirm-payment">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">confirmPayment</a>(sessionID, { ...params }) -> ActionConfirmPaymentResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/resend-verification-email">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">resendVerificationEmail</a>(sessionID) -> ActionResendVerificationEmailResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/setup-billing">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">setupBilling</a>(sessionID) -> ActionSetupBillingResponse</code>
- <code title="put /v1/auth/registration-sessions/{token}/actions/verify-token">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">updateVerifyToken</a>(token) -> RegistrationSession</code>

# Billing

Types:

- <code><a href="./src/resources/billing/billing.ts">BillingPortalSessionsResponse</a></code>

Methods:

- <code title="post /v1/billing/portal-sessions">client.billing.<a href="./src/resources/billing/billing.ts">portalSessions</a>() -> BillingPortalSessionsResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/billing/accounts.ts">UsageItem</a></code>
- <code><a href="./src/resources/billing/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/billing/accounts.ts">AccountRetrieveUsageResponse</a></code>

Methods:

- <code title="put /v1/billing/accounts">client.billing.accounts.<a href="./src/resources/billing/accounts.ts">create</a>() -> AccountCreateResponse</code>
- <code title="get /v1/billing/accounts/usage">client.billing.accounts.<a href="./src/resources/billing/accounts.ts">retrieveUsage</a>() -> AccountRetrieveUsageResponse</code>

## Actions

Types:

- <code><a href="./src/resources/billing/actions.ts">ActionRequestEnterpriseResponse</a></code>

Methods:

- <code title="post /v1/billing/actions/request-enterprise">client.billing.actions.<a href="./src/resources/billing/actions.ts">requestEnterprise</a>() -> ActionRequestEnterpriseResponse</code>

## Plans

Types:

- <code><a href="./src/resources/billing/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/billing/plans.ts">PlanRetrieveProrationResponse</a></code>
- <code><a href="./src/resources/billing/plans.ts">PlanSwitchResponse</a></code>

Methods:

- <code title="get /v1/billing/plans">client.billing.plans.<a href="./src/resources/billing/plans.ts">list</a>({ ...params }) -> PlanListResponse</code>
- <code title="get /v1/billing/plans/{id}/proration">client.billing.plans.<a href="./src/resources/billing/plans.ts">retrieveProration</a>(id) -> PlanRetrieveProrationResponse</code>
- <code title="post /v1/billing/plans/{id}/switch">client.billing.plans.<a href="./src/resources/billing/plans.ts">switch</a>(id) -> PlanSwitchResponse</code>

## SpendingCap

Types:

- <code><a href="./src/resources/billing/spending-cap.ts">SpendingCapResponse</a></code>

Methods:

- <code title="get /v1/billing/spending-cap">client.billing.spendingCap.<a href="./src/resources/billing/spending-cap.ts">retrieveSpendingCap</a>() -> SpendingCapResponse</code>
- <code title="put /v1/billing/spending-cap">client.billing.spendingCap.<a href="./src/resources/billing/spending-cap.ts">updateSpendingCap</a>({ ...params }) -> SpendingCapResponse</code>

# Catalog

## Catalog

### ProductLines

Types:

- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProperty</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ProductLineRetrieveProductLinesResponse</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ProductLineRetrieveProductsResponse</a></code>

Methods:

- <code title="get /v1/catalog/catalog/product-lines">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">retrieveProductLines</a>({ ...params }) -> ProductLineRetrieveProductLinesResponse</code>
- <code title="get /v1/catalog/catalog/product-lines/{id}/products">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">retrieveProducts</a>(id, { ...params }) -> ProductLineRetrieveProductsResponse</code>

## ItemCategories

Types:

- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieve</a>(id, { ...params }) -> ItemCategory</code>
- <code title="patch /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">update</a>(id, { ...params }) -> ItemCategory</code>
- <code title="delete /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">delete</a>(id) -> ItemCategoryDeleteResponse</code>
- <code title="post /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">itemCategories</a>({ ...params }) -> ItemCategory</code>
- <code title="get /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieveItemCategories</a>({ ...params }) -> ListItemCategory</code>

### Properties

Types:

- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyUpdateResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="put /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">update</a>(propertyID, { ...params }) -> PropertyUpdateResponse</code>
- <code title="delete /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>

## Items

Types:

- <code><a href="./src/resources/catalog/items/items.ts">Item</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemRetrieveCostsResponse</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemRetrieveTrendsResponse</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="put /v1/catalog/items/{id}/category/{category_id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">update</a>(categoryID, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">list</a>({ ...params }) -> ItemListResponse</code>
- <code title="get /v1/catalog/items/{id}/costs">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveCosts</a>(id) -> ItemRetrieveCostsResponse</code>
- <code title="get /v1/catalog/items/{id}/trends">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveTrends</a>(id, { ...params }) -> ItemRetrieveTrendsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/items/actions.ts">ActionBulkCreateResponse</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ActionBulkReconcileResponse</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ActionRetrieveExportResponse</a></code>

Methods:

- <code title="post /v1/catalog/items/actions/bulk-create">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkCreate</a>({ ...params }) -> ActionBulkCreateResponse</code>
- <code title="post /v1/catalog/items/actions/bulk-reconcile">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkReconcile</a>({ ...params }) -> ActionBulkReconcileResponse</code>
- <code title="get /v1/catalog/items/actions/export">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">retrieveExport</a>() -> ActionRetrieveExportResponse</code>

### Attributes

Methods:

- <code title="put /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">update</a>(attributeID, { ...params }) -> Item</code>
- <code title="delete /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">delete</a>(attributeID, { ...params }) -> Item</code>

### Inventory

Types:

- <code><a href="./src/resources/catalog/items/inventory.ts">InventoryListResponse</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">InventoryPatchAllResponse</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}/inventory">client.catalog.items.inventory.<a href="./src/resources/catalog/items/inventory.ts">list</a>(id, { ...params }) -> InventoryListResponse</code>
- <code title="patch /v1/catalog/items/{id}/inventory">client.catalog.items.inventory.<a href="./src/resources/catalog/items/inventory.ts">patchAll</a>(id, { ...params }) -> InventoryPatchAllResponse</code>

## Materials

Types:

- <code><a href="./src/resources/catalog/materials/materials.ts">Material</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">MaterialListResponse</a></code>

Methods:

- <code title="post /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">create</a>({ ...params }) -> Material</code>
- <code title="get /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">retrieve</a>(id, { ...params }) -> Material</code>
- <code title="patch /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">update</a>(id, { ...params }) -> Material</code>
- <code title="get /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">list</a>({ ...params }) -> MaterialListResponse</code>
- <code title="delete /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">delete</a>(id) -> Material</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/materials/actions.ts">ActionRetrieveExportResponse</a></code>

Methods:

- <code title="get /v1/catalog/materials/actions/export">client.catalog.materials.actions.<a href="./src/resources/catalog/materials/actions.ts">retrieveExport</a>({ ...params }) -> ActionRetrieveExportResponse</code>

## Parts

Types:

- <code><a href="./src/resources/catalog/parts/parts.ts">Part</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">PartListResponse</a></code>

Methods:

- <code title="post /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">create</a>({ ...params }) -> Part</code>
- <code title="get /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">retrieve</a>(id, { ...params }) -> Part</code>
- <code title="patch /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">update</a>(id, { ...params }) -> Part</code>
- <code title="get /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">list</a>({ ...params }) -> PartListResponse</code>
- <code title="delete /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">delete</a>(id) -> Part</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/parts/actions.ts">ActionRetrieveExportResponse</a></code>

Methods:

- <code title="get /v1/catalog/parts/actions/export">client.catalog.parts.actions.<a href="./src/resources/catalog/parts/actions.ts">retrieveExport</a>({ ...params }) -> ActionRetrieveExportResponse</code>

## ProductLines

Types:

- <code><a href="./src/resources/catalog/product-lines.ts">ListProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLineDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieve</a>(id, { ...params }) -> ProductLine</code>
- <code title="patch /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">update</a>(id, { ...params }) -> ProductLine</code>
- <code title="delete /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">delete</a>(id) -> ProductLineDeleteResponse</code>
- <code title="post /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">productLines</a>({ ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieveProductLines</a>({ ...params }) -> ListProductLine</code>

## ProductTypes

Types:

- <code><a href="./src/resources/catalog/product-types.ts">ProductType</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ProductTypeDeleteResponse</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ProductTypeRetrieveProductTypesResponse</a></code>

Methods:

- <code title="get /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">retrieve</a>(id) -> ProductType</code>
- <code title="patch /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">update</a>(id, { ...params }) -> ProductType</code>
- <code title="delete /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">delete</a>(id) -> ProductTypeDeleteResponse</code>
- <code title="post /v1/catalog/product-types">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">productTypes</a>({ ...params }) -> ProductType</code>
- <code title="get /v1/catalog/product-types">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">retrieveProductTypes</a>({ ...params }) -> ProductTypeRetrieveProductTypesResponse</code>

## Products

Types:

- <code><a href="./src/resources/catalog/products/products.ts">Product</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">retrieve</a>(id, { ...params }) -> Product</code>
- <code title="patch /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">delete</a>(id, { ...params }) -> Product</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/products/actions.ts">ActionRetrieveExportResponse</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ActionUpdateValidateResponse</a></code>

Methods:

- <code title="get /v1/catalog/products/actions/export">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">retrieveExport</a>({ ...params }) -> ActionRetrieveExportResponse</code>
- <code title="put /v1/catalog/products/actions/validate">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">updateValidate</a>({ ...params }) -> ActionUpdateValidateResponse</code>

## Properties

Types:

- <code><a href="./src/resources/catalog/properties/properties.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">Property</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">create</a>({ ...params }) -> Property</code>
- <code title="get /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">retrieve</a>(id, { ...params }) -> Property</code>
- <code title="patch /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">update</a>(id, { ...params }) -> Property</code>
- <code title="get /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">list</a>({ ...params }) -> ListProperty</code>
- <code title="delete /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">delete</a>(id) -> PropertyDeleteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/catalog/properties/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="patch /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">list</a>(propertyID, { ...params }) -> ListAttribute</code>
- <code title="delete /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

## UnitGroups

Types:

- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupUnitParam</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupDeleteResponse</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupRetrieveUnitGroupsResponse</a></code>

Methods:

- <code title="get /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieve</a>(id, { ...params }) -> UnitGroup</code>
- <code title="patch /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">update</a>(id, { ...params }) -> UnitGroup</code>
- <code title="delete /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">delete</a>(id) -> UnitGroupDeleteResponse</code>
- <code title="get /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieveUnitGroups</a>({ ...params }) -> UnitGroupRetrieveUnitGroupsResponse</code>
- <code title="post /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">unitGroups</a>({ ...params }) -> UnitGroup</code>

### Units

Types:

- <code><a href="./src/resources/catalog/unit-groups/units.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">create</a>(unitGroupID, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">retrieve</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="patch /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">update</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">list</a>(unitGroupID, { ...params }) -> ListUnitGroupUnit</code>
- <code title="delete /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">delete</a>(id, { ...params }) -> UnitDeleteResponse</code>

## Units

Types:

- <code><a href="./src/resources/catalog/units/units.ts">ListUnit</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">create</a>({ ...params }) -> Unit</code>
- <code title="get /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">retrieve</a>(id, { ...params }) -> Unit</code>
- <code title="patch /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">update</a>(id, { ...params }) -> Unit</code>
- <code title="get /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">list</a>({ ...params }) -> ListUnit</code>
- <code title="delete /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">delete</a>(id) -> UnitDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/units/actions.ts">ActionUpdateValidateResponse</a></code>

Methods:

- <code title="put /v1/catalog/units/actions/validate">client.catalog.units.actions.<a href="./src/resources/catalog/units/actions.ts">updateValidate</a>({ ...params }) -> ActionUpdateValidateResponse</code>

# Core

## Actions

Types:

- <code><a href="./src/resources/core/actions.ts">MessageResource</a></code>
- <code><a href="./src/resources/core/actions.ts">ActionEmailRecordResponse</a></code>
- <code><a href="./src/resources/core/actions.ts">ActionUpdateCheckDuplicatesResponse</a></code>

Methods:

- <code title="post /v1/core/actions/email-record">client.core.actions.<a href="./src/resources/core/actions.ts">emailRecord</a>({ ...params }) -> ActionEmailRecordResponse</code>
- <code title="post /v1/core/actions/request-demo">client.core.actions.<a href="./src/resources/core/actions.ts">requestDemo</a>({ ...params }) -> MessageResource</code>
- <code title="post /v1/core/actions/submit-feedback">client.core.actions.<a href="./src/resources/core/actions.ts">submitFeedback</a>({ ...params }) -> MessageResource</code>
- <code title="put /v1/core/actions/check-duplicates">client.core.actions.<a href="./src/resources/core/actions.ts">updateCheckDuplicates</a>({ ...params }) -> ActionUpdateCheckDuplicatesResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/core/addresses/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">AddressRetrieveSuggestionsResponse</a></code>

Methods:

- <code title="get /v1/core/addresses/details/{id}">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieve</a>(id, { ...params }) -> AddressRetrieveResponse</code>
- <code title="get /v1/core/addresses/suggestions">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveSuggestions</a>({ ...params }) -> AddressRetrieveSuggestionsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/core/addresses/actions.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ActionUpdateValidateResponse</a></code>

Methods:

- <code title="put /v1/core/addresses/actions/validate">client.core.addresses.actions.<a href="./src/resources/core/addresses/actions.ts">updateValidate</a>({ ...params }) -> ActionUpdateValidateResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/core/analytics.ts">AnalyzeOpenBatchesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">ChartData</a></code>
- <code><a href="./src/resources/core/analytics.ts">CostBreakdown</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">ManufacturingMetrics</a></code>
- <code><a href="./src/resources/core/analytics.ts">OpenBatchSummary</a></code>
- <code><a href="./src/resources/core/analytics.ts">RevenueForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsRetrieveWeeksOfSalesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateDeliveriesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateDemandForecastResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateInventoryReceiptsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateManufacturingResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateManufacturingBatchResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateMaterialsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateNewCustomersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateOeeResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateOpenBatchesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateProductionCostsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateQuarterlyOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUpdateSalesResponse</a></code>

Methods:

- <code title="get /v1/core/analytics/weeks-of-sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">retrieveWeeksOfSales</a>({ ...params }) -> AnalyticsRetrieveWeeksOfSalesResponse</code>
- <code title="put /v1/core/analytics/deliveries">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDeliveries</a>({ ...params }) -> AnalyticsUpdateDeliveriesResponse</code>
- <code title="put /v1/core/analytics/demand-forecast">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDemandForecast</a>({ ...params }) -> AnalyticsUpdateDemandForecastResponse</code>
- <code title="put /v1/core/analytics/inventory-receipts">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateInventoryReceipts</a>({ ...params }) -> AnalyticsUpdateInventoryReceiptsResponse</code>
- <code title="put /v1/core/analytics/manufacturing">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturing</a>({ ...params }) -> AnalyticsUpdateManufacturingResponse</code>
- <code title="put /v1/core/analytics/manufacturing-batch">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturingBatch</a>({ ...params }) -> AnalyticsUpdateManufacturingBatchResponse</code>
- <code title="put /v1/core/analytics/materials">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateMaterials</a>({ ...params }) -> AnalyticsUpdateMaterialsResponse</code>
- <code title="put /v1/core/analytics/new-customers">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateNewCustomers</a>({ ...params }) -> AnalyticsUpdateNewCustomersResponse</code>
- <code title="put /v1/core/analytics/oee">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOee</a>({ ...params }) -> AnalyticsUpdateOeeResponse</code>
- <code title="put /v1/core/analytics/open-batches">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOpenBatches</a>({ ...params }) -> AnalyticsUpdateOpenBatchesResponse</code>
- <code title="put /v1/core/analytics/orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOrders</a>({ ...params }) -> AnalyticsUpdateOrdersResponse</code>
- <code title="put /v1/core/analytics/production-costs">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateProductionCosts</a>({ ...params }) -> AnalyticsUpdateProductionCostsResponse</code>
- <code title="put /v1/core/analytics/quarterly-orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateQuarterlyOrders</a>({ ...params }) -> AnalyticsUpdateQuarterlyOrdersResponse</code>
- <code title="put /v1/core/analytics/sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateSales</a>({ ...params }) -> AnalyticsUpdateSalesResponse</code>

## AuditEvents

Types:

- <code><a href="./src/resources/core/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditEventRetrieveAuditEventsResponse</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditEventRetrieveResourceTypesResponse</a></code>

Methods:

- <code title="get /v1/core/audit-events/{id}">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieve</a>(id, { ...params }) -> AuditEvent</code>
- <code title="get /v1/core/audit-events">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveAuditEvents</a>({ ...params }) -> AuditEventRetrieveAuditEventsResponse</code>
- <code title="get /v1/core/audit-events/resource-types">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveResourceTypes</a>() -> AuditEventRetrieveResourceTypesResponse</code>

## EmailLogs

Types:

- <code><a href="./src/resources/core/email-logs.ts">EmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">EmailLogRetrieveEmailLogsResponse</a></code>

Methods:

- <code title="get /v1/core/email-logs/{id}">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieve</a>(id, { ...params }) -> EmailLog</code>
- <code title="get /v1/core/email-logs">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieveEmailLogs</a>({ ...params }) -> EmailLogRetrieveEmailLogsResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">RequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLogRetrieveRequestLogsResponse</a></code>

Methods:

- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLog</code>
- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieveRequestLogs</a>({ ...params }) -> RequestLogRetrieveRequestLogsResponse</code>

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxListResponse</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> SandboxListResponse</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## SysProperties

Types:

- <code><a href="./src/resources/core/sys-properties.ts">SysProperty</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">SysPropertyRetrieveLatestValueResponse</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">SysPropertyRetrieveSysPropertiesResponse</a></code>

Methods:

- <code title="get /v1/core/sys-properties/{id}">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">retrieve</a>(id) -> SysProperty</code>
- <code title="patch /v1/core/sys-properties/{id}">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">update</a>(id, { ...params }) -> SysProperty</code>
- <code title="get /v1/core/sys-properties/{type_code}/latest-value">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">retrieveLatestValue</a>(typeCode) -> SysPropertyRetrieveLatestValueResponse</code>
- <code title="get /v1/core/sys-properties">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">retrieveSysProperties</a>({ ...params }) -> SysPropertyRetrieveSysPropertiesResponse</code>

# Finance

Types:

- <code><a href="./src/resources/finance/finance.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">AllocationCustomer</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/finance.ts">FinanceRetrieveAdjustmentTypesResponse</a></code>
- <code><a href="./src/resources/finance/finance.ts">FinanceRetrieveOpenCreditsResponse</a></code>
- <code><a href="./src/resources/finance/finance.ts">FinanceRetrieveTransactionMethodsResponse</a></code>
- <code><a href="./src/resources/finance/finance.ts">FinanceRetrieveTransactionTypesResponse</a></code>

Methods:

- <code title="get /v1/finance/adjustment-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveAdjustmentTypes</a>({ ...params }) -> FinanceRetrieveAdjustmentTypesResponse</code>
- <code title="get /v1/finance/open-credits">client.finance.<a href="./src/resources/finance/finance.ts">retrieveOpenCredits</a>({ ...params }) -> FinanceRetrieveOpenCreditsResponse</code>
- <code title="get /v1/finance/transaction-methods">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionMethods</a>({ ...params }) -> FinanceRetrieveTransactionMethodsResponse</code>
- <code title="get /v1/finance/transaction-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionTypes</a>({ ...params }) -> FinanceRetrieveTransactionTypesResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountRetrieveInvoicesResponse</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountRetrieveTransactionsResponse</a></code>

Methods:

- <code title="get /v1/finance/accounts/{account_id}/invoices">client.finance.accounts.<a href="./src/resources/finance/accounts/accounts.ts">retrieveInvoices</a>(accountID, { ...params }) -> AccountRetrieveInvoicesResponse</code>
- <code title="get /v1/finance/accounts/{account_id}/transactions">client.finance.accounts.<a href="./src/resources/finance/accounts/accounts.ts">retrieveTransactions</a>(accountID, { ...params }) -> AccountRetrieveTransactionsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/finance/accounts/actions.ts">ActionEmailReceivablesResponse</a></code>

Methods:

- <code title="post /v1/finance/accounts/{account_id}/actions/email-receivables">client.finance.accounts.actions.<a href="./src/resources/finance/accounts/actions.ts">emailReceivables</a>(accountID, { ...params }) -> ActionEmailReceivablesResponse</code>

## Invoices

Types:

- <code><a href="./src/resources/finance/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">retrieve</a>(id, { ...params }) -> Invoice</code>
- <code title="patch /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">update</a>(id, { ...params }) -> InvoiceSummary</code>
- <code title="get /v1/finance/invoices">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

## PaymentTerms

Types:

- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermDeleteResponse</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermRetrievePaymentTermsResponse</a></code>

Methods:

- <code title="get /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrieve</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="patch /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">update</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="delete /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">delete</a>(id) -> PaymentTermDeleteResponse</code>
- <code title="post /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">paymentTerms</a>({ ...params }) -> PaymentTerm</code>
- <code title="get /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrievePaymentTerms</a>({ ...params }) -> PaymentTermRetrievePaymentTermsResponse</code>

## Receivables

Types:

- <code><a href="./src/resources/finance/receivables/receivables.ts">ListReceivableEntry</a></code>

Methods:

- <code title="get /v1/finance/receivables">client.finance.receivables.<a href="./src/resources/finance/receivables/receivables.ts">list</a>({ ...params }) -> ListReceivableEntry</code>

### Accounts

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}">client.finance.receivables.accounts.<a href="./src/resources/finance/receivables/accounts/accounts.ts">retrieve</a>(accountID, { ...params }) -> ListReceivableEntry</code>

#### Actions

Types:

- <code><a href="./src/resources/finance/receivables/accounts/actions.ts">ActionRetrieveExportResponse</a></code>

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}/actions/export">client.finance.receivables.accounts.actions.<a href="./src/resources/finance/receivables/accounts/actions.ts">retrieveExport</a>(accountID, { ...params }) -> ActionRetrieveExportResponse</code>

## Settlements

Types:

- <code><a href="./src/resources/finance/settlements.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Settlement</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SettlementListResponse</a></code>

Methods:

- <code title="post /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">create</a>({ ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">retrieve</a>(id, { ...params }) -> Settlement</code>
- <code title="patch /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">update</a>(id, { ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">list</a>({ ...params }) -> SettlementListResponse</code>
- <code title="delete /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">delete</a>(id) -> Settlement</code>

## TransactionAllocations

Types:

- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocationDeleteResponse</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocationRetrieveTransactionAllocationsResponse</a></code>

Methods:

- <code title="patch /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">update</a>(id, { ...params }) -> TransactionAllocation</code>
- <code title="delete /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">delete</a>(id) -> TransactionAllocationDeleteResponse</code>
- <code title="get /v1/finance/transaction-allocations">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">retrieveTransactionAllocations</a>({ ...params }) -> TransactionAllocationRetrieveTransactionAllocationsResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/finance/transactions.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">create</a>({ ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">retrieve</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="patch /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">update</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="delete /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">delete</a>(id) -> TransactionDetail</code>

# Identity

Types:

- <code><a href="./src/resources/identity/identity.ts">IdentityRetrieveResponse</a></code>
- <code><a href="./src/resources/identity/identity.ts">IdentityRetrievePermissionGroupsResponse</a></code>

Methods:

- <code title="get /v1/identity/portal-branding/{slug}">client.identity.<a href="./src/resources/identity/identity.ts">retrieve</a>(slug) -> IdentityRetrieveResponse</code>
- <code title="get /v1/identity/permission-groups">client.identity.<a href="./src/resources/identity/identity.ts">retrievePermissionGroups</a>({ ...params }) -> IdentityRetrievePermissionGroupsResponse</code>

## AccountUsers

Types:

- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">NotificationPreferenceItem</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUserRetrieveAccountUsersResponse</a></code>

Methods:

- <code title="get /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieve</a>(id, { ...params }) -> AccountUser</code>
- <code title="patch /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">update</a>(id, { ...params }) -> AccountUser</code>
- <code title="post /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">accountUsers</a>({ ...params }) -> AccountUser</code>
- <code title="get /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieveAccountUsers</a>({ ...params }) -> AccountUserRetrieveAccountUsersResponse</code>

### Actions

Types:

- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateActivateResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateDisableResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateRemoveResponse</a></code>

Methods:

- <code title="put /v1/identity/account-users/{id}/actions/activate">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateActivate</a>(id) -> ActionUpdateActivateResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/disable">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateDisable</a>(id) -> ActionUpdateDisableResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/remove">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateRemove</a>(id) -> ActionUpdateRemoveResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/identity/accounts.ts">Account</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountRetrieveLogoResponse</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountUpdatePhotoResponse</a></code>

Methods:

- <code title="get /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="patch /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /v1/identity/accounts/{id}/logo">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">retrieveLogo</a>(id) -> AccountRetrieveLogoResponse</code>
- <code title="put /v1/identity/accounts/{id}/photo">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">updatePhoto</a>(id) -> AccountUpdatePhotoResponse</code>

## ChildAccounts

Types:

- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccount</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccountDeleteResponse</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccountRetrieveChildAccountsResponse</a></code>

Methods:

- <code title="put /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">update</a>(childAccountID) -> ChildAccount</code>
- <code title="delete /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">delete</a>(childAccountID) -> ChildAccountDeleteResponse</code>
- <code title="get /v1/identity/child-accounts">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">retrieveChildAccounts</a>({ ...params }) -> ChildAccountRetrieveChildAccountsResponse</code>

## Integrations

Types:

- <code><a href="./src/resources/identity/integrations/integrations.ts">AccountIntegration</a></code>
- <code><a href="./src/resources/identity/integrations/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="post /v1/identity/integrations">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">create</a>({ ...params }) -> AccountIntegration</code>
- <code title="put /v1/identity/integrations/{id}">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">update</a>(id, { ...params }) -> AccountIntegration</code>
- <code title="get /v1/identity/integrations">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>
- <code title="delete /v1/identity/integrations/{id}">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">delete</a>(id) -> AccountIntegration</code>

### Stripe

Types:

- <code><a href="./src/resources/identity/integrations/stripe.ts">StripeRetrievePublishableKeyResponse</a></code>
- <code><a href="./src/resources/identity/integrations/stripe.ts">StripeRetrieveStatusResponse</a></code>

Methods:

- <code title="get /v1/identity/integrations/stripe/publishable-key">client.identity.integrations.stripe.<a href="./src/resources/identity/integrations/stripe.ts">retrievePublishableKey</a>() -> StripeRetrievePublishableKeyResponse</code>
- <code title="get /v1/identity/integrations/stripe/status">client.identity.integrations.stripe.<a href="./src/resources/identity/integrations/stripe.ts">retrieveStatus</a>() -> StripeRetrieveStatusResponse</code>

## Me

Methods:

- <code title="get /v1/identity/me">client.identity.me.<a href="./src/resources/identity/me/me.ts">list</a>() -> User</code>

### Tenancy

Types:

- <code><a href="./src/resources/identity/me/tenancy.ts">Tenancy</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyRetrieveResponse</a></code>

Methods:

- <code title="put /v1/identity/me/tenancy">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">create</a>({ ...params }) -> Tenancy</code>
- <code title="get /v1/identity/me/tenancy/customer-accounts/{vendor_account_id}">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">retrieve</a>(vendorAccountID, { ...params }) -> TenancyRetrieveResponse</code>
- <code title="get /v1/identity/me/tenancy">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">list</a>() -> Tenancy</code>

## Roles

Types:

- <code><a href="./src/resources/identity/roles.ts">Role</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleListResponse</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="post /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">retrieve</a>(id, { ...params }) -> Role</code>
- <code title="patch /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">update</a>(id, { ...params }) -> Role</code>
- <code title="get /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">list</a>({ ...params }) -> RoleListResponse</code>
- <code title="delete /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">delete</a>(id) -> RoleDeleteResponse</code>

## Users

Methods:

- <code title="get /v1/identity/users/{id}">client.identity.users.<a href="./src/resources/identity/users/users.ts">retrieve</a>(id) -> User</code>
- <code title="patch /v1/identity/users/{id}">client.identity.users.<a href="./src/resources/identity/users/users.ts">update</a>(id, { ...params }) -> User</code>

### Photo

Types:

- <code><a href="./src/resources/identity/users/photo.ts">PhotoCreateResponse</a></code>
- <code><a href="./src/resources/identity/users/photo.ts">PhotoListResponse</a></code>

Methods:

- <code title="put /v1/identity/users/{id}/photo">client.identity.users.photo.<a href="./src/resources/identity/users/photo.ts">create</a>(id) -> PhotoCreateResponse</code>
- <code title="get /v1/identity/users/{id}/photo">client.identity.users.photo.<a href="./src/resources/identity/users/photo.ts">list</a>(id) -> PhotoListResponse</code>

# Operations

Types:

- <code><a href="./src/resources/operations/operations.ts">Rate</a></code>
- <code><a href="./src/resources/operations/operations.ts">OperationRetrieveInventoriesResponse</a></code>

Methods:

- <code title="patch /v1/operations/quantities/{id}">client.operations.<a href="./src/resources/operations/operations.ts">update</a>(id, { ...params }) -> Quantity</code>
- <code title="get /v1/operations/inventories">client.operations.<a href="./src/resources/operations/operations.ts">retrieveInventories</a>({ ...params }) -> OperationRetrieveInventoriesResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/operations/analytics.ts">AnalyticsUpdateOpenBatchesResponse</a></code>

Methods:

- <code title="put /v1/operations/analytics/open-batches">client.operations.analytics.<a href="./src/resources/operations/analytics.ts">updateOpenBatches</a>({ ...params }) -> AnalyticsUpdateOpenBatchesResponse</code>

## Batches

Types:

- <code><a href="./src/resources/operations/batches/batches.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchNextStepsResponse</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchRetrieveFlowResponse</a></code>

Methods:

- <code title="delete /v1/operations/batches/{id}">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">delete</a>(id) -> Batch</code>
- <code title="post /v1/operations/batches/{id}/next-steps">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">nextSteps</a>(id, { ...params }) -> BatchNextStepsResponse</code>
- <code title="post /v1/operations/batches/remaining-quantities">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">remainingQuantities</a>({ ...params }) -> Quantity</code>
- <code title="get /v1/operations/batches/{id}/flow">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">retrieveFlow</a>(id) -> BatchRetrieveFlowResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/batches/actions.ts">Batch</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">SplitQuantityInput</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/batches/actions/bulk-delete">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/operations/batches/actions/close">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">close</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/initialize">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">initialize</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/merge">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">merge</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/move">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">move</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/split">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">split</a>({ ...params }) -> Batch</code>

## Carriers

Types:

- <code><a href="./src/resources/operations/carriers/carriers.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierListResponse</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierDeleteResponse</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierRetrieveOAuthStatusResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieve</a>(id, { ...params }) -> Carrier</code>
- <code title="patch /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">update</a>(id, { ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">list</a>({ ...params }) -> CarrierListResponse</code>
- <code title="delete /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">delete</a>(id) -> CarrierDeleteResponse</code>
- <code title="get /v1/operations/carriers/{id}/oauth-status">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieveOAuthStatus</a>(id) -> CarrierRetrieveOAuthStatusResponse</code>

### ServiceLevels

Types:

- <code><a href="./src/resources/operations/carriers/service-levels.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevelDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieve</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="patch /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">update</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="delete /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">delete</a>(id, { ...params }) -> ServiceLevelDeleteResponse</code>
- <code title="get /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieveServiceLevels</a>(carrierID, { ...params }) -> ListServiceLevel</code>
- <code title="post /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">serviceLevels</a>(carrierID, { ...params }) -> ServiceLevel</code>

### Actions

Types:

- <code><a href="./src/resources/operations/carriers/actions.ts">ActionInitiateOAuthResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers/{id}/actions/initiate-oauth">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">initiateOAuth</a>(id, { ...params }) -> ActionInitiateOAuthResponse</code>
- <code title="post /v1/operations/carriers/{id}/actions/sync-options">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">syncOptions</a>(id) -> Carrier</code>

## DcLocations

Types:

- <code><a href="./src/resources/operations/dc-locations.ts">DcLocation</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">DcLocationDeleteResponse</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">DcLocationRetrieveDcLocationsResponse</a></code>

Methods:

- <code title="get /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">retrieve</a>(id, { ...params }) -> DcLocation</code>
- <code title="patch /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">update</a>(id, { ...params }) -> DcLocation</code>
- <code title="delete /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">delete</a>(id) -> DcLocationDeleteResponse</code>
- <code title="post /v1/operations/dc-locations">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">dcLocations</a>({ ...params }) -> DcLocation</code>
- <code title="get /v1/operations/dc-locations">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">retrieveDcLocations</a>({ ...params }) -> DcLocationRetrieveDcLocationsResponse</code>

## Deliveries

Types:

- <code><a href="./src/resources/operations/deliveries.ts">DeliveryRetrieveResponse</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">DeliveryListResponse</a></code>

Methods:

- <code title="get /v1/operations/deliveries/{id}">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">retrieve</a>(id) -> DeliveryRetrieveResponse</code>
- <code title="get /v1/operations/deliveries">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">list</a>({ ...params }) -> DeliveryListResponse</code>

## Departments

Types:

- <code><a href="./src/resources/operations/departments.ts">Department</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/departments.ts">DepartmentDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments.ts">create</a>({ ...params }) -> Department</code>
- <code title="get /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">retrieve</a>(id, { ...params }) -> Department</code>
- <code title="patch /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">update</a>(id, { ...params }) -> Department</code>
- <code title="get /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments.ts">list</a>({ ...params }) -> ListDepartment</code>
- <code title="delete /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">delete</a>(id) -> DepartmentDeleteResponse</code>

## EdiRuns

Types:

- <code><a href="./src/resources/operations/edi-runs.ts">EdiRun</a></code>
- <code><a href="./src/resources/operations/edi-runs.ts">EdiRunRetrieveEdiRunsResponse</a></code>

Methods:

- <code title="get /v1/operations/edi-runs/{id}">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">retrieve</a>(id) -> EdiRun</code>
- <code title="get /v1/operations/edi-runs">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">retrieveEdiRuns</a>({ ...params }) -> EdiRunRetrieveEdiRunsResponse</code>

## Edi

### Actions

Methods:

- <code title="post /v1/operations/edi/actions/resubmit-invoice">client.operations.edi.actions.<a href="./src/resources/operations/edi/actions.ts">resubmitInvoice</a>({ ...params }) -> MessageResource</code>
- <code title="put /v1/operations/edi/actions/pull-orders">client.operations.edi.actions.<a href="./src/resources/operations/edi/actions.ts">updatePullOrders</a>() -> MessageResource</code>

## InventoryChangeLogs

Types:

- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">InventoryChangeLog</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">InventoryChangeLogRetrieveInventoryChangeLogsResponse</a></code>

Methods:

- <code title="get /v1/operations/inventory-change-logs/{id}">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">retrieve</a>(id, { ...params }) -> InventoryChangeLog</code>
- <code title="get /v1/operations/inventory-change-logs">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">retrieveInventoryChangeLogs</a>({ ...params }) -> InventoryChangeLogRetrieveInventoryChangeLogsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/inventory-change-logs/actions.ts">ActionRetrieveExportResponse</a></code>

Methods:

- <code title="get /v1/operations/inventory-change-logs/actions/export">client.operations.inventoryChangeLogs.actions.<a href="./src/resources/operations/inventory-change-logs/actions.ts">retrieveExport</a>({ ...params }) -> ActionRetrieveExportResponse</code>

## LocationTypes

Types:

- <code><a href="./src/resources/operations/location-types.ts">LocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">LocationTypeRetrieveLocationTypesResponse</a></code>

Methods:

- <code title="get /v1/operations/location-types/{id}">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieve</a>(id) -> LocationType</code>
- <code title="get /v1/operations/location-types">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieveLocationTypes</a>({ ...params }) -> LocationTypeRetrieveLocationTypesResponse</code>

## Locations

Types:

- <code><a href="./src/resources/operations/locations.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/locations.ts">Location</a></code>
- <code><a href="./src/resources/operations/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="get /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">retrieve</a>(id, { ...params }) -> Location</code>
- <code title="patch /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">update</a>(id, { ...params }) -> Location</code>
- <code title="get /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">list</a>({ ...params }) -> ListLocation</code>
- <code title="delete /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">delete</a>(id) -> LocationDeleteResponse</code>

## Machines

Types:

- <code><a href="./src/resources/operations/machines.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/machines.ts">Machine</a></code>
- <code><a href="./src/resources/operations/machines.ts">MachineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines.ts">create</a>({ ...params }) -> Machine</code>
- <code title="get /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">retrieve</a>(id, { ...params }) -> Machine</code>
- <code title="patch /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">update</a>(id, { ...params }) -> Machine</code>
- <code title="get /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines.ts">list</a>({ ...params }) -> ListMachine</code>
- <code title="delete /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">delete</a>(id) -> MachineDeleteResponse</code>

## Picks

Types:

- <code><a href="./src/resources/operations/picks/picks.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickListResponse</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickRetrieveShipmentsResponse</a></code>

Methods:

- <code title="get /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieve</a>(id, { ...params }) -> PickDetail</code>
- <code title="patch /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">update</a>(id, { ...params }) -> PickDetail</code>
- <code title="get /v1/operations/picks">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">list</a>({ ...params }) -> PickListResponse</code>
- <code title="get /v1/operations/picks/{id}/shipments">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieveShipments</a>(id, { ...params }) -> PickRetrieveShipmentsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/picks/actions.ts">ActionPackResponse</a></code>

Methods:

- <code title="post /v1/operations/picks/{id}/actions/pack">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">pack</a>(id, { ...params }) -> ActionPackResponse</code>
- <code title="put /v1/operations/picks/{id}/actions/pick">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">updatePick</a>(id) -> PickDetail</code>
- <code title="put /v1/operations/picks/{id}/actions/void">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">updateVoid</a>(id) -> PickDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/picks/lines/lines.ts">PickLineDetail</a></code>

Methods:

- <code title="patch /v1/operations/picks/{pick_id}/lines/{id}">client.operations.picks.lines.<a href="./src/resources/operations/picks/lines/lines.ts">update</a>(id, { ...params }) -> PickLineDetail</code>

#### Actions

Methods:

- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/pick">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">updatePick</a>(id, { ...params }) -> PickLineDetail</code>
- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/void">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">updateVoid</a>(id, { ...params }) -> PickLineDetail</code>

## ProductionFlows

Types:

- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowRetrieveResponse</a></code>

Methods:

- <code title="get /v1/operations/production-flows/by-item/{item_id}">client.operations.productionFlows.<a href="./src/resources/operations/production-flows/production-flows.ts">retrieve</a>(itemID, { ...params }) -> ProductionFlowRetrieveResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-flows/actions.ts">ActionConnectStepsResponse</a></code>

Methods:

- <code title="post /v1/operations/production-flows/actions/connect-steps">client.operations.productionFlows.actions.<a href="./src/resources/operations/production-flows/actions.ts">connectSteps</a>({ ...params }) -> ActionConnectStepsResponse</code>

## ProductionRuns

Types:

- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunDetail</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunDeleteResponse</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunRetrieveProductionRunsResponse</a></code>

Methods:

- <code title="get /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">retrieve</a>(id, { ...params }) -> ProductionRunDetail</code>
- <code title="patch /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">update</a>(id, { ...params }) -> ProductionRunDetail</code>
- <code title="delete /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">delete</a>(id) -> ProductionRunDeleteResponse</code>
- <code title="post /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">productionRuns</a>({ ...params }) -> ProductionRunDetail</code>
- <code title="get /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">retrieveProductionRuns</a>({ ...params }) -> ProductionRunRetrieveProductionRunsResponse</code>

### Batches

Types:

- <code><a href="./src/resources/operations/production-runs/batches.ts">ListBatch</a></code>

Methods:

- <code title="post /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">create</a>(id, { ...params }) -> ListBatch</code>
- <code title="get /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">list</a>(id, { ...params }) -> ListBatch</code>

## ProductionSteps

Types:

- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateRateInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionStepDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">retrieve</a>(id, { ...params }) -> ProductionStep</code>
- <code title="patch /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">update</a>(id, { ...params }) -> ProductionStep</code>
- <code title="delete /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">delete</a>(id) -> ProductionStepDeleteResponse</code>
- <code title="post /v1/operations/production-steps">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">productionSteps</a>({ ...params }) -> ProductionStep</code>
- <code title="get /v1/operations/production-steps">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">retrieveProductionSteps</a>({ ...params }) -> ListProductionStep</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-steps/actions.ts">ActionBulkCreateResponse</a></code>

Methods:

- <code title="post /v1/operations/production-steps/actions/bulk-create">client.operations.productionSteps.actions.<a href="./src/resources/operations/production-steps/actions.ts">bulkCreate</a>({ ...params }) -> ActionBulkCreateResponse</code>

### Consumptions

Types:

- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Consumption</a></code>

Methods:

- <code title="post /v1/operations/production-steps/{production_step_id}/consumptions">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">create</a>(productionStepID, { ...params }) -> Consumption</code>
- <code title="get /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">retrieve</a>(id, { ...params }) -> Consumption</code>
- <code title="patch /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">update</a>(id, { ...params }) -> Consumption</code>
- <code title="delete /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">delete</a>(id, { ...params }) -> Consumption</code>

### Productions

Types:

- <code><a href="./src/resources/operations/production-steps/productions.ts">ProductionOutput</a></code>

Methods:

- <code title="get /v1/operations/production-steps/{production_step_id}/productions/{id}">client.operations.productionSteps.productions.<a href="./src/resources/operations/production-steps/productions.ts">retrieve</a>(id, { ...params }) -> ProductionOutput</code>
- <code title="patch /v1/operations/production-steps/{production_step_id}/productions/{id}">client.operations.productionSteps.productions.<a href="./src/resources/operations/production-steps/productions.ts">update</a>(id, { ...params }) -> ProductionOutput</code>

## PurchaseOrders

Types:

- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListSalesOrderStatus</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Supplier</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderDeleteResponse</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderRetrievePurchaseOrdersResponse</a></code>

Methods:

- <code title="get /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieve</a>(id, { ...params }) -> PurchaseOrderDetail</code>
- <code title="patch /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">update</a>(id, { ...params }) -> PurchaseOrderDetail</code>
- <code title="delete /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">delete</a>(id) -> PurchaseOrderDeleteResponse</code>
- <code title="post /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">purchaseOrders</a>({ ...params }) -> PurchaseOrderDetail</code>
- <code title="get /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrievePurchaseOrders</a>({ ...params }) -> PurchaseOrderRetrievePurchaseOrdersResponse</code>
- <code title="get /v1/operations/purchase-orders/statuses">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>

### Actions

Types:

- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/actions/bulk-delete">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/operations/purchase-orders/{id}/actions/change-status">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">updateChangeStatus</a>(id, { ...params }) -> PurchaseOrderDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/purchase-orders/lines.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">PurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/{id}/lines">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">create</a>(id, { ...params }) -> PurchaseOrderLineDetail</code>
- <code title="patch /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">update</a>(lineID, { ...params }) -> PurchaseOrderLineDetail</code>
- <code title="delete /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

## ReceivingOrders

Types:

- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ReceivingOrderRetrieveReceivingOrdersResponse</a></code>

Methods:

- <code title="get /v1/operations/receiving-orders/{id}">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">retrieve</a>(id) -> ReceivingOrder</code>
- <code title="get /v1/operations/receiving-orders">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">retrieveReceivingOrders</a>({ ...params }) -> ReceivingOrderRetrieveReceivingOrdersResponse</code>

### Actions

Methods:

- <code title="post /v1/operations/receiving-orders/{id}/actions/stock">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">stock</a>(id, { ...params }) -> ReceivingOrder</code>
- <code title="put /v1/operations/receiving-orders/{id}/actions/receive">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">updateReceive</a>(id) -> ReceivingOrder</code>
- <code title="put /v1/operations/receiving-orders/{id}/actions/void">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">updateVoid</a>(id) -> ReceivingOrder</code>

### Lines

Types:

- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ReceivingOrderLine</a></code>

Methods:

- <code title="patch /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}">client.operations.receivingOrders.lines.<a href="./src/resources/operations/receiving-orders/lines/lines.ts">update</a>(id, { ...params }) -> ReceivingOrderLine</code>

#### Actions

Methods:

- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/receive">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">updateReceive</a>(id, { ...params }) -> ReceivingOrderLine</code>
- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/void">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">updateVoid</a>(id, { ...params }) -> ReceivingOrderLine</code>

## ScanningStations

Types:

- <code><a href="./src/resources/operations/scanning-stations.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationDeleteResponse</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationConsumptionsResponse</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationUpdateProductionStepsResponse</a></code>

Methods:

- <code title="get /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieve</a>(id, { ...params }) -> ScanningStation</code>
- <code title="patch /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">update</a>(id, { ...params }) -> ScanningStation</code>
- <code title="delete /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">delete</a>(id) -> ScanningStationDeleteResponse</code>
- <code title="post /v1/operations/scanning-stations/{id}/consumptions">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">consumptions</a>(id, { ...params }) -> ScanningStationConsumptionsResponse</code>
- <code title="get /v1/operations/scanning-stations/{id}/batches">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieveBatches</a>(id, { ...params }) -> ListBatch</code>
- <code title="get /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieveScanningStations</a>({ ...params }) -> ListScanningStation</code>
- <code title="post /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">scanningStations</a>({ ...params }) -> ScanningStation</code>
- <code title="put /v1/operations/scanning-stations/{id}/production-steps">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">updateProductionSteps</a>(id, { ...params }) -> ScanningStationUpdateProductionStepsResponse</code>

## Shipments

Types:

- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentListResponse</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">retrieve</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="patch /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">update</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="get /v1/operations/shipments">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">list</a>({ ...params }) -> ShipmentListResponse</code>
- <code title="delete /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">delete</a>(id) -> ShipmentDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/shipments/actions.ts">ParcelInput</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ActionEstimateRateResponse</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ActionRateShopResponse</a></code>

Methods:

- <code title="post /v1/operations/shipments/actions/estimate-rate">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">estimateRate</a>({ ...params }) -> ActionEstimateRateResponse</code>
- <code title="post /v1/operations/shipments/actions/rate-shop">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">rateShop</a>({ ...params }) -> ActionRateShopResponse</code>
- <code title="post /v1/operations/shipments/{id}/actions/ship">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">ship</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="post /v1/operations/shipments/{id}/actions/void">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">void</a>(id) -> ShipmentDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/shipments/lines.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">LineListResponse</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/shipments/{shipment_id}/lines">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">create</a>(shipmentID, { ...params }) -> ShipmentLine</code>
- <code title="get /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">retrieve</a>(id, { ...params }) -> ShipmentLine</code>
- <code title="patch /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">update</a>(id, { ...params }) -> ShipmentLine</code>
- <code title="get /v1/operations/shipments/{shipment_id}/lines">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">list</a>(shipmentID, { ...params }) -> LineListResponse</code>
- <code title="delete /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">delete</a>(id, { ...params }) -> LineDeleteResponse</code>

## ShippingCases

Types:

- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCase</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCaseDeleteResponse</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCaseRetrieveLabelResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">retrieve</a>(id, { ...params }) -> ShippingCase</code>
- <code title="patch /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">update</a>(id, { ...params }) -> ShippingCase</code>
- <code title="delete /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">delete</a>(id) -> ShippingCaseDeleteResponse</code>
- <code title="get /v1/operations/shipping-cases/{id}/label">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">retrieveLabel</a>(id) -> ShippingCaseRetrieveLabelResponse</code>

## ShippingTerms

Types:

- <code><a href="./src/resources/operations/shipping-terms.ts">QuantityInput</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermDeleteResponse</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermRetrieveShippingTermsResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieve</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="patch /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">update</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="delete /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">delete</a>(id) -> ShippingTermDeleteResponse</code>
- <code title="get /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieveShippingTerms</a>({ ...params }) -> ShippingTermRetrieveShippingTermsResponse</code>
- <code title="post /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">shippingTerms</a>({ ...params }) -> ShippingTerm</code>

## Suppliers

Types:

- <code><a href="./src/resources/operations/suppliers/suppliers.ts">SupplierDetail</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">SupplierListResponse</a></code>

Methods:

- <code title="post /v1/operations/suppliers">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">create</a>({ ...params }) -> SupplierDetail</code>
- <code title="get /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">retrieve</a>(id, { ...params }) -> SupplierDetail</code>
- <code title="patch /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">update</a>(id, { ...params }) -> SupplierDetail</code>
- <code title="get /v1/operations/suppliers">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">list</a>({ ...params }) -> SupplierListResponse</code>
- <code title="delete /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">delete</a>(id) -> SupplierDetail</code>

### Actions

Types:

- <code><a href="./src/resources/operations/suppliers/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/suppliers/actions/bulk-delete">client.operations.suppliers.actions.<a href="./src/resources/operations/suppliers/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>

### Materials

Types:

- <code><a href="./src/resources/operations/suppliers/materials.ts">SupplierMaterial</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">MaterialListResponse</a></code>

Methods:

- <code title="post /v1/operations/suppliers/{supplier_id}/materials">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">create</a>(supplierID, { ...params }) -> SupplierMaterial</code>
- <code title="get /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">retrieve</a>(id, { ...params }) -> SupplierMaterial</code>
- <code title="patch /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">update</a>(id, { ...params }) -> SupplierMaterial</code>
- <code title="get /v1/operations/suppliers/{supplier_id}/materials">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">list</a>(supplierID, { ...params }) -> MaterialListResponse</code>
- <code title="delete /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">delete</a>(id, { ...params }) -> SupplierMaterial</code>

# Sales

Types:

- <code><a href="./src/resources/sales/sales.ts">SaleCheckoutSessionsResponse</a></code>

Methods:

- <code title="post /v1/sales/checkout-sessions">client.sales.<a href="./src/resources/sales/sales.ts">checkoutSessions</a>({ ...params }) -> SaleCheckoutSessionsResponse</code>

## AccountGroups

Types:

- <code><a href="./src/resources/sales/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieve</a>(id) -> AccountGroup</code>
- <code title="patch /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">update</a>(id, { ...params }) -> AccountGroup</code>
- <code title="delete /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">delete</a>(id) -> AccountGroupDeleteResponse</code>
- <code title="post /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">accountGroups</a>({ ...params }) -> AccountGroup</code>
- <code title="get /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieveAccountGroups</a>({ ...params }) -> ListAccountGroup</code>

## AccountPrices

Types:

- <code><a href="./src/resources/sales/account-prices.ts">AccountPrice</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountPriceDeleteResponse</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountPriceRetrieveAccountPricesResponse</a></code>

Methods:

- <code title="get /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">retrieve</a>(id, { ...params }) -> AccountPrice</code>
- <code title="patch /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">update</a>(id, { ...params }) -> AccountPrice</code>
- <code title="delete /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">delete</a>(id) -> AccountPriceDeleteResponse</code>
- <code title="post /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">accountPrices</a>({ ...params }) -> AccountPrice</code>
- <code title="get /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">retrieveAccountPrices</a>({ ...params }) -> AccountPriceRetrieveAccountPricesResponse</code>

## AccountStatuses

Types:

- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatusRetrieveAccountStatusesResponse</a></code>

Methods:

- <code title="get /v1/sales/account-statuses/{id}">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieve</a>(id, { ...params }) -> AccountStatus</code>
- <code title="get /v1/sales/account-statuses">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieveAccountStatuses</a>({ ...params }) -> AccountStatusRetrieveAccountStatusesResponse</code>

## AccountUsers

### SalesTargets

Types:

- <code><a href="./src/resources/sales/account-users/sales-targets.ts">SalesTarget</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">SalesTargetRetrieveSalesTargetsResponse</a></code>

Methods:

- <code title="put /v1/sales/account-users/{id}/sales-targets/{target_id}">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">update</a>(targetID, { ...params }) -> SalesTarget</code>
- <code title="get /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">retrieveSalesTargets</a>(id, { ...params }) -> SalesTargetRetrieveSalesTargetsResponse</code>
- <code title="post /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">salesTargets</a>(id, { ...params }) -> SalesTarget</code>

## Accounts

### Territories

Types:

- <code><a href="./src/resources/sales/accounts/territories.ts">Territory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">TerritoryListResponse</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">TerritoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">create</a>(accountID, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">retrieve</a>(id, { ...params }) -> Territory</code>
- <code title="patch /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">update</a>(id, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">list</a>(accountID, { ...params }) -> TerritoryListResponse</code>
- <code title="delete /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">delete</a>(id, { ...params }) -> TerritoryDeleteResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/sales/addresses.ts">Address</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="get /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">retrieve</a>(id) -> Address</code>
- <code title="patch /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">update</a>(id, { ...params }) -> Address</code>
- <code title="get /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">list</a>({ ...params }) -> AddressListResponse</code>
- <code title="delete /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

## Customers

Types:

- <code><a href="./src/resources/sales/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDeleteResponse</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerRegistrationResponse</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerRetrieveFrequentlyOrderedProductsResponse</a></code>

Methods:

- <code title="post /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="get /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieve</a>(id, { ...params }) -> Customer</code>
- <code title="patch /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">list</a>({ ...params }) -> ListCustomer</code>
- <code title="delete /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">delete</a>(id) -> CustomerDeleteResponse</code>
- <code title="post /v1/sales/customers/registration">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">registration</a>({ ...params }) -> CustomerRegistrationResponse</code>
- <code title="get /v1/sales/customers/{id}/frequently-ordered-products">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieveFrequentlyOrderedProducts</a>(id) -> CustomerRetrieveFrequentlyOrderedProductsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/sales/customers/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/customers/actions/bulk-delete">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/sales/customers/{id}/actions/merge">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">merge</a>(id, { ...params }) -> Customer</code>

## OrderDiscounts

Types:

- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">OrderDiscountRetrieveOrderDiscountsResponse</a></code>

Methods:

- <code title="get /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">retrieve</a>(id) -> OrderDiscount</code>
- <code title="patch /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">update</a>(id, { ...params }) -> OrderDiscount</code>
- <code title="delete /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">delete</a>(id) -> OrderDiscount</code>
- <code title="post /v1/sales/order-discounts">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">orderDiscounts</a>({ ...params }) -> OrderDiscount</code>
- <code title="get /v1/sales/order-discounts">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">retrieveOrderDiscounts</a>({ ...params }) -> OrderDiscountRetrieveOrderDiscountsResponse</code>

### Actions

Methods:

- <code title="post /v1/sales/order-discounts/actions/find-by-code">client.sales.orderDiscounts.actions.<a href="./src/resources/sales/order-discounts/actions.ts">findByCode</a>({ ...params }) -> OrderDiscount</code>

## Priorities

Types:

- <code><a href="./src/resources/sales/priorities.ts">Priority</a></code>
- <code><a href="./src/resources/sales/priorities.ts">PriorityListResponse</a></code>

Methods:

- <code title="get /v1/sales/priorities/{id}">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">retrieve</a>(id, { ...params }) -> Priority</code>
- <code title="get /v1/sales/priorities">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">list</a>({ ...params }) -> PriorityListResponse</code>

## ProductLineAccess

### AccountGroups

Types:

- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupDeleteResponse</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupRetrieveAccountGroupsResponse</a></code>

Methods:

- <code title="get /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">retrieve</a>(accountGroupID) -> AccountGroupProductLineAccess</code>
- <code title="patch /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">update</a>(accountGroupID, { ...params }) -> AccountGroupProductLineAccess</code>
- <code title="delete /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">delete</a>(accountGroupID) -> AccountGroupDeleteResponse</code>
- <code title="post /v1/sales/product-line-access/account-groups">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">accountGroups</a>({ ...params }) -> AccountGroupProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/account-groups">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">retrieveAccountGroups</a>({ ...params }) -> AccountGroupRetrieveAccountGroupsResponse</code>

### Customers

Types:

- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/product-line-access/customers">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">create</a>({ ...params }) -> CustomerProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">retrieve</a>(customerID) -> CustomerProductLineAccess</code>
- <code title="patch /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">update</a>(customerID, { ...params }) -> CustomerProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/customers">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="delete /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">delete</a>(customerID) -> CustomerDeleteResponse</code>

## RegistrationFlows

Types:

- <code><a href="./src/resources/sales/registration-flows.ts">ListRegistrationFlowOption</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlow</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlowDeleteResponse</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlowRetrieveRegistrationFlowsResponse</a></code>

Methods:

- <code title="get /v1/sales/registration-flows/by-slug/{slug}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">retrieve</a>(slug) -> RegistrationFlow</code>
- <code title="patch /v1/sales/registration-flows/{id}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">update</a>(id, { ...params }) -> RegistrationFlow</code>
- <code title="delete /v1/sales/registration-flows/{id}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">delete</a>(id) -> RegistrationFlowDeleteResponse</code>
- <code title="post /v1/sales/registration-flows">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">registrationFlows</a>({ ...params }) -> RegistrationFlow</code>
- <code title="get /v1/sales/registration-flows">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">retrieveRegistrationFlows</a>({ ...params }) -> RegistrationFlowRetrieveRegistrationFlowsResponse</code>

## SalesOrders

Types:

- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderEmailContactInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDeleteResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderCheckoutResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderRetrieveSalesOrdersResponse</a></code>

Methods:

- <code title="get /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieve</a>(id, { ...params }) -> SalesOrderDetail</code>
- <code title="patch /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">update</a>(id, { ...params }) -> SalesOrderDetail</code>
- <code title="delete /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">delete</a>(id) -> SalesOrderDeleteResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/checkout">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">checkout</a>(id, { ...params }) -> SalesOrderCheckoutResponse</code>
- <code title="get /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieveSalesOrders</a>({ ...params }) -> SalesOrderRetrieveSalesOrdersResponse</code>
- <code title="get /v1/sales/sales-orders/statuses">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>
- <code title="post /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">salesOrders</a>({ ...params }) -> SalesOrderDetail</code>

### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/actions.ts">ActionBulkDeleteResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ActionCreateProductionRunResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/actions/bulk-delete">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/create-production-run">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">createProductionRun</a>(id) -> ActionCreateProductionRunResponse</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/change-status">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">updateChangeStatus</a>(id, { ...params }) -> SalesOrderDetail</code>

### Lines

Types:

- <code><a href="./src/resources/sales/sales-orders/lines.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">create</a>(id, { ...params }) -> SalesOrderLineDetail</code>
- <code title="patch /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">update</a>(lineID, { ...params }) -> SalesOrderLineDetail</code>
- <code title="delete /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

## VolumeDiscounts

Types:

- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscount</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscountDeleteResponse</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscountRetrieveVolumeDiscountsResponse</a></code>

Methods:

- <code title="get /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">retrieve</a>(id, { ...params }) -> VolumeDiscount</code>
- <code title="patch /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">update</a>(id, { ...params }) -> VolumeDiscount</code>
- <code title="delete /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">delete</a>(id) -> VolumeDiscountDeleteResponse</code>
- <code title="get /v1/sales/volume-discounts">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">retrieveVolumeDiscounts</a>({ ...params }) -> VolumeDiscountRetrieveVolumeDiscountsResponse</code>
- <code title="post /v1/sales/volume-discounts">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">volumeDiscounts</a>({ ...params }) -> VolumeDiscount</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookStripeResponse</a></code>

Methods:

- <code title="post /v1/webhooks/stripe">client.webhooks.<a href="./src/resources/webhooks.ts">stripe</a>({ ...params }) -> WebhookStripeResponse</code>
