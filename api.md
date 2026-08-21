# Healthz

Types:

- <code><a href="./src/resources/healthz.ts">Healthcheck</a></code>

Methods:

- <code title="get /healthz">client.healthz.<a href="./src/resources/healthz.ts">list</a>() -> Healthcheck</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">RegisterRequest</a></code>
- <code><a href="./src/resources/auth/auth.ts">UpdateScannerPasswordRequest</a></code>
- <code><a href="./src/resources/auth/auth.ts">User</a></code>
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

- <code><a href="./src/resources/auth/actions.ts">LoginRequest</a></code>
- <code><a href="./src/resources/auth/actions.ts">MagicLoginRequest</a></code>

Methods:

- <code title="post /v1/auth/actions/login">client.auth.actions.<a href="./src/resources/auth/actions.ts">login</a>({ ...params }) -> User</code>
- <code title="post /v1/auth/actions/magic-login">client.auth.actions.<a href="./src/resources/auth/actions.ts">magicLogin</a>({ ...params }) -> User</code>

## Passwords

Types:

- <code><a href="./src/resources/auth/passwords/passwords.ts">UpdatePasswordRequest</a></code>
- <code><a href="./src/resources/auth/passwords/passwords.ts">PasswordCreateResponse</a></code>

Methods:

- <code title="post /v1/auth/passwords">client.auth.passwords.<a href="./src/resources/auth/passwords/passwords.ts">create</a>({ ...params }) -> PasswordCreateResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/passwords/actions.ts">RequestPasswordResetRequest</a></code>
- <code><a href="./src/resources/auth/passwords/actions.ts">ResetPasswordRequest</a></code>
- <code><a href="./src/resources/auth/passwords/actions.ts">ActionRequestResetResponse</a></code>
- <code><a href="./src/resources/auth/passwords/actions.ts">ActionResetResponse</a></code>

Methods:

- <code title="post /v1/auth/passwords/actions/request-reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">requestReset</a>({ ...params }) -> ActionRequestResetResponse</code>
- <code title="post /v1/auth/passwords/actions/reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">reset</a>({ ...params }) -> ActionResetResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Account</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">AccountBranding</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">AccountPortal</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Address</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreateAPIKeyRequest</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Geolocation</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">ListAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Owner</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">PageInfo</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Role</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="post /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">create</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="get /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieve</a>(id, { ...params }) -> APIKey</code>
- <code title="get /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">list</a>({ ...params }) -> ListAPIKey</code>
- <code title="delete /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">delete</a>(id) -> APIKeyDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/api-keys/actions.ts">RotateAPIKeyRequest</a></code>

Methods:

- <code title="post /v1/auth/api-keys/actions/fetch-doc-api-key">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">fetchDocAPIKey</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="post /v1/auth/api-keys/{id}/actions/rotate">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">rotate</a>(id, { ...params }) -> CreatedAPIKey</code>

## RegistrationSessions

Types:

- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">CompleteRegistrationResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">CreateRegistrationSessionRequest</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">CreateSessionResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">CreateUserRequest</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">CreateUserResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">ListRegistrationSession</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSession</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionAccount</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionAddress</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">RegistrationSessionUser</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">UpdateSessionDataRequest</a></code>
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">UpdateSessionRequest</a></code>

Methods:

- <code title="post /v1/auth/registration-sessions">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">create</a>({ ...params }) -> CreateSessionResponse</code>
- <code title="get /v1/auth/registration-sessions/{session_id}">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">retrieve</a>(sessionID) -> RegistrationSession</code>
- <code title="patch /v1/auth/registration-sessions/{session_id}">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">update</a>(sessionID, { ...params }) -> RegistrationSession</code>
- <code title="get /v1/auth/registration-sessions">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">list</a>({ ...params }) -> ListRegistrationSession</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/accounts">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">accounts</a>(sessionID) -> CompleteRegistrationResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/users">client.auth.registrationSessions.<a href="./src/resources/auth/registration-sessions/registration-sessions.ts">users</a>(sessionID, { ...params }) -> CreateUserResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ConfirmPaymentRequest</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ConfirmPaymentResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">SetupBillingResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ActionResendVerificationEmailResponse</a></code>

Methods:

- <code title="post /v1/auth/registration-sessions/{session_id}/actions/confirm-payment">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">confirmPayment</a>(sessionID, { ...params }) -> ConfirmPaymentResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/resend-verification-email">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">resendVerificationEmail</a>(sessionID) -> ActionResendVerificationEmailResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/setup-billing">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">setupBilling</a>(sessionID) -> SetupBillingResponse</code>
- <code title="put /v1/auth/registration-sessions/{token}/actions/verify-token">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">verifyToken</a>(token) -> RegistrationSession</code>

# Identity

Types:

- <code><a href="./src/resources/identity/identity.ts">ListPermission</a></code>
- <code><a href="./src/resources/identity/identity.ts">ListPermissionGroup</a></code>
- <code><a href="./src/resources/identity/identity.ts">Permission</a></code>
- <code><a href="./src/resources/identity/identity.ts">PermissionGroup</a></code>

Methods:

- <code title="get /v1/identity/permission-groups">client.identity.<a href="./src/resources/identity/identity.ts">retrievePermissionGroups</a>({ ...params }) -> ListPermissionGroup</code>

## Me

Methods:

- <code title="get /v1/identity/me">client.identity.me.<a href="./src/resources/identity/me/me.ts">list</a>() -> User</code>

### Tenancy

Types:

- <code><a href="./src/resources/identity/me/tenancy.ts">CustomerAccountSummary</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListCustomerAccountSummary</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListTenancyOtherAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListTenancySandboxAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">SwitchAccountRequest</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">Tenancy</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyAccountPlan</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyCurrentAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyOtherAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyOwnerAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancyPendingRegistration</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">TenancySandboxAccount</a></code>

Methods:

- <code title="put /v1/identity/me/tenancy">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">update</a>({ ...params }) -> Tenancy</code>
- <code title="get /v1/identity/me/tenancy">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">list</a>() -> Tenancy</code>
- <code title="get /v1/identity/me/tenancy/customer-accounts/{vendor_account_id}">client.identity.me.tenancy.<a href="./src/resources/identity/me/tenancy.ts">retrieveCustomerAccounts</a>(vendorAccountID, { ...params }) -> ListCustomerAccountSummary</code>

## AccountUsers

Types:

- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Attribute</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Consumption</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">CreateAccountUserRequest</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Department</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Item</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ItemCategory</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListAccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListAttribute</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListConsumption</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListLocation</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListMachine</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListProperty</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Location</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">LocationTypeCode</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Machine</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">NotificationPreferenceItem</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ProductionStep</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Property</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Quantity</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Rate</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ScanningStation</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Unit</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">UnitGroup</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">UpdateAccountUserRequest</a></code>

Methods:

- <code title="post /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">create</a>({ ...params }) -> AccountUser</code>
- <code title="get /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieve</a>(id, { ...params }) -> AccountUser</code>
- <code title="patch /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">update</a>(id, { ...params }) -> AccountUser</code>
- <code title="get /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">list</a>({ ...params }) -> ListAccountUser</code>

### Actions

Types:

- <code><a href="./src/resources/identity/account-users/actions.ts">ActionActivateResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionDisableResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionRemoveResponse</a></code>

Methods:

- <code title="put /v1/identity/account-users/{id}/actions/activate">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">activate</a>(id) -> ActionActivateResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/disable">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">disable</a>(id) -> ActionDisableResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/remove">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">remove</a>(id) -> ActionRemoveResponse</code>

## Users

Types:

- <code><a href="./src/resources/identity/users/users.ts">UpdateUserRequest</a></code>

Methods:

- <code title="get /v1/identity/users/{id}">client.identity.users.<a href="./src/resources/identity/users/users.ts">retrieve</a>(id) -> User</code>
- <code title="patch /v1/identity/users/{id}">client.identity.users.<a href="./src/resources/identity/users/users.ts">update</a>(id, { ...params }) -> User</code>

### Photo

Types:

- <code><a href="./src/resources/identity/users/photo.ts">UserPhotoUploadResult</a></code>
- <code><a href="./src/resources/identity/users/photo.ts">UserPhotoURL</a></code>

Methods:

- <code title="put /v1/identity/users/{id}/photo">client.identity.users.photo.<a href="./src/resources/identity/users/photo.ts">update</a>(id) -> UserPhotoUploadResult</code>
- <code title="get /v1/identity/users/{id}/photo">client.identity.users.photo.<a href="./src/resources/identity/users/photo.ts">list</a>(id) -> UserPhotoURL</code>

## Accounts

Types:

- <code><a href="./src/resources/identity/accounts/accounts.ts">AccountLogoURL</a></code>
- <code><a href="./src/resources/identity/accounts/accounts.ts">AccountPhotoUploadResult</a></code>
- <code><a href="./src/resources/identity/accounts/accounts.ts">UpdateAccountRequest</a></code>

Methods:

- <code title="get /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="patch /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /v1/identity/accounts/{id}/logo">client.identity.accounts.<a href="./src/resources/identity/accounts/accounts.ts">retrieveLogo</a>(id) -> AccountLogoURL</code>
- <code title="put /v1/identity/accounts/{id}/photo">client.identity.accounts.<a href="./src/resources/identity/accounts/accounts.ts">updatePhoto</a>(id) -> AccountPhotoUploadResult</code>

### Favicon

Types:

- <code><a href="./src/resources/identity/accounts/favicon.ts">AccountFaviconURL</a></code>
- <code><a href="./src/resources/identity/accounts/favicon.ts">FaviconUpdateResponse</a></code>

Methods:

- <code title="put /v1/identity/accounts/{id}/favicon">client.identity.accounts.favicon.<a href="./src/resources/identity/accounts/favicon.ts">update</a>(id) -> FaviconUpdateResponse</code>
- <code title="get /v1/identity/accounts/{id}/favicon">client.identity.accounts.favicon.<a href="./src/resources/identity/accounts/favicon.ts">list</a>(id) -> AccountFaviconURL</code>

## ChildAccounts

Types:

- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccount</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ListChildAccount</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccountDeleteResponse</a></code>

Methods:

- <code title="put /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">update</a>(childAccountID) -> ChildAccount</code>
- <code title="get /v1/identity/child-accounts">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">list</a>({ ...params }) -> ListChildAccount</code>
- <code title="delete /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">delete</a>(childAccountID) -> ChildAccountDeleteResponse</code>

## Roles

Types:

- <code><a href="./src/resources/identity/roles.ts">CreateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">ListRole</a></code>
- <code><a href="./src/resources/identity/roles.ts">UpdateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="post /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">retrieve</a>(id, { ...params }) -> Role</code>
- <code title="patch /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">update</a>(id, { ...params }) -> Role</code>
- <code title="get /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">list</a>({ ...params }) -> ListRole</code>
- <code title="delete /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">delete</a>(id) -> RoleDeleteResponse</code>

# Core

Types:

- <code><a href="./src/resources/core/core.ts">Entity</a></code>
- <code><a href="./src/resources/core/core.ts">ListEntity</a></code>

Methods:

- <code title="get /v1/core/search">client.core.<a href="./src/resources/core/core.ts">retrieveSearch</a>({ ...params }) -> ListEntity</code>

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">CreateSandboxRequest</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">ListSandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> ListSandbox</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">Actor</a></code>
- <code><a href="./src/resources/core/request-logs.ts">ListRequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLog</a></code>

Methods:

- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLog</code>
- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">list</a>({ ...params }) -> ListRequestLog</code>

## AuditEvents

Types:

- <code><a href="./src/resources/core/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListObjectType</a></code>

Methods:

- <code title="get /v1/core/audit-events/{id}">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieve</a>(id, { ...params }) -> AuditEvent</code>
- <code title="get /v1/core/audit-events">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">list</a>({ ...params }) -> ListAuditEvent</code>
- <code title="get /v1/core/audit-events/resource-types">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveResourceTypes</a>() -> ListObjectType</code>

## Addresses

Types:

- <code><a href="./src/resources/core/addresses/addresses.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">AddressDetailsResult</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">AddressSuggestion</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">ListAddressSuggestion</a></code>

Methods:

- <code title="get /v1/core/addresses/details/{id}">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveDetails</a>(id, { ...params }) -> AddressDetailsResult</code>
- <code title="get /v1/core/addresses/suggestions">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveSuggestions</a>({ ...params }) -> ListAddressSuggestion</code>

### Actions

Types:

- <code><a href="./src/resources/core/addresses/actions.ts">ValidateAddressRequest</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ValidatedAddress</a></code>

Methods:

- <code title="put /v1/core/addresses/actions/validate">client.core.addresses.actions.<a href="./src/resources/core/addresses/actions.ts">validate</a>({ ...params }) -> ValidatedAddress</code>

## EmailLogs

Types:

- <code><a href="./src/resources/core/email-logs.ts">EmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">ListEmailLog</a></code>

Methods:

- <code title="get /v1/core/email-logs/{id}">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieve</a>(id, { ...params }) -> EmailLog</code>
- <code title="get /v1/core/email-logs">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">list</a>({ ...params }) -> ListEmailLog</code>

## Jobs

Types:

- <code><a href="./src/resources/core/jobs.ts">Job</a></code>
- <code><a href="./src/resources/core/jobs.ts">JobExport</a></code>
- <code><a href="./src/resources/core/jobs.ts">JobResult</a></code>
- <code><a href="./src/resources/core/jobs.ts">ListJobResult</a></code>
- <code><a href="./src/resources/core/jobs.ts">QuotaInfo</a></code>
- <code><a href="./src/resources/core/jobs.ts">ResponseError</a></code>

Methods:

- <code title="get /v1/core/jobs/{id}">client.core.jobs.<a href="./src/resources/core/jobs.ts">retrieve</a>(id, { ...params }) -> Job</code>
- <code title="post /v1/core/jobs/{id}/cancel">client.core.jobs.<a href="./src/resources/core/jobs.ts">cancel</a>(id, { ...params }) -> Job</code>

## Analytics

Types:

- <code><a href="./src/resources/core/analytics.ts">AccountGroup</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsItem</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsLot</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsRate</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUnitGroup</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUnitGroupUnit</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeCustomerPricingRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeCustomerPricingResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveriesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveriesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveryPerformanceRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveryPerformanceResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDemandForecastRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDemandForecastResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeInventoryReceiptsRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeInventoryReceiptsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeManufacturingBatchRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeManufacturingBatchResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeManufacturingRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeManufacturingResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeMaterialsRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeMaterialsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeNewCustomersRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeNewCustomersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOeeRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOeeResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOeeTrendRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOeeTrendResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOpenBatchesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOpenBatchesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOrdersRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeProductionCostsRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeProductionCostsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeQuarterlyOrdersRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeQuarterlyOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeRealizedMarginsRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeRealizedMarginsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeSalesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeSalesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeScheduleAttainmentRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeScheduleAttainmentResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeWeeksOfSalesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AttainmentBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">Carrier</a></code>
- <code><a href="./src/resources/core/analytics.ts">ChartData</a></code>
- <code><a href="./src/resources/core/analytics.ts">ComputedQuantity</a></code>
- <code><a href="./src/resources/core/analytics.ts">ComputedRate</a></code>
- <code><a href="./src/resources/core/analytics.ts">Coordinate</a></code>
- <code><a href="./src/resources/core/analytics.ts">CostBreakdown</a></code>
- <code><a href="./src/resources/core/analytics.ts">Customer</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerPricingFinding</a></code>
- <code><a href="./src/resources/core/analytics.ts">CustomerPricingSummary</a></code>
- <code><a href="./src/resources/core/analytics.ts">DateTimeCoordinate</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryBacklogBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryBreakdown</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryChartData</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryLatenessBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryPerformance</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryStatistics</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastRow</a></code>
- <code><a href="./src/resources/core/analytics.ts">FrozenAdherence</a></code>
- <code><a href="./src/resources/core/analytics.ts">InventoryReceiptSummaryEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListAttainmentBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListCustomer</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListCustomerPricingFinding</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListDeliveryBacklogBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListDeliveryBreakdown</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListDeliveryLatenessBucket</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListDeliveryPerformance</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListDemandForecastRow</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListFrozenAdherence</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListOeeDepartment</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListOeeDowntimeReason</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListOeeTrendPeriod</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListRealizedMarginFinding</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/core/analytics.ts">ManufacturingMetrics</a></code>
- <code><a href="./src/resources/core/analytics.ts">MaterialAnalyticsEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">NewCustomersData</a></code>
- <code><a href="./src/resources/core/analytics.ts">OeeDepartment</a></code>
- <code><a href="./src/resources/core/analytics.ts">OeeDepartmentPlannedTime</a></code>
- <code><a href="./src/resources/core/analytics.ts">OeeDowntimeReason</a></code>
- <code><a href="./src/resources/core/analytics.ts">OeeTrendPeriod</a></code>
- <code><a href="./src/resources/core/analytics.ts">OpenBatchSummary</a></code>
- <code><a href="./src/resources/core/analytics.ts">OrderEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/core/analytics.ts">Priority</a></code>
- <code><a href="./src/resources/core/analytics.ts">ProductLine</a></code>
- <code><a href="./src/resources/core/analytics.ts">ProductionCostItem</a></code>
- <code><a href="./src/resources/core/analytics.ts">RealizedMarginFinding</a></code>
- <code><a href="./src/resources/core/analytics.ts">RealizedMarginSummary</a></code>
- <code><a href="./src/resources/core/analytics.ts">RevenueForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">SalesEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/core/analytics.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/core/analytics.ts">WeeksOfSalesItem</a></code>

Methods:

- <code title="get /v1/core/analytics/weeks-of-sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">retrieveWeeksOfSales</a>({ ...params }) -> AnalyzeWeeksOfSalesResponse</code>
- <code title="put /v1/core/analytics/customer-pricing">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateCustomerPricing</a>({ ...params }) -> AnalyzeCustomerPricingResponse</code>
- <code title="put /v1/core/analytics/deliveries">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDeliveries</a>({ ...params }) -> AnalyzeDeliveriesResponse</code>
- <code title="put /v1/core/analytics/delivery-performance">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDeliveryPerformance</a>({ ...params }) -> AnalyzeDeliveryPerformanceResponse</code>
- <code title="put /v1/core/analytics/demand-forecast">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDemandForecast</a>({ ...params }) -> AnalyzeDemandForecastResponse</code>
- <code title="put /v1/core/analytics/inventory-receipts">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateInventoryReceipts</a>({ ...params }) -> AnalyzeInventoryReceiptsResponse</code>
- <code title="put /v1/core/analytics/manufacturing">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturing</a>({ ...params }) -> AnalyzeManufacturingResponse</code>
- <code title="put /v1/core/analytics/manufacturing-batch">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturingBatch</a>({ ...params }) -> AnalyzeManufacturingBatchResponse</code>
- <code title="put /v1/core/analytics/materials">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateMaterials</a>({ ...params }) -> AnalyzeMaterialsResponse</code>
- <code title="put /v1/core/analytics/new-customers">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateNewCustomers</a>({ ...params }) -> AnalyzeNewCustomersResponse</code>
- <code title="put /v1/core/analytics/oee">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOee</a>({ ...params }) -> AnalyzeOeeResponse</code>
- <code title="put /v1/core/analytics/oee-trend">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOeeTrend</a>({ ...params }) -> AnalyzeOeeTrendResponse</code>
- <code title="put /v1/core/analytics/open-batches">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOpenBatches</a>({ ...params }) -> AnalyzeOpenBatchesResponse</code>
- <code title="put /v1/core/analytics/orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOrders</a>({ ...params }) -> AnalyzeOrdersResponse</code>
- <code title="put /v1/core/analytics/production-costs">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateProductionCosts</a>({ ...params }) -> AnalyzeProductionCostsResponse</code>
- <code title="put /v1/core/analytics/quarterly-orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateQuarterlyOrders</a>({ ...params }) -> AnalyzeQuarterlyOrdersResponse</code>
- <code title="put /v1/core/analytics/realized-margins">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateRealizedMargins</a>({ ...params }) -> AnalyzeRealizedMarginsResponse</code>
- <code title="put /v1/core/analytics/sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateSales</a>({ ...params }) -> AnalyzeSalesResponse</code>
- <code title="put /v1/core/analytics/schedule-attainment">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateScheduleAttainment</a>({ ...params }) -> AnalyzeScheduleAttainmentResponse</code>

## Actions

Types:

- <code><a href="./src/resources/core/actions.ts">CheckDuplicateRequest</a></code>
- <code><a href="./src/resources/core/actions.ts">CheckDuplicateResult</a></code>
- <code><a href="./src/resources/core/actions.ts">EmailRecordRequest</a></code>
- <code><a href="./src/resources/core/actions.ts">MessageResource</a></code>
- <code><a href="./src/resources/core/actions.ts">RequestDemoRequest</a></code>
- <code><a href="./src/resources/core/actions.ts">SubmitFeedbackRequest</a></code>
- <code><a href="./src/resources/core/actions.ts">ActionEmailRecordResponse</a></code>

Methods:

- <code title="put /v1/core/actions/check-duplicates">client.core.actions.<a href="./src/resources/core/actions.ts">checkDuplicates</a>({ ...params }) -> CheckDuplicateResult</code>
- <code title="post /v1/core/actions/email-record">client.core.actions.<a href="./src/resources/core/actions.ts">emailRecord</a>({ ...params }) -> ActionEmailRecordResponse</code>
- <code title="post /v1/core/actions/request-demo">client.core.actions.<a href="./src/resources/core/actions.ts">requestDemo</a>({ ...params }) -> MessageResource</code>
- <code title="post /v1/core/actions/submit-feedback">client.core.actions.<a href="./src/resources/core/actions.ts">submitFeedback</a>({ ...params }) -> MessageResource</code>

## Records

### Actions

Types:

- <code><a href="./src/resources/core/records/actions.ts">GenPackListRequest</a></code>
- <code><a href="./src/resources/core/records/actions.ts">ListPackListBackOrder</a></code>
- <code><a href="./src/resources/core/records/actions.ts">ListPackListCase</a></code>
- <code><a href="./src/resources/core/records/actions.ts">ListPackListLineItem</a></code>
- <code><a href="./src/resources/core/records/actions.ts">PackList</a></code>
- <code><a href="./src/resources/core/records/actions.ts">PackListBackOrder</a></code>
- <code><a href="./src/resources/core/records/actions.ts">PackListCase</a></code>
- <code><a href="./src/resources/core/records/actions.ts">PackListLineItem</a></code>
- <code><a href="./src/resources/core/records/actions.ts">PackListParty</a></code>

Methods:

- <code title="post /v1/core/records/actions/generate-pack-list">client.core.records.actions.<a href="./src/resources/core/records/actions.ts">generatePackList</a>({ ...params }) -> PackList</code>

# Billing

Types:

- <code><a href="./src/resources/billing/billing.ts">BillingPortalSessionResponse</a></code>

Methods:

- <code title="post /v1/billing/portal-sessions">client.billing.<a href="./src/resources/billing/billing.ts">portalSessions</a>() -> BillingPortalSessionResponse</code>

## Plans

Types:

- <code><a href="./src/resources/billing/plans.ts">ListPlanChangeLineItem</a></code>
- <code><a href="./src/resources/billing/plans.ts">ListPlanLimit</a></code>
- <code><a href="./src/resources/billing/plans.ts">ListPricingPlan</a></code>
- <code><a href="./src/resources/billing/plans.ts">PlanChangeLineItem</a></code>
- <code><a href="./src/resources/billing/plans.ts">PlanChangeProration</a></code>
- <code><a href="./src/resources/billing/plans.ts">PlanLimit</a></code>
- <code><a href="./src/resources/billing/plans.ts">PricingPlan</a></code>
- <code><a href="./src/resources/billing/plans.ts">SwitchPlanResponse</a></code>

Methods:

- <code title="get /v1/billing/plans">client.billing.plans.<a href="./src/resources/billing/plans.ts">list</a>({ ...params }) -> ListPricingPlan</code>
- <code title="get /v1/billing/plans/{id}/proration">client.billing.plans.<a href="./src/resources/billing/plans.ts">retrieveProration</a>(id) -> PlanChangeProration</code>
- <code title="post /v1/billing/plans/{id}/switch">client.billing.plans.<a href="./src/resources/billing/plans.ts">switch</a>(id) -> SwitchPlanResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/billing/accounts.ts">AccountUsageResponse</a></code>
- <code><a href="./src/resources/billing/accounts.ts">AgentSpendInfo</a></code>
- <code><a href="./src/resources/billing/accounts.ts">EnsureBillingCustomerResponse</a></code>
- <code><a href="./src/resources/billing/accounts.ts">SubscriptionInfo</a></code>
- <code><a href="./src/resources/billing/accounts.ts">UsageItem</a></code>

Methods:

- <code title="put /v1/billing/accounts">client.billing.accounts.<a href="./src/resources/billing/accounts.ts">update</a>() -> EnsureBillingCustomerResponse</code>
- <code title="get /v1/billing/accounts/usage">client.billing.accounts.<a href="./src/resources/billing/accounts.ts">retrieveUsage</a>() -> AccountUsageResponse</code>

## Actions

Types:

- <code><a href="./src/resources/billing/actions.ts">EnterpriseInquiry</a></code>

Methods:

- <code title="post /v1/billing/actions/request-enterprise">client.billing.actions.<a href="./src/resources/billing/actions.ts">requestEnterprise</a>() -> EnterpriseInquiry</code>

## SpendingCap

Types:

- <code><a href="./src/resources/billing/spending-cap.ts">SetSpendingCapRequest</a></code>
- <code><a href="./src/resources/billing/spending-cap.ts">SpendingCapResponse</a></code>

Methods:

- <code title="put /v1/billing/spending-cap">client.billing.spendingCap.<a href="./src/resources/billing/spending-cap.ts">update</a>({ ...params }) -> SpendingCapResponse</code>
- <code title="get /v1/billing/spending-cap">client.billing.spendingCap.<a href="./src/resources/billing/spending-cap.ts">list</a>() -> SpendingCapResponse</code>

# Sales

Types:

- <code><a href="./src/resources/sales/sales.ts">CheckoutSessionResponse</a></code>
- <code><a href="./src/resources/sales/sales.ts">CreateCheckoutSessionRequest</a></code>

Methods:

- <code title="post /v1/sales/checkout-sessions">client.sales.<a href="./src/resources/sales/sales.ts">checkoutSessions</a>({ ...params }) -> CheckoutSessionResponse</code>

## RegistrationFlows

Types:

- <code><a href="./src/resources/sales/registration-flows.ts">CreateRegistrationFlowRequest</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">ListRegistrationFlow</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">ListRegistrationFlowOption</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlow</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlowOption</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">UpdateRegistrationFlowRequest</a></code>
- <code><a href="./src/resources/sales/registration-flows.ts">RegistrationFlowDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/registration-flows">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">create</a>({ ...params }) -> RegistrationFlow</code>
- <code title="get /v1/sales/registration-flows/{id}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">retrieve</a>(id) -> RegistrationFlow</code>
- <code title="patch /v1/sales/registration-flows/{id}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">update</a>(id, { ...params }) -> RegistrationFlow</code>
- <code title="get /v1/sales/registration-flows">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">list</a>({ ...params }) -> ListRegistrationFlow</code>
- <code title="delete /v1/sales/registration-flows/{id}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">delete</a>(id) -> RegistrationFlowDeleteResponse</code>
- <code title="get /v1/sales/registration-flows/by-slug/{slug}">client.sales.registrationFlows.<a href="./src/resources/sales/registration-flows.ts">retrieveBySlug</a>(slug) -> RegistrationFlow</code>

## Customers

Types:

- <code><a href="./src/resources/sales/customers/customers.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CreateCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerLeadTime</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">FrequentlyOrderedProduct</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListFrequentlyOrderedProduct</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">QuantityInput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">RegisterCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">UpdateCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDeleteResponse</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerRegistrationResponse</a></code>

Methods:

- <code title="post /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="get /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieve</a>(id, { ...params }) -> Customer</code>
- <code title="patch /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">list</a>({ ...params }) -> ListCustomer</code>
- <code title="delete /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">delete</a>(id) -> CustomerDeleteResponse</code>
- <code title="post /v1/sales/customers/registration">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">registration</a>({ ...params }) -> CustomerRegistrationResponse</code>
- <code title="get /v1/sales/customers/{id}/frequently-ordered-products">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieveFrequentlyOrderedProducts</a>(id) -> ListFrequentlyOrderedProduct</code>
- <code title="get /v1/sales/customers/{id}/lead-time">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieveLeadTime</a>(id, { ...params }) -> CustomerLeadTime</code>

### Actions

Types:

- <code><a href="./src/resources/sales/customers/actions.ts">BulkDeleteCustomersRequest</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">MergeCustomersRequest</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/customers/actions/bulk-delete">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/sales/customers/{id}/actions/merge">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">merge</a>(id, { ...params }) -> Customer</code>

### NotificationRecipients

Types:

- <code><a href="./src/resources/sales/customers/notification-recipients.ts">ListOrderNotificationRecipient</a></code>
- <code><a href="./src/resources/sales/customers/notification-recipients.ts">NotificationRecipientInput</a></code>
- <code><a href="./src/resources/sales/customers/notification-recipients.ts">OrderNotificationRecipient</a></code>
- <code><a href="./src/resources/sales/customers/notification-recipients.ts">UpdateNotificationRecipientsRequest</a></code>

Methods:

- <code title="patch /v1/sales/customers/{id}/notification-recipients">client.sales.customers.notificationRecipients.<a href="./src/resources/sales/customers/notification-recipients.ts">update</a>(id, { ...params }) -> ListOrderNotificationRecipient</code>
- <code title="get /v1/sales/customers/{id}/notification-recipients">client.sales.customers.notificationRecipients.<a href="./src/resources/sales/customers/notification-recipients.ts">list</a>(id, { ...params }) -> ListOrderNotificationRecipient</code>

## AccountGroups

Types:

- <code><a href="./src/resources/sales/account-groups.ts">CreateAccountGroupRequest</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">UpdateAccountGroupRequest</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">create</a>({ ...params }) -> AccountGroup</code>
- <code title="get /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieve</a>(id) -> AccountGroup</code>
- <code title="patch /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">update</a>(id, { ...params }) -> AccountGroup</code>
- <code title="get /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">list</a>({ ...params }) -> ListAccountGroup</code>
- <code title="delete /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">delete</a>(id) -> AccountGroupDeleteResponse</code>

## AccountPrices

Types:

- <code><a href="./src/resources/sales/account-prices/account-prices.ts">AccountPrice</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">CreateAccountPriceRequest</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">ListAccountPrice</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">RateInput</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">UpdateAccountPriceRequest</a></code>
- <code><a href="./src/resources/sales/account-prices/account-prices.ts">AccountPriceDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices/account-prices.ts">create</a>({ ...params }) -> AccountPrice</code>
- <code title="get /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices/account-prices.ts">retrieve</a>(id, { ...params }) -> AccountPrice</code>
- <code title="patch /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices/account-prices.ts">update</a>(id, { ...params }) -> AccountPrice</code>
- <code title="get /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices/account-prices.ts">list</a>({ ...params }) -> ListAccountPrice</code>
- <code title="delete /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices/account-prices.ts">delete</a>(id) -> AccountPriceDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/sales/account-prices/actions.ts">ExportPriceListRequest</a></code>

Methods:

- <code title="post /v1/sales/account-prices/actions/export-price-list">client.sales.accountPrices.actions.<a href="./src/resources/sales/account-prices/actions.ts">exportPriceList</a>({ ...params }) -> Job</code>

## Addresses

Types:

- <code><a href="./src/resources/sales/addresses.ts">ListAddress</a></code>
- <code><a href="./src/resources/sales/addresses.ts">UpdateAddressRequest</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="get /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">retrieve</a>(id) -> Address</code>
- <code title="patch /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">update</a>(id, { ...params }) -> Address</code>
- <code title="get /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">list</a>({ ...params }) -> ListAddress</code>
- <code title="delete /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

## AccountStatuses

Types:

- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">ListAccountStatus</a></code>

Methods:

- <code title="get /v1/sales/account-statuses/{id}">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieve</a>(id, { ...params }) -> AccountStatus</code>
- <code title="get /v1/sales/account-statuses">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">list</a>({ ...params }) -> ListAccountStatus</code>

## ProductLineAccess

### AccountGroups

Types:

- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">CreateAccountGroupProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ListAccountGroupProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ListProductLine</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">UpdateAccountGroupProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/product-line-access/account-groups">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">create</a>({ ...params }) -> AccountGroupProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">retrieve</a>(accountGroupID) -> AccountGroupProductLineAccess</code>
- <code title="patch /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">update</a>(accountGroupID, { ...params }) -> AccountGroupProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/account-groups">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">list</a>({ ...params }) -> ListAccountGroupProductLineAccess</code>
- <code title="delete /v1/sales/product-line-access/account-groups/{account_group_id}">client.sales.productLineAccess.accountGroups.<a href="./src/resources/sales/product-line-access/account-groups.ts">delete</a>(accountGroupID) -> AccountGroupDeleteResponse</code>

### Customers

Types:

- <code><a href="./src/resources/sales/product-line-access/customers.ts">CreateCustomerProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListCustomerProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">UpdateCustomerProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/product-line-access/customers">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">create</a>({ ...params }) -> CustomerProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">retrieve</a>(customerID) -> CustomerProductLineAccess</code>
- <code title="patch /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">update</a>(customerID, { ...params }) -> CustomerProductLineAccess</code>
- <code title="get /v1/sales/product-line-access/customers">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">list</a>({ ...params }) -> ListCustomerProductLineAccess</code>
- <code title="delete /v1/sales/product-line-access/customers/{customer_id}">client.sales.productLineAccess.customers.<a href="./src/resources/sales/product-line-access/customers.ts">delete</a>(customerID) -> CustomerDeleteResponse</code>

## AccountUsers

### SalesTargets

Types:

- <code><a href="./src/resources/sales/account-users/sales-targets.ts">CreateSalesTargetRequest</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">ListSalesTarget</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">SalesTarget</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">UpsertSalesTargetRequest</a></code>

Methods:

- <code title="post /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">create</a>(id, { ...params }) -> SalesTarget</code>
- <code title="put /v1/sales/account-users/{id}/sales-targets/{target_id}">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">update</a>(targetID, { ...params }) -> SalesTarget</code>
- <code title="get /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">list</a>(id, { ...params }) -> ListSalesTarget</code>

## PortalRegistrationSessions

Types:

- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">CreateOrResumePortalRegistrationSessionRequest</a></code>
- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">ListPortalRegistrationSession</a></code>
- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">PortalRegistrationSession</a></code>
- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">PortalRegistrationSessionData</a></code>
- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">PortalRegistrationSessionDataInput</a></code>
- <code><a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">UpdatePortalRegistrationSessionRequest</a></code>

Methods:

- <code title="post /v1/sales/portal-registration-sessions">client.sales.portalRegistrationSessions.<a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">create</a>({ ...params }) -> PortalRegistrationSession</code>
- <code title="get /v1/sales/portal-registration-sessions/{id}">client.sales.portalRegistrationSessions.<a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">retrieve</a>(id) -> PortalRegistrationSession</code>
- <code title="patch /v1/sales/portal-registration-sessions/{id}">client.sales.portalRegistrationSessions.<a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">update</a>(id, { ...params }) -> PortalRegistrationSession</code>
- <code title="get /v1/sales/portal-registration-sessions">client.sales.portalRegistrationSessions.<a href="./src/resources/sales/portal-registration-sessions/portal-registration-sessions.ts">list</a>({ ...params }) -> ListPortalRegistrationSession</code>

### Actions

Methods:

- <code title="post /v1/sales/portal-registration-sessions/{id}/actions/abandon">client.sales.portalRegistrationSessions.actions.<a href="./src/resources/sales/portal-registration-sessions/actions.ts">abandon</a>(id) -> PortalRegistrationSession</code>
- <code title="post /v1/sales/portal-registration-sessions/{id}/actions/complete">client.sales.portalRegistrationSessions.actions.<a href="./src/resources/sales/portal-registration-sessions/actions.ts">complete</a>(id) -> PortalRegistrationSession</code>

## Priorities

Types:

- <code><a href="./src/resources/sales/priorities.ts">ListPriority</a></code>

Methods:

- <code title="get /v1/sales/priorities/{id}">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">retrieve</a>(id, { ...params }) -> Priority</code>
- <code title="get /v1/sales/priorities">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">list</a>({ ...params }) -> ListPriority</code>

## Contacts

### Actions

Types:

- <code><a href="./src/resources/sales/contacts/actions.ts">ContactMatch</a></code>
- <code><a href="./src/resources/sales/contacts/actions.ts">FindContactByEmailRequest</a></code>
- <code><a href="./src/resources/sales/contacts/actions.ts">ListContactMatch</a></code>

Methods:

- <code title="post /v1/sales/contacts/actions/find-by-email">client.sales.contacts.actions.<a href="./src/resources/sales/contacts/actions.ts">findByEmail</a>({ ...params }) -> ListContactMatch</code>

## OrderDiscounts

Types:

- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">CreateOrderDiscountRequest</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">ListOrderDiscount</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">UpdateOrderDiscountRequest</a></code>

Methods:

- <code title="post /v1/sales/order-discounts">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">create</a>({ ...params }) -> OrderDiscount</code>
- <code title="get /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">retrieve</a>(id) -> OrderDiscount</code>
- <code title="patch /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">update</a>(id, { ...params }) -> OrderDiscount</code>
- <code title="get /v1/sales/order-discounts">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">list</a>({ ...params }) -> ListOrderDiscount</code>
- <code title="delete /v1/sales/order-discounts/{id}">client.sales.orderDiscounts.<a href="./src/resources/sales/order-discounts/order-discounts.ts">delete</a>(id) -> OrderDiscount</code>

### Actions

Types:

- <code><a href="./src/resources/sales/order-discounts/actions.ts">FindOrderDiscountByCodeRequest</a></code>

Methods:

- <code title="post /v1/sales/order-discounts/actions/find-by-code">client.sales.orderDiscounts.actions.<a href="./src/resources/sales/order-discounts/actions.ts">findByCode</a>({ ...params }) -> OrderDiscount</code>

## SalesOrders

Types:

- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreatedBy</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Freight</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListQuotedSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListRecord</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrder</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">OrderContact</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Product</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderPricesRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderPricesResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuotedSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Record</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrder</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderEmailContactInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderRelated</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStageTotal</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderTotals</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">UpdateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">create</a>({ ...params }) -> SalesOrder</code>
- <code title="get /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieve</a>(id, { ...params }) -> SalesOrder</code>
- <code title="patch /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">update</a>(id, { ...params }) -> SalesOrder</code>
- <code title="get /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">list</a>({ ...params }) -> ListSalesOrder</code>
- <code title="delete /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">delete</a>(id) -> SalesOrderDeleteResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/checkout">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">checkout</a>(id, { ...params }) -> CheckoutSalesOrderResponse</code>
- <code title="post /v1/sales/sales-orders/price-quote">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">priceQuote</a>({ ...params }) -> QuoteSalesOrderPricesResponse</code>
- <code title="get /v1/sales/sales-orders/statuses">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>

### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/actions.ts">BulkDeleteSalesOrdersRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CommitmentQuoteStep</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">IssueSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">QuoteSalesOrderCommitmentRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">QuoteSalesOrderCommitmentResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">QuoteSalesOrderFreightResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/actions/bulk-delete">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/close">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">close</a>(id) -> SalesOrder</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/create-production-run">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">createProductionRun</a>(id, { ...params }) -> ProductionRun</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/issue">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">issue</a>(id, { ...params }) -> SalesOrder</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/open">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">open</a>(id) -> SalesOrder</code>
- <code title="post /v1/sales/sales-orders/actions/quote-commitment">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">quoteCommitment</a>({ ...params }) -> QuoteSalesOrderCommitmentResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/quote-freight">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">quoteFreight</a>(id) -> QuoteSalesOrderFreightResponse</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/unissue">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">unissue</a>(id) -> SalesOrder</code>

### Lines

Types:

- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">CreateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">UpdateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">create</a>(id, { ...params }) -> SalesOrderLine</code>
- <code title="patch /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">update</a>(lineID, { ...params }) -> SalesOrderLine</code>
- <code title="delete /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

#### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/lines/actions.ts">ReorderSalesOrderLinesRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/actions.ts">ActionReorderResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines/actions/reorder">client.sales.salesOrders.lines.actions.<a href="./src/resources/sales/sales-orders/lines/actions.ts">reorder</a>(id, { ...params }) -> ActionReorderResponse</code>

## VolumeDiscounts

Types:

- <code><a href="./src/resources/sales/volume-discounts.ts">CreateVolumeDiscountRequest</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">CreateVolumeDiscountTierInput</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListUnit</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListVolumeDiscount</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListVolumeDiscountTier</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">UpdateVolumeDiscountRequest</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">UpdateVolumeDiscountTierInput</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscount</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscountTier</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">VolumeDiscountDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/volume-discounts">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">create</a>({ ...params }) -> VolumeDiscount</code>
- <code title="get /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">retrieve</a>(id, { ...params }) -> VolumeDiscount</code>
- <code title="patch /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">update</a>(id, { ...params }) -> VolumeDiscount</code>
- <code title="get /v1/sales/volume-discounts">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">list</a>({ ...params }) -> ListVolumeDiscount</code>
- <code title="delete /v1/sales/volume-discounts/{id}">client.sales.volumeDiscounts.<a href="./src/resources/sales/volume-discounts.ts">delete</a>(id) -> VolumeDiscountDeleteResponse</code>

## Accounts

### Territories

Types:

- <code><a href="./src/resources/sales/accounts/territories.ts">CreateTerritoryRequest</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListTerritory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Territory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">UpdateTerritoryRequest</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">TerritoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">create</a>(accountID, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">retrieve</a>(id, { ...params }) -> Territory</code>
- <code title="patch /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">update</a>(id, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">list</a>(accountID, { ...params }) -> ListTerritory</code>
- <code title="delete /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">delete</a>(id, { ...params }) -> TerritoryDeleteResponse</code>

# Settings

Types:

- <code><a href="./src/resources/settings/settings.ts">PortalProfile</a></code>
- <code><a href="./src/resources/settings/settings.ts">PublicAccount</a></code>

Methods:

- <code title="get /v1/settings/branding/{slug}">client.settings.<a href="./src/resources/settings/settings.ts">retrieveBranding</a>(slug) -> PublicAccount</code>
- <code title="get /v1/settings/portal-hosts/{domain}">client.settings.<a href="./src/resources/settings/settings.ts">retrievePortalHosts</a>(domain) -> PublicAccount</code>
- <code title="get /v1/settings/portal-profiles/{slug}">client.settings.<a href="./src/resources/settings/settings.ts">retrievePortalProfiles</a>(slug) -> PortalProfile</code>

## Properties

Types:

- <code><a href="./src/resources/settings/properties.ts">ListSysProperty</a></code>
- <code><a href="./src/resources/settings/properties.ts">SysProperty</a></code>
- <code><a href="./src/resources/settings/properties.ts">SysPropertyType</a></code>
- <code><a href="./src/resources/settings/properties.ts">SysPropertyValue</a></code>
- <code><a href="./src/resources/settings/properties.ts">UpdateSysPropertyRequest</a></code>

Methods:

- <code title="get /v1/settings/properties/{id}">client.settings.properties.<a href="./src/resources/settings/properties.ts">retrieve</a>(id) -> SysProperty</code>
- <code title="patch /v1/settings/properties/{id}">client.settings.properties.<a href="./src/resources/settings/properties.ts">update</a>(id, { ...params }) -> SysProperty</code>
- <code title="get /v1/settings/properties">client.settings.properties.<a href="./src/resources/settings/properties.ts">list</a>({ ...params }) -> ListSysProperty</code>
- <code title="get /v1/settings/properties/{type_code}/latest-value">client.settings.properties.<a href="./src/resources/settings/properties.ts">retrieveLatestValue</a>(typeCode) -> SysPropertyValue</code>

## PortalDomains

Types:

- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">CreatePortalDomainRequest</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">DNSRecord</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">ListDNSRecord</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">ListPortalDomain</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">PortalDomain</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">PortalDomainDeleteResponse</a></code>

Methods:

- <code title="post /v1/settings/portal-domains">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">create</a>({ ...params }) -> PortalDomain</code>
- <code title="get /v1/settings/portal-domains/{id}">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">retrieve</a>(id) -> PortalDomain</code>
- <code title="get /v1/settings/portal-domains">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">list</a>() -> ListPortalDomain</code>
- <code title="delete /v1/settings/portal-domains/{id}">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">delete</a>(id) -> PortalDomainDeleteResponse</code>

### Actions

Methods:

- <code title="post /v1/settings/portal-domains/{id}/actions/verify">client.settings.portalDomains.actions.<a href="./src/resources/settings/portal-domains/actions.ts">verify</a>(id) -> PortalDomain</code>

## Integrations

Types:

- <code><a href="./src/resources/settings/integrations/integrations.ts">AccountIntegration</a></code>
- <code><a href="./src/resources/settings/integrations/integrations.ts">CreateAccountIntegrationRequest</a></code>
- <code><a href="./src/resources/settings/integrations/integrations.ts">ListAccountIntegration</a></code>
- <code><a href="./src/resources/settings/integrations/integrations.ts">UpdateAccountIntegrationRequest</a></code>

Methods:

- <code title="post /v1/settings/integrations">client.settings.integrations.<a href="./src/resources/settings/integrations/integrations.ts">create</a>({ ...params }) -> AccountIntegration</code>
- <code title="put /v1/settings/integrations/{id}">client.settings.integrations.<a href="./src/resources/settings/integrations/integrations.ts">update</a>(id, { ...params }) -> AccountIntegration</code>
- <code title="get /v1/settings/integrations">client.settings.integrations.<a href="./src/resources/settings/integrations/integrations.ts">list</a>({ ...params }) -> ListAccountIntegration</code>
- <code title="delete /v1/settings/integrations/{id}">client.settings.integrations.<a href="./src/resources/settings/integrations/integrations.ts">delete</a>(id) -> AccountIntegration</code>

### Stripe

Types:

- <code><a href="./src/resources/settings/integrations/stripe.ts">StripePublishableKey</a></code>
- <code><a href="./src/resources/settings/integrations/stripe.ts">StripeStatus</a></code>

Methods:

- <code title="get /v1/settings/integrations/stripe/publishable-key">client.settings.integrations.stripe.<a href="./src/resources/settings/integrations/stripe.ts">retrievePublishableKey</a>() -> StripePublishableKey</code>
- <code title="get /v1/settings/integrations/stripe/status">client.settings.integrations.stripe.<a href="./src/resources/settings/integrations/stripe.ts">retrieveStatus</a>() -> StripeStatus</code>

### Hubspot

#### Sync

Types:

- <code><a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">HubspotSyncJob</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">HubspotSyncRecord</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">HubspotSyncReport</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">ListHubspotSyncRecord</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">StartHubspotSyncRequest</a></code>

Methods:

- <code title="post /v1/settings/integrations/hubspot/sync">client.settings.integrations.hubspot.sync.<a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">create</a>({ ...params }) -> HubspotSyncJob</code>
- <code title="get /v1/settings/integrations/hubspot/sync/{id}">client.settings.integrations.hubspot.sync.<a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">retrieve</a>(id) -> HubspotSyncJob</code>
- <code title="get /v1/settings/integrations/hubspot/sync/current">client.settings.integrations.hubspot.sync.<a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">retrieveCurrent</a>() -> HubspotSyncJob</code>
- <code title="get /v1/settings/integrations/hubspot/sync/records">client.settings.integrations.hubspot.sync.<a href="./src/resources/settings/integrations/hubspot/sync/sync.ts">retrieveRecords</a>({ ...params }) -> ListHubspotSyncRecord</code>

##### CompanyReviews

Types:

- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">HubspotCompanyCandidate</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">HubspotCompanyReview</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">ListHubspotCompanyCandidate</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">ListHubspotCompanyReview</a></code>

Methods:

- <code title="post /v1/settings/integrations/hubspot/sync/{id}/company-reviews/{review_id}">client.settings.integrations.hubspot.sync.companyReviews.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">create</a>(reviewID, { ...params }) -> HubspotCompanyReview</code>
- <code title="get /v1/settings/integrations/hubspot/sync/{id}/company-reviews">client.settings.integrations.hubspot.sync.companyReviews.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/company-reviews.ts">list</a>(id, { ...params }) -> ListHubspotCompanyReview</code>

###### Actions

Types:

- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">BulkResolveHubspotCompanyReviewsRequest</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">ExportHubspotCompanyReviewsRequest</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">HubspotCompanyReviewResolutionInput</a></code>
- <code><a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">LinkHubspotCompanyReviewRequest</a></code>

Methods:

- <code title="post /v1/settings/integrations/hubspot/sync/{id}/company-reviews/actions/bulk-resolve">client.settings.integrations.hubspot.sync.companyReviews.actions.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">bulkResolve</a>(id, { ...params }) -> Job</code>
- <code title="post /v1/settings/integrations/hubspot/sync/{id}/company-reviews/actions/export">client.settings.integrations.hubspot.sync.companyReviews.actions.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">export</a>(id, { ...params }) -> Job</code>
- <code title="post /v1/settings/integrations/hubspot/sync/{id}/company-reviews/{review_id}/actions/link">client.settings.integrations.hubspot.sync.companyReviews.actions.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">link</a>(reviewID, { ...params }) -> HubspotCompanyReview</code>
- <code title="post /v1/settings/integrations/hubspot/sync/{id}/company-reviews/{review_id}/actions/skip">client.settings.integrations.hubspot.sync.companyReviews.actions.<a href="./src/resources/settings/integrations/hubspot/sync/company-reviews/actions.ts">skip</a>(reviewID, { ...params }) -> HubspotCompanyReview</code>

##### Actions

Methods:

- <code title="post /v1/settings/integrations/hubspot/sync/{id}/actions/cancel">client.settings.integrations.hubspot.sync.actions.<a href="./src/resources/settings/integrations/hubspot/sync/actions.ts">cancel</a>(id) -> HubspotSyncJob</code>
- <code title="post /v1/settings/integrations/hubspot/sync/{id}/actions/execute">client.settings.integrations.hubspot.sync.actions.<a href="./src/resources/settings/integrations/hubspot/sync/actions.ts">execute</a>(id) -> HubspotSyncJob</code>

# Catalog

## Units

Types:

- <code><a href="./src/resources/catalog/units/units.ts">CreateUnitRequest</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">UpdateUnitRequest</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">create</a>({ ...params }) -> Unit</code>
- <code title="get /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">retrieve</a>(id, { ...params }) -> Unit</code>
- <code title="patch /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">update</a>(id, { ...params }) -> Unit</code>
- <code title="get /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">list</a>({ ...params }) -> ListUnit</code>
- <code title="delete /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">delete</a>(id) -> UnitDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/units/actions.ts">BulkUpsertUnitsRequest</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">ExportUnitsRequest</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">UpsertUnitInput</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">ValidateUnitsRequest</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">ValidateUnitsResponse</a></code>

Methods:

- <code title="post /v1/catalog/units/actions/bulk-upsert">client.catalog.units.actions.<a href="./src/resources/catalog/units/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/units/actions/export">client.catalog.units.actions.<a href="./src/resources/catalog/units/actions.ts">export</a>({ ...params }) -> Job</code>
- <code title="put /v1/catalog/units/actions/validate">client.catalog.units.actions.<a href="./src/resources/catalog/units/actions.ts">validate</a>({ ...params }) -> ValidateUnitsResponse</code>

## UnitGroups

Types:

- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupUnitParam</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">ListUnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UpdateUnitGroupRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">create</a>({ ...params }) -> UnitGroup</code>
- <code title="get /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieve</a>(id, { ...params }) -> UnitGroup</code>
- <code title="patch /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">update</a>(id, { ...params }) -> UnitGroup</code>
- <code title="get /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">list</a>({ ...params }) -> ListUnitGroup</code>
- <code title="delete /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">delete</a>(id) -> UnitGroupDeleteResponse</code>

### Units

Types:

- <code><a href="./src/resources/catalog/unit-groups/units.ts">CreateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UpdateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">create</a>(unitGroupID, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">retrieve</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="patch /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">update</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">list</a>(unitGroupID, { ...params }) -> ListUnitGroupUnit</code>
- <code title="delete /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">delete</a>(id, { ...params }) -> UnitDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/unit-groups/actions.ts">BulkUpsertUnitGroupsRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/actions.ts">ExportUnitGroupsRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/actions.ts">UnitIdentifier</a></code>
- <code><a href="./src/resources/catalog/unit-groups/actions.ts">UpsertUnitGroupConversionInput</a></code>
- <code><a href="./src/resources/catalog/unit-groups/actions.ts">UpsertUnitGroupInput</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups/actions/bulk-upsert">client.catalog.unitGroups.actions.<a href="./src/resources/catalog/unit-groups/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/unit-groups/actions/export">client.catalog.unitGroups.actions.<a href="./src/resources/catalog/unit-groups/actions.ts">export</a>({ ...params }) -> Job</code>

## Properties

Types:

- <code><a href="./src/resources/catalog/properties/properties.ts">CreatePropertyRequest</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">UpdatePropertyRequest</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">create</a>({ ...params }) -> Property</code>
- <code title="get /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">retrieve</a>(id, { ...params }) -> Property</code>
- <code title="patch /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">update</a>(id, { ...params }) -> Property</code>
- <code title="get /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">list</a>({ ...params }) -> ListProperty</code>
- <code title="delete /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">delete</a>(id) -> PropertyDeleteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/catalog/properties/attributes.ts">CreateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">UpdateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="patch /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">list</a>(propertyID, { ...params }) -> ListAttribute</code>
- <code title="delete /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/properties/actions.ts">BulkUpsertPropertiesRequest</a></code>
- <code><a href="./src/resources/catalog/properties/actions.ts">ExportPropertiesRequest</a></code>
- <code><a href="./src/resources/catalog/properties/actions.ts">UpsertPropertyAttributeInput</a></code>
- <code><a href="./src/resources/catalog/properties/actions.ts">UpsertPropertyInput</a></code>

Methods:

- <code title="post /v1/catalog/properties/actions/bulk-upsert">client.catalog.properties.actions.<a href="./src/resources/catalog/properties/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/properties/actions/export">client.catalog.properties.actions.<a href="./src/resources/catalog/properties/actions.ts">export</a>({ ...params }) -> Job</code>

## Items

Types:

- <code><a href="./src/resources/catalog/items/items.ts">ItemCosts</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemLotDefault</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemTrendPoint</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemTrends</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListItem</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListItemTrendPoint</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">list</a>({ ...params }) -> ListItem</code>
- <code title="put /v1/catalog/items/{id}/category/{category_id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">changeCategory</a>(categoryID, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items/{id}/costs">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveCosts</a>(id) -> ItemCosts</code>
- <code title="get /v1/catalog/items/{id}/lot-default">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveLotDefault</a>(id, { ...params }) -> ItemLotDefault</code>
- <code title="get /v1/catalog/items/{id}/trends">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveTrends</a>(id, { ...params }) -> ItemTrends</code>

### Inventory

Types:

- <code><a href="./src/resources/catalog/items/inventory.ts">ItemInventory</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">UpdateItemInventoryRequest</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">InventoryUpdateResponse</a></code>

Methods:

- <code title="patch /v1/catalog/items/{id}/inventory">client.catalog.items.inventory.<a href="./src/resources/catalog/items/inventory.ts">update</a>(id, { ...params }) -> InventoryUpdateResponse</code>
- <code title="get /v1/catalog/items/{id}/inventory">client.catalog.items.inventory.<a href="./src/resources/catalog/items/inventory.ts">list</a>(id, { ...params }) -> ItemInventory</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/items/actions.ts">BulkCreateItemInput</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkCreateItemResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkCreateItemsRequest</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkCreateItemsResponse</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkReconcileItemInput</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkReconcileItemsRequest</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">BulkReconcileItemsResponse</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">FileDownload</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ListReconcileErrorResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ListReconciledItemResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ListSkippedItemResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ReconcileErrorResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ReconciledItemResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">SkippedItemResult</a></code>

Methods:

- <code title="post /v1/catalog/items/actions/bulk-create">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkCreate</a>({ ...params }) -> BulkCreateItemsResponse</code>
- <code title="post /v1/catalog/items/actions/bulk-reconcile">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkReconcile</a>({ ...params }) -> BulkReconcileItemsResponse</code>
- <code title="get /v1/catalog/items/actions/export">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">export</a>() -> FileDownload</code>

### Attributes

Methods:

- <code title="put /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">update</a>(attributeID, { ...params }) -> Item</code>
- <code title="delete /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">delete</a>(attributeID, { ...params }) -> Item</code>

## ItemCategories

Types:

- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">CreateItemCategoryRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">UpdateItemCategoryRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryDeleteResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryChangeUnitGroupResponse</a></code>

Methods:

- <code title="post /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">create</a>({ ...params }) -> ItemCategory</code>
- <code title="get /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieve</a>(id, { ...params }) -> ItemCategory</code>
- <code title="patch /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">update</a>(id, { ...params }) -> ItemCategory</code>
- <code title="get /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">list</a>({ ...params }) -> ListItemCategory</code>
- <code title="delete /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">delete</a>(id) -> ItemCategoryDeleteResponse</code>
- <code title="put /v1/catalog/item-categories/{id}/unit-groups/{unit_group_id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">changeUnitGroup</a>(unitGroupID, { ...params }) -> ItemCategoryChangeUnitGroupResponse</code>

### Properties

Types:

- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyUpdateResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="put /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">update</a>(propertyID, { ...params }) -> PropertyUpdateResponse</code>
- <code title="delete /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/item-categories/actions.ts">BulkUpsertItemCategoriesRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/actions.ts">ExportItemCategoriesRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/actions.ts">ObjectIdentifier</a></code>
- <code><a href="./src/resources/catalog/item-categories/actions.ts">UpsertItemCategoryInput</a></code>

Methods:

- <code title="post /v1/catalog/item-categories/actions/bulk-upsert">client.catalog.itemCategories.actions.<a href="./src/resources/catalog/item-categories/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/item-categories/actions/export">client.catalog.itemCategories.actions.<a href="./src/resources/catalog/item-categories/actions.ts">export</a>({ ...params }) -> Job</code>

## Materials

Types:

- <code><a href="./src/resources/catalog/materials/materials.ts">CreateMaterialRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ListMaterial</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Material</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">UpdateMaterialRequest</a></code>

Methods:

- <code title="post /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">create</a>({ ...params }) -> Material</code>
- <code title="get /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">retrieve</a>(id, { ...params }) -> Material</code>
- <code title="patch /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">update</a>(id, { ...params }) -> Material</code>
- <code title="get /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">list</a>({ ...params }) -> ListMaterial</code>
- <code title="delete /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">delete</a>(id) -> Material</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/materials/actions.ts">BulkUpsertMaterialsRequest</a></code>
- <code><a href="./src/resources/catalog/materials/actions.ts">ExportMaterialsRequest</a></code>
- <code><a href="./src/resources/catalog/materials/actions.ts">UpsertMaterialInput</a></code>
- <code><a href="./src/resources/catalog/materials/actions.ts">UpsertMaterialProperty</a></code>

Methods:

- <code title="post /v1/catalog/materials/actions/bulk-upsert">client.catalog.materials.actions.<a href="./src/resources/catalog/materials/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/materials/actions/export">client.catalog.materials.actions.<a href="./src/resources/catalog/materials/actions.ts">export</a>({ ...params }) -> Job</code>

## Parts

Types:

- <code><a href="./src/resources/catalog/parts/parts.ts">CreatePartRequest</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ListPart</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Part</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">UpdatePartRequest</a></code>

Methods:

- <code title="post /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">create</a>({ ...params }) -> Part</code>
- <code title="get /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">retrieve</a>(id, { ...params }) -> Part</code>
- <code title="patch /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">update</a>(id, { ...params }) -> Part</code>
- <code title="get /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">list</a>({ ...params }) -> ListPart</code>
- <code title="delete /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">delete</a>(id) -> Part</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/parts/actions.ts">BulkUpsertPartsRequest</a></code>
- <code><a href="./src/resources/catalog/parts/actions.ts">ExportPartsRequest</a></code>
- <code><a href="./src/resources/catalog/parts/actions.ts">UpsertPartInput</a></code>
- <code><a href="./src/resources/catalog/parts/actions.ts">UpsertPartProperty</a></code>

Methods:

- <code title="post /v1/catalog/parts/actions/bulk-upsert">client.catalog.parts.actions.<a href="./src/resources/catalog/parts/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/parts/actions/export">client.catalog.parts.actions.<a href="./src/resources/catalog/parts/actions.ts">export</a>({ ...params }) -> Job</code>

## ProductLines

Types:

- <code><a href="./src/resources/catalog/product-lines/product-lines.ts">CreateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines/product-lines.ts">UpdateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines/product-lines.ts">ProductLineDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines/product-lines.ts">create</a>({ ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines/product-lines.ts">retrieve</a>(id, { ...params }) -> ProductLine</code>
- <code title="patch /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines/product-lines.ts">update</a>(id, { ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines/product-lines.ts">list</a>({ ...params }) -> ListProductLine</code>
- <code title="delete /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines/product-lines.ts">delete</a>(id) -> ProductLineDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/product-lines/actions.ts">BulkUpsertProductLinesRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines/actions.ts">ExportProductLinesRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines/actions.ts">UpsertProductLineInput</a></code>

Methods:

- <code title="post /v1/catalog/product-lines/actions/bulk-upsert">client.catalog.productLines.actions.<a href="./src/resources/catalog/product-lines/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/product-lines/actions/export">client.catalog.productLines.actions.<a href="./src/resources/catalog/product-lines/actions.ts">export</a>({ ...params }) -> Job</code>

## Products

Types:

- <code><a href="./src/resources/catalog/products/products.ts">CreateProductRequest</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ListProduct</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">UpdateProductRequest</a></code>

Methods:

- <code title="post /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">retrieve</a>(id, { ...params }) -> Product</code>
- <code title="patch /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">list</a>({ ...params }) -> ListProduct</code>
- <code title="delete /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">delete</a>(id, { ...params }) -> Product</code>
- <code title="put /v1/catalog/products/{id}/product-line/{product_line_id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">changeProductLine</a>(productLineID, { ...params }) -> Product</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/products/actions.ts">BulkUpsertProductsRequest</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ExportProductsRequest</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">UpsertProductInput</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">UpsertProductProperty</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ValidateProductsRequest</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ValidateProductsResponse</a></code>

Methods:

- <code title="post /v1/catalog/products/actions/bulk-upsert">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/catalog/products/actions/export">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">export</a>({ ...params }) -> Job</code>
- <code title="put /v1/catalog/products/actions/validate">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">validate</a>({ ...params }) -> ValidateProductsResponse</code>

## ProductTypes

Types:

- <code><a href="./src/resources/catalog/product-types.ts">CreateProductTypeRequest</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ListProductType</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ProductType</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">UpdateProductTypeRequest</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ProductTypeDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/product-types">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">create</a>({ ...params }) -> ProductType</code>
- <code title="get /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">retrieve</a>(id) -> ProductType</code>
- <code title="patch /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">update</a>(id, { ...params }) -> ProductType</code>
- <code title="get /v1/catalog/product-types">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">list</a>({ ...params }) -> ListProductType</code>
- <code title="delete /v1/catalog/product-types/{id}">client.catalog.productTypes.<a href="./src/resources/catalog/product-types.ts">delete</a>(id) -> ProductTypeDeleteResponse</code>

## Catalog

### ProductLines

Types:

- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogAttribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogCategory</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProduct</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProductLine</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProperty</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogAttribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogCategory</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProduct</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProductLine</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProperty</a></code>

Methods:

- <code title="get /v1/catalog/catalog/product-lines">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">list</a>({ ...params }) -> ListCatalogProductLine</code>
- <code title="get /v1/catalog/catalog/product-lines/{id}/products">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">retrieveProducts</a>(id, { ...params }) -> ListCatalogCategory</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListAvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListToolGroup</a></code>
- <code><a href="./src/resources/ai/ai.ts">ToolGroup</a></code>

Methods:

- <code title="get /v1/ai/tool-groups">client.ai.<a href="./src/resources/ai/ai.ts">retrieveToolGroups</a>({ ...params }) -> ListToolGroup</code>
- <code title="get /v1/ai/tools">client.ai.<a href="./src/resources/ai/ai.ts">retrieveTools</a>({ ...params }) -> ListAvailableTool</code>

## Agents

Types:

- <code><a href="./src/resources/ai/agents.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/agents.ts">ConfigInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">CreateAgentRequest</a></code>
- <code><a href="./src/resources/ai/agents.ts">ListAgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/agents.ts">ToolInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">TriggerConfig</a></code>
- <code><a href="./src/resources/ai/agents.ts">TriggerConfigInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">UpdateAgentRequest</a></code>
- <code><a href="./src/resources/ai/agents.ts">UpdateAgentStatusRequest</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">create</a>({ ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">retrieve</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="patch /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">update</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">list</a>({ ...params }) -> ListAgentDefinition</code>
- <code title="delete /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">delete</a>(id) -> AgentDeleteResponse</code>
- <code title="put /v1/ai/agents/{id}/status">client.ai.agents.<a href="./src/resources/ai/agents.ts">updateStatus</a>(id, { ...params }) -> AgentDefinition</code>

## Runs

Types:

- <code><a href="./src/resources/ai/runs/runs.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentRun</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">TriggerRunRequest</a></code>

Methods:

- <code title="post /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">create</a>({ ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs/{id}">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">retrieve</a>(id, { ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">list</a>({ ...params }) -> ListAgentRun</code>

### Actions

Types:

- <code><a href="./src/resources/ai/runs/actions.ts">ContinueRunRequest</a></code>

Methods:

- <code title="post /v1/ai/runs/{id}/actions/cancel">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">cancel</a>(id, { ...params }) -> AgentRun</code>
- <code title="post /v1/ai/runs/{id}/actions/continue">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">continue</a>(id, { ...params }) -> AgentRun</code>
- <code title="post /v1/ai/runs/{id}/actions/retry">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">retry</a>(id, { ...params }) -> AgentRun</code>

## Memories

Types:

- <code><a href="./src/resources/ai/memories.ts">AgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">CreateMemoryRequest</a></code>
- <code><a href="./src/resources/ai/memories.ts">ListAgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">UpdateMemoryRequest</a></code>
- <code><a href="./src/resources/ai/memories.ts">MemoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">create</a>({ ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">retrieve</a>(id) -> AgentMemory</code>
- <code title="patch /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">update</a>(id, { ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">list</a>({ ...params }) -> ListAgentMemory</code>
- <code title="delete /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">delete</a>(id) -> MemoryDeleteResponse</code>

# Messaging

Types:

- <code><a href="./src/resources/messaging/messaging.ts">Conversation</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ConversationParticipant</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ListActor</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ListConversationParticipant</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ListMessageAttachment</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ListMessagingGroupMember</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">Message</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">MessageAttachment</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">MessagingGroup</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">MessagingGroupMember</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">ReadCursor</a></code>
- <code><a href="./src/resources/messaging/messaging.ts">SupportAvailability</a></code>

Methods:

- <code title="get /v1/messaging/contacts">client.messaging.<a href="./src/resources/messaging/messaging.ts">retrieveContacts</a>({ ...params }) -> ListActor</code>
- <code title="get /v1/messaging/support-availability">client.messaging.<a href="./src/resources/messaging/messaging.ts">retrieveSupportAvailability</a>() -> SupportAvailability</code>
- <code title="post /v1/messaging/support">client.messaging.<a href="./src/resources/messaging/messaging.ts">support</a>({ ...params }) -> Conversation</code>

## Notifications

Types:

- <code><a href="./src/resources/messaging/notifications/notifications.ts">ListNotification</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">ListNotificationUnreadSummaryAccount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">Notification</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationSendResult</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationTargetInput</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadCount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadSummary</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadSummaryAccount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">SendNotificationRequest</a></code>

Methods:

- <code title="post /v1/messaging/notifications">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">create</a>({ ...params }) -> NotificationSendResult</code>
- <code title="get /v1/messaging/notifications/{id}">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieve</a>(id, { ...params }) -> Notification</code>
- <code title="get /v1/messaging/notifications">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">list</a>({ ...params }) -> ListNotification</code>
- <code title="get /v1/messaging/notifications/unread-count">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieveUnreadCount</a>() -> NotificationUnreadCount</code>
- <code title="get /v1/messaging/notifications/unread-summary">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieveUnreadSummary</a>() -> NotificationUnreadSummary</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/notifications/actions.ts">ActionMarkAllSeenResponse</a></code>

Methods:

- <code title="post /v1/messaging/notifications/{id}/actions/dismiss">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">dismiss</a>(id, { ...params }) -> Notification</code>
- <code title="post /v1/messaging/notifications/actions/mark-all-seen">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">markAllSeen</a>() -> ActionMarkAllSeenResponse</code>
- <code title="post /v1/messaging/notifications/{id}/actions/read">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">read</a>(id, { ...params }) -> Notification</code>
- <code title="post /v1/messaging/notifications/{id}/actions/seen">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">seen</a>(id, { ...params }) -> Notification</code>

## Announcements

Types:

- <code><a href="./src/resources/messaging/announcements/announcements.ts">Announcement</a></code>
- <code><a href="./src/resources/messaging/announcements/announcements.ts">ListAnnouncement</a></code>

Methods:

- <code title="get /v1/messaging/announcements/{id}">client.messaging.announcements.<a href="./src/resources/messaging/announcements/announcements.ts">retrieve</a>(id, { ...params }) -> Announcement</code>
- <code title="get /v1/messaging/announcements">client.messaging.announcements.<a href="./src/resources/messaging/announcements/announcements.ts">list</a>({ ...params }) -> ListAnnouncement</code>

### Actions

Methods:

- <code title="post /v1/messaging/announcements/{id}/actions/dismiss">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">dismiss</a>(id, { ...params }) -> Announcement</code>
- <code title="post /v1/messaging/announcements/{id}/actions/read">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">read</a>(id, { ...params }) -> Announcement</code>
- <code title="post /v1/messaging/announcements/{id}/actions/seen">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">seen</a>(id, { ...params }) -> Announcement</code>

## Conversations

Types:

- <code><a href="./src/resources/messaging/conversations/conversations.ts">CreateConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListConversation</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">UpdateConversationRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">create</a>({ ...params }) -> Conversation</code>
- <code title="get /v1/messaging/conversations/{id}">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">retrieve</a>(id, { ...params }) -> Conversation</code>
- <code title="patch /v1/messaging/conversations/{id}">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">update</a>(id, { ...params }) -> Conversation</code>
- <code title="get /v1/messaging/conversations">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">list</a>({ ...params }) -> ListConversation</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/actions.ts">AssignConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">MarkConversationReadRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">MuteConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">ReportConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">SetLegalHoldRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">SetWorkflowStatusRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/actions/archive">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">archive</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/assign">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">assign</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/hide">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">hide</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/leave">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">leave</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/mute">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">mute</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/read">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">read</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/redact">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">redact</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/report">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">report</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/set-legal-hold">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">setLegalHold</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/set-status">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">setStatus</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/typing">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">typing</a>(id) -> MessageResource</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unarchive">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unarchive</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unhide">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unhide</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unmute">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unmute</a>(id, { ...params }) -> Conversation</code>

### Links

Types:

- <code><a href="./src/resources/messaging/conversations/links.ts">AddConversationLinkRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">ConversationLink</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">ListConversationLink</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">LinkDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/links">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">create</a>(id, { ...params }) -> ConversationLink</code>
- <code title="get /v1/messaging/conversations/{id}/links">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">list</a>(id, { ...params }) -> ListConversationLink</code>
- <code title="delete /v1/messaging/conversations/{id}/links/{link_id}">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">delete</a>(linkID, { ...params }) -> LinkDeleteResponse</code>

### Messages

Types:

- <code><a href="./src/resources/messaging/conversations/messages.ts">ListMessage</a></code>
- <code><a href="./src/resources/messaging/conversations/messages.ts">MessageAttachmentInput</a></code>
- <code><a href="./src/resources/messaging/conversations/messages.ts">SendMessageRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/messages">client.messaging.conversations.messages.<a href="./src/resources/messaging/conversations/messages.ts">create</a>(id, { ...params }) -> Message</code>
- <code title="get /v1/messaging/conversations/{id}/messages">client.messaging.conversations.messages.<a href="./src/resources/messaging/conversations/messages.ts">list</a>(id, { ...params }) -> ListMessage</code>

### Participants

Types:

- <code><a href="./src/resources/messaging/conversations/participants/participants.ts">AddParticipantRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/participants/participants.ts">ParticipantDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/participants">client.messaging.conversations.participants.<a href="./src/resources/messaging/conversations/participants/participants.ts">create</a>(id, { ...params }) -> Conversation</code>
- <code title="delete /v1/messaging/conversations/{id}/participants/{pid}">client.messaging.conversations.participants.<a href="./src/resources/messaging/conversations/participants/participants.ts">delete</a>(pid, { ...params }) -> ParticipantDeleteResponse</code>

#### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/participants/actions.ts">UpdateParticipantRoleRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/participants/{pid}/actions/set-role">client.messaging.conversations.participants.actions.<a href="./src/resources/messaging/conversations/participants/actions.ts">setRole</a>(pid, { ...params }) -> Conversation</code>

### Agents

Types:

- <code><a href="./src/resources/messaging/conversations/agents.ts">AddAgentParticipantRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/agents">client.messaging.conversations.agents.<a href="./src/resources/messaging/conversations/agents.ts">create</a>(id, { ...params }) -> ConversationParticipant</code>
- <code title="delete /v1/messaging/conversations/{id}/agents/{pid}">client.messaging.conversations.agents.<a href="./src/resources/messaging/conversations/agents.ts">delete</a>(pid, { ...params }) -> AgentDeleteResponse</code>

### Attachments

#### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/attachments/actions.ts">AttachmentUploadTarget</a></code>
- <code><a href="./src/resources/messaging/conversations/attachments/actions.ts">CreateAttachmentUploadURLRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/attachments/actions/upload-url">client.messaging.conversations.attachments.actions.<a href="./src/resources/messaging/conversations/attachments/actions.ts">uploadURL</a>(id, { ...params }) -> AttachmentUploadTarget</code>

## Messages

Types:

- <code><a href="./src/resources/messaging/messages/messages.ts">UpdateDraftRequest</a></code>

Methods:

- <code title="patch /v1/messaging/messages/{id}">client.messaging.messages.<a href="./src/resources/messaging/messages/messages.ts">update</a>(id, { ...params }) -> Message</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/messages/actions.ts">ApproveSendDraftRequest</a></code>

Methods:

- <code title="post /v1/messaging/messages/{id}/actions/approve-send">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">approveSend</a>(id, { ...params }) -> Message</code>
- <code title="post /v1/messaging/messages/{id}/actions/cancel">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">cancel</a>(id, { ...params }) -> Message</code>
- <code title="post /v1/messaging/messages/{id}/actions/reject">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">reject</a>(id, { ...params }) -> Message</code>

## Groups

Types:

- <code><a href="./src/resources/messaging/groups/groups.ts">CreateMessagingGroupRequest</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">ListMessagingGroup</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">UpdateMessagingGroupRequest</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/groups">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">create</a>({ ...params }) -> MessagingGroup</code>
- <code title="get /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">retrieve</a>(id) -> MessagingGroup</code>
- <code title="patch /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">update</a>(id, { ...params }) -> MessagingGroup</code>
- <code title="get /v1/messaging/groups">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">list</a>() -> ListMessagingGroup</code>
- <code title="delete /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">delete</a>(id) -> GroupDeleteResponse</code>

### Members

Types:

- <code><a href="./src/resources/messaging/groups/members.ts">AddMessagingGroupMemberRequest</a></code>

Methods:

- <code title="post /v1/messaging/groups/{id}/members">client.messaging.groups.members.<a href="./src/resources/messaging/groups/members.ts">create</a>(id, { ...params }) -> MessagingGroup</code>
- <code title="delete /v1/messaging/groups/{id}/members/{member_id}">client.messaging.groups.members.<a href="./src/resources/messaging/groups/members.ts">delete</a>(memberID, { ...params }) -> MessagingGroup</code>

## Blocks

Types:

- <code><a href="./src/resources/messaging/blocks.ts">BlockRequest</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListMessagingBlock</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">MessagingBlock</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/blocks">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">create</a>({ ...params }) -> MessagingBlock</code>
- <code title="get /v1/messaging/blocks">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">list</a>({ ...params }) -> ListMessagingBlock</code>
- <code title="delete /v1/messaging/blocks/{id}">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">delete</a>(id) -> BlockDeleteResponse</code>

## Preferences

Types:

- <code><a href="./src/resources/messaging/preferences.ts">ListNotificationPreference</a></code>
- <code><a href="./src/resources/messaging/preferences.ts">NotificationPreference</a></code>
- <code><a href="./src/resources/messaging/preferences.ts">UpsertNotificationPreferenceRequest</a></code>

Methods:

- <code title="put /v1/messaging/preferences">client.messaging.preferences.<a href="./src/resources/messaging/preferences.ts">update</a>({ ...params }) -> NotificationPreference</code>
- <code title="get /v1/messaging/preferences">client.messaging.preferences.<a href="./src/resources/messaging/preferences.ts">list</a>() -> ListNotificationPreference</code>

## EmailDomains

Types:

- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">CreateEmailDomainRequest</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">EmailDomain</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">ListEmailDomain</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">EmailDomainDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/email-domains">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">create</a>({ ...params }) -> EmailDomain</code>
- <code title="get /v1/messaging/email-domains/{id}">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">retrieve</a>(id) -> EmailDomain</code>
- <code title="get /v1/messaging/email-domains">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">list</a>() -> ListEmailDomain</code>
- <code title="delete /v1/messaging/email-domains/{id}">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">delete</a>(id) -> EmailDomainDeleteResponse</code>

### Actions

Methods:

- <code title="post /v1/messaging/email-domains/{id}/actions/verify">client.messaging.emailDomains.actions.<a href="./src/resources/messaging/email-domains/actions.ts">verify</a>(id) -> EmailDomain</code>

## EmailInboxes

Types:

- <code><a href="./src/resources/messaging/email-inboxes.ts">CreateEmailInboxRequest</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">EmailInbox</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">ListEmailInbox</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">UpdateEmailInboxRequest</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">EmailInboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/email-inboxes">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">create</a>({ ...params }) -> EmailInbox</code>
- <code title="get /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">retrieve</a>(id, { ...params }) -> EmailInbox</code>
- <code title="patch /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">update</a>(id, { ...params }) -> EmailInbox</code>
- <code title="get /v1/messaging/email-inboxes">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">list</a>({ ...params }) -> ListEmailInbox</code>
- <code title="delete /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">delete</a>(id) -> EmailInboxDeleteResponse</code>

## SupportRoutes

Types:

- <code><a href="./src/resources/messaging/support-routes/support-routes.ts">SupportRoute</a></code>

Methods:

- <code title="get /v1/messaging/support-routes">client.messaging.supportRoutes.<a href="./src/resources/messaging/support-routes/support-routes.ts">list</a>({ ...params }) -> SupportRoute</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/support-routes/actions.ts">ClearSupportRouteRequest</a></code>
- <code><a href="./src/resources/messaging/support-routes/actions.ts">SetSupportRouteRequest</a></code>
- <code><a href="./src/resources/messaging/support-routes/actions.ts">ActionClearResponse</a></code>

Methods:

- <code title="post /v1/messaging/support-routes/actions/clear">client.messaging.supportRoutes.actions.<a href="./src/resources/messaging/support-routes/actions.ts">clear</a>({ ...params }) -> ActionClearResponse</code>
- <code title="post /v1/messaging/support-routes/actions/set">client.messaging.supportRoutes.actions.<a href="./src/resources/messaging/support-routes/actions.ts">set</a>({ ...params }) -> SupportRoute</code>

# Webhooks

## Stripe

Types:

- <code><a href="./src/resources/webhooks/stripe.ts">WebhookResponse</a></code>

Methods:

- <code title="post /v1/webhooks/stripe">client.webhooks.stripe.<a href="./src/resources/webhooks/stripe.ts">create</a>({ ...params }) -> WebhookResponse</code>
- <code title="post /v1/webhooks/stripe/accounts/{account_id}">client.webhooks.stripe.<a href="./src/resources/webhooks/stripe.ts">accounts</a>(accountID, { ...params }) -> WebhookResponse</code>

# Finance

Types:

- <code><a href="./src/resources/finance/finance.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">AllocationCustomer</a></code>
- <code><a href="./src/resources/finance/finance.ts">InvoiceAllocationEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListAdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListInvoiceAllocationEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListOpenCreditEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionType</a></code>
- <code><a href="./src/resources/finance/finance.ts">OpenCreditEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionType</a></code>

Methods:

- <code title="get /v1/finance/adjustment-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveAdjustmentTypes</a>({ ...params }) -> ListAdjustmentType</code>
- <code title="get /v1/finance/open-credits">client.finance.<a href="./src/resources/finance/finance.ts">retrieveOpenCredits</a>({ ...params }) -> ListOpenCreditEntry</code>
- <code title="get /v1/finance/transaction-methods">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionMethods</a>({ ...params }) -> ListTransactionMethod</code>
- <code title="get /v1/finance/transaction-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionTypes</a>({ ...params }) -> ListTransactionType</code>

## PaymentTerms

Types:

- <code><a href="./src/resources/finance/payment-terms.ts">CreatePaymentTermRequest</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">ListPaymentTerm</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">UpdatePaymentTermRequest</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermDeleteResponse</a></code>

Methods:

- <code title="post /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">create</a>({ ...params }) -> PaymentTerm</code>
- <code title="get /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrieve</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="patch /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">update</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="get /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">list</a>({ ...params }) -> ListPaymentTerm</code>
- <code title="delete /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">delete</a>(id) -> PaymentTermDeleteResponse</code>

## Invoices

Types:

- <code><a href="./src/resources/finance/invoices.ts">AllocationInvoice</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceRelated</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoice</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Shipment</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentRelated</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">UpdateInvoiceRequest</a></code>

Methods:

- <code title="get /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">retrieve</a>(id, { ...params }) -> Invoice</code>
- <code title="patch /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">update</a>(id, { ...params }) -> Invoice</code>
- <code title="get /v1/finance/invoices">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">list</a>({ ...params }) -> ListInvoice</code>

## Accounts

Types:

- <code><a href="./src/resources/finance/accounts/accounts.ts">InvoiceForPayment</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListInvoiceForPayment</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListTransactionDetail</a></code>

Methods:

- <code title="get /v1/finance/accounts/{account_id}/invoices">client.finance.accounts.<a href="./src/resources/finance/accounts/accounts.ts">retrieveInvoices</a>(accountID, { ...params }) -> ListInvoiceForPayment</code>
- <code title="get /v1/finance/accounts/{account_id}/transactions">client.finance.accounts.<a href="./src/resources/finance/accounts/accounts.ts">retrieveTransactions</a>(accountID, { ...params }) -> ListTransactionDetail</code>

### Actions

Types:

- <code><a href="./src/resources/finance/accounts/actions.ts">EmailReceivablesForCustomerRequest</a></code>
- <code><a href="./src/resources/finance/accounts/actions.ts">ActionEmailReceivablesResponse</a></code>

Methods:

- <code title="post /v1/finance/accounts/{account_id}/actions/email-receivables">client.finance.accounts.actions.<a href="./src/resources/finance/accounts/actions.ts">emailReceivables</a>(accountID, { ...params }) -> ActionEmailReceivablesResponse</code>

## Receivables

Types:

- <code><a href="./src/resources/finance/receivables/receivables.ts">ListReceivableEntry</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ReceivableEntry</a></code>

Methods:

- <code title="get /v1/finance/receivables">client.finance.receivables.<a href="./src/resources/finance/receivables/receivables.ts">list</a>({ ...params }) -> ListReceivableEntry</code>

### Accounts

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}">client.finance.receivables.accounts.<a href="./src/resources/finance/receivables/accounts/accounts.ts">retrieve</a>(accountID, { ...params }) -> ListReceivableEntry</code>

#### Actions

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}/actions/export">client.finance.receivables.accounts.actions.<a href="./src/resources/finance/receivables/accounts/actions.ts">export</a>(accountID, { ...params }) -> FileDownload</code>

## Transactions

Types:

- <code><a href="./src/resources/finance/transactions.ts">CreateTransactionRequest</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListTransactionSummary</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionSummary</a></code>
- <code><a href="./src/resources/finance/transactions.ts">UpdateTransactionRequest</a></code>

Methods:

- <code title="post /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">create</a>({ ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">retrieve</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="patch /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">update</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">list</a>({ ...params }) -> ListTransactionSummary</code>
- <code title="delete /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">delete</a>(id, { ...params }) -> TransactionDetail</code>

## TransactionAllocations

Types:

- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationEntry</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationTransaction</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListAllocationEntry</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">UpdateTransactionAllocationRequest</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocationDeleteResponse</a></code>

Methods:

- <code title="patch /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">update</a>(id, { ...params }) -> TransactionAllocation</code>
- <code title="get /v1/finance/transaction-allocations">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">list</a>({ ...params }) -> ListAllocationEntry</code>
- <code title="delete /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">delete</a>(id) -> TransactionAllocationDeleteResponse</code>

## Settlements

Types:

- <code><a href="./src/resources/finance/settlements.ts">CreateSettlementAllocationRequest</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CreateSettlementRequest</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListSettlementSummary</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Settlement</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SettlementSummary</a></code>
- <code><a href="./src/resources/finance/settlements.ts">UpdateSettlementRequest</a></code>

Methods:

- <code title="post /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">create</a>({ ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">retrieve</a>(id, { ...params }) -> Settlement</code>
- <code title="patch /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">update</a>(id, { ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">list</a>({ ...params }) -> ListSettlementSummary</code>
- <code title="delete /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">delete</a>(id) -> Settlement</code>

# Operations

Types:

- <code><a href="./src/resources/operations/operations.ts">DemandOverrideType</a></code>
- <code><a href="./src/resources/operations/operations.ts">InventoryItem</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListDemandOverrideType</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListInventoryItem</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListMachineDowntimeReason</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListMachineStatus</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListScheduleDeviationType</a></code>
- <code><a href="./src/resources/operations/operations.ts">MachineCampaign</a></code>
- <code><a href="./src/resources/operations/operations.ts">MachineDowntimeReason</a></code>
- <code><a href="./src/resources/operations/operations.ts">MachineDowntimeReasonSummary</a></code>
- <code><a href="./src/resources/operations/operations.ts">MachineDowntimeSummary</a></code>
- <code><a href="./src/resources/operations/operations.ts">MachineStatus</a></code>
- <code><a href="./src/resources/operations/operations.ts">ScheduleDeviationType</a></code>
- <code><a href="./src/resources/operations/operations.ts">UpdateQuantityRequest</a></code>
- <code><a href="./src/resources/operations/operations.ts">UpdateRateRequest</a></code>

Methods:

- <code title="get /v1/operations/demand-override-types">client.operations.<a href="./src/resources/operations/operations.ts">retrieveDemandOverrideTypes</a>() -> ListDemandOverrideType</code>
- <code title="get /v1/operations/inventories">client.operations.<a href="./src/resources/operations/operations.ts">retrieveInventories</a>({ ...params }) -> ListInventoryItem</code>
- <code title="get /v1/operations/machine-downtime-reasons">client.operations.<a href="./src/resources/operations/operations.ts">retrieveMachineDowntimeReasons</a>() -> ListMachineDowntimeReason</code>
- <code title="get /v1/operations/machine-status">client.operations.<a href="./src/resources/operations/operations.ts">retrieveMachineStatus</a>({ ...params }) -> ListMachineStatus</code>
- <code title="get /v1/operations/schedule-deviation-types">client.operations.<a href="./src/resources/operations/operations.ts">retrieveScheduleDeviationTypes</a>() -> ListScheduleDeviationType</code>
- <code title="patch /v1/operations/quantities/{id}">client.operations.<a href="./src/resources/operations/operations.ts">updateQuantities</a>(id, { ...params }) -> Quantity</code>
- <code title="patch /v1/operations/rates/{id}">client.operations.<a href="./src/resources/operations/operations.ts">updateRates</a>(id, { ...params }) -> Rate</code>

## ShippingTerms

Types:

- <code><a href="./src/resources/operations/shipping-terms.ts">CreateShippingTermRequest</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ListShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">UpdateShippingTermRequest</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">create</a>({ ...params }) -> ShippingTerm</code>
- <code title="get /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieve</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="patch /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">update</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="get /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">list</a>({ ...params }) -> ListShippingTerm</code>
- <code title="delete /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">delete</a>(id) -> ShippingTermDeleteResponse</code>

## Carriers

Types:

- <code><a href="./src/resources/operations/carriers/carriers.ts">CreateCarrierRequest</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">ListCarrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">OAuthStatusResponse</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">UpdateCarrierRequest</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieve</a>(id, { ...params }) -> Carrier</code>
- <code title="patch /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">update</a>(id, { ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">list</a>({ ...params }) -> ListCarrier</code>
- <code title="delete /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">delete</a>(id) -> CarrierDeleteResponse</code>
- <code title="get /v1/operations/carriers/{id}/oauth-status">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieveOAuthStatus</a>(id) -> OAuthStatusResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/carriers/actions.ts">InitiateOAuthRequest</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">OAuthResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers/{id}/actions/initiate-oauth">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">initiateOAuth</a>(id, { ...params }) -> OAuthResponse</code>
- <code title="post /v1/operations/carriers/{id}/actions/sync-options">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">syncOptions</a>(id, { ...params }) -> Carrier</code>

### ServiceLevels

Types:

- <code><a href="./src/resources/operations/carriers/service-levels.ts">CreateServiceLevelRequest</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">UpdateServiceLevelRequest</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevelDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">create</a>(carrierID, { ...params }) -> ServiceLevel</code>
- <code title="get /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieve</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="patch /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">update</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="get /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">list</a>(carrierID, { ...params }) -> ListServiceLevel</code>
- <code title="delete /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">delete</a>(id, { ...params }) -> ServiceLevelDeleteResponse</code>

## Suppliers

Types:

- <code><a href="./src/resources/operations/suppliers/suppliers.ts">CreateSupplierRequest</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">ListSupplierSummary</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">SupplierDetail</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">SupplierSummary</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">UpdateSupplierRequest</a></code>

Methods:

- <code title="post /v1/operations/suppliers">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">create</a>({ ...params }) -> SupplierDetail</code>
- <code title="get /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">retrieve</a>(id, { ...params }) -> SupplierDetail</code>
- <code title="patch /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">update</a>(id, { ...params }) -> SupplierDetail</code>
- <code title="get /v1/operations/suppliers">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">list</a>({ ...params }) -> ListSupplierSummary</code>
- <code title="delete /v1/operations/suppliers/{id}">client.operations.suppliers.<a href="./src/resources/operations/suppliers/suppliers.ts">delete</a>(id) -> SupplierDetail</code>

### Materials

Types:

- <code><a href="./src/resources/operations/suppliers/materials.ts">CreateSupplierMaterialRequest</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ListSupplierMaterial</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">SupplierMaterial</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">UpdateSupplierMaterialRequest</a></code>

Methods:

- <code title="post /v1/operations/suppliers/{supplier_id}/materials">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">create</a>(supplierID, { ...params }) -> SupplierMaterial</code>
- <code title="get /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">retrieve</a>(id, { ...params }) -> SupplierMaterial</code>
- <code title="patch /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">update</a>(id, { ...params }) -> SupplierMaterial</code>
- <code title="get /v1/operations/suppliers/{supplier_id}/materials">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">list</a>(supplierID, { ...params }) -> ListSupplierMaterial</code>
- <code title="delete /v1/operations/suppliers/{supplier_id}/materials/{id}">client.operations.suppliers.materials.<a href="./src/resources/operations/suppliers/materials.ts">delete</a>(id, { ...params }) -> SupplierMaterial</code>

### Actions

Types:

- <code><a href="./src/resources/operations/suppliers/actions.ts">BulkDeleteSuppliersRequest</a></code>
- <code><a href="./src/resources/operations/suppliers/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/suppliers/actions/bulk-delete">client.operations.suppliers.actions.<a href="./src/resources/operations/suppliers/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>

## Batches

Types:

- <code><a href="./src/resources/operations/batches/batches.ts">Batch</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchFlowNode</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchLot</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchReference</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">GetPossibleNextStepsRequest</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">GetRemainingQuantityToSplitRequest</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListBatchFlowNode</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListBatchLot</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListBatchReference</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListScanningProductionStepInfo</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ProductionRunReference</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ScanningProductionStepInfo</a></code>

Methods:

- <code title="delete /v1/operations/batches/{id}">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">delete</a>(id) -> Batch</code>
- <code title="post /v1/operations/batches/{id}/next-steps">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">nextSteps</a>(id, { ...params }) -> ListScanningProductionStepInfo</code>
- <code title="post /v1/operations/batches/remaining-quantities">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">remainingQuantities</a>({ ...params }) -> Quantity</code>
- <code title="get /v1/operations/batches/{id}/flow">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">retrieveFlow</a>(id) -> ListBatchFlowNode</code>

### Actions

Types:

- <code><a href="./src/resources/operations/batches/actions.ts">CloseBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">DeleteManyBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">InitializeBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">MergeBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">MoveBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">SplitBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">SplitQuantityInput</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/batches/actions/bulk-delete">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/operations/batches/actions/close">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">close</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/initialize">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">initialize</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/merge">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">merge</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/move">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">move</a>({ ...params }) -> Batch</code>
- <code title="post /v1/operations/batches/actions/split">client.operations.batches.actions.<a href="./src/resources/operations/batches/actions.ts">split</a>({ ...params }) -> Batch</code>

## ScanningStations

Types:

- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ConnectProductionStepsRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">CreateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">GetScanningStationConsumptionRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ListBatch</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ListScanningConsumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ScanningConsumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">UpdateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ScanningStationDeleteResponse</a></code>
- <code><a href="./src/resources/operations/scanning-stations/scanning-stations.ts">ScanningStationUpdateProductionStepsResponse</a></code>

Methods:

- <code title="post /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">create</a>({ ...params }) -> ScanningStation</code>
- <code title="get /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">retrieve</a>(id, { ...params }) -> ScanningStation</code>
- <code title="patch /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">update</a>(id, { ...params }) -> ScanningStation</code>
- <code title="get /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">list</a>({ ...params }) -> ListScanningStation</code>
- <code title="delete /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">delete</a>(id) -> ScanningStationDeleteResponse</code>
- <code title="post /v1/operations/scanning-stations/{id}/consumptions">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">consumptions</a>(id, { ...params }) -> ListScanningConsumption</code>
- <code title="get /v1/operations/scanning-stations/{id}/batches">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">retrieveBatches</a>(id, { ...params }) -> ListBatch</code>
- <code title="put /v1/operations/scanning-stations/{id}/production-steps">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations/scanning-stations.ts">updateProductionSteps</a>(id, { ...params }) -> ScanningStationUpdateProductionStepsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/scanning-stations/actions.ts">BulkUpsertScanningStationsRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/actions.ts">ExportScanningStationsRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations/actions.ts">UpsertScanningStationInput</a></code>

Methods:

- <code title="post /v1/operations/scanning-stations/actions/bulk-upsert">client.operations.scanningStations.actions.<a href="./src/resources/operations/scanning-stations/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/scanning-stations/actions/export">client.operations.scanningStations.actions.<a href="./src/resources/operations/scanning-stations/actions.ts">export</a>({ ...params }) -> Job</code>

## Analytics

Types:

- <code><a href="./src/resources/operations/analytics.ts">ListOpenBatchSummary</a></code>

Methods:

- <code title="put /v1/operations/analytics/open-batches">client.operations.analytics.<a href="./src/resources/operations/analytics.ts">updateOpenBatches</a>({ ...params }) -> ListOpenBatchSummary</code>

## Departments

Types:

- <code><a href="./src/resources/operations/departments/departments.ts">CreateDepartmentRequest</a></code>
- <code><a href="./src/resources/operations/departments/departments.ts">DepartmentRateInput</a></code>
- <code><a href="./src/resources/operations/departments/departments.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/departments/departments.ts">UpdateDepartmentRequest</a></code>
- <code><a href="./src/resources/operations/departments/departments.ts">DepartmentDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments/departments.ts">create</a>({ ...params }) -> Department</code>
- <code title="get /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments/departments.ts">retrieve</a>(id, { ...params }) -> Department</code>
- <code title="patch /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments/departments.ts">update</a>(id, { ...params }) -> Department</code>
- <code title="get /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments/departments.ts">list</a>({ ...params }) -> ListDepartment</code>
- <code title="delete /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments/departments.ts">delete</a>(id) -> DepartmentDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/departments/actions.ts">BulkUpsertDepartmentsRequest</a></code>
- <code><a href="./src/resources/operations/departments/actions.ts">ExportDepartmentsRequest</a></code>
- <code><a href="./src/resources/operations/departments/actions.ts">UpsertDepartmentInput</a></code>

Methods:

- <code title="post /v1/operations/departments/actions/bulk-upsert">client.operations.departments.actions.<a href="./src/resources/operations/departments/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/departments/actions/export">client.operations.departments.actions.<a href="./src/resources/operations/departments/actions.ts">export</a>({ ...params }) -> Job</code>

## ProductionSteps

Types:

- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateConsumptionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateProductionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateProductionStepRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateRateInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">UpdateProductionStepRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionStepDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/production-steps">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">create</a>({ ...params }) -> ProductionStep</code>
- <code title="get /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">retrieve</a>(id, { ...params }) -> ProductionStep</code>
- <code title="patch /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">update</a>(id, { ...params }) -> ProductionStep</code>
- <code title="get /v1/operations/production-steps">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">list</a>({ ...params }) -> ListProductionStep</code>
- <code title="delete /v1/operations/production-steps/{id}">client.operations.productionSteps.<a href="./src/resources/operations/production-steps/production-steps.ts">delete</a>(id) -> ProductionStepDeleteResponse</code>

### Consumptions

Types:

- <code><a href="./src/resources/operations/production-steps/consumptions.ts">CreateConsumptionRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">UpdateConsumptionRequest</a></code>

Methods:

- <code title="post /v1/operations/production-steps/{production_step_id}/consumptions">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">create</a>(productionStepID, { ...params }) -> Consumption</code>
- <code title="get /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">retrieve</a>(id, { ...params }) -> Consumption</code>
- <code title="patch /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">update</a>(id, { ...params }) -> Consumption</code>
- <code title="delete /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">delete</a>(id, { ...params }) -> Consumption</code>

### Productions

Types:

- <code><a href="./src/resources/operations/production-steps/productions.ts">UpdateProductionRequest</a></code>

Methods:

- <code title="get /v1/operations/production-steps/{production_step_id}/productions/{id}">client.operations.productionSteps.productions.<a href="./src/resources/operations/production-steps/productions.ts">retrieve</a>(id, { ...params }) -> ProductionOutput</code>
- <code title="patch /v1/operations/production-steps/{production_step_id}/productions/{id}">client.operations.productionSteps.productions.<a href="./src/resources/operations/production-steps/productions.ts">update</a>(id, { ...params }) -> ProductionOutput</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateConsumptionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateProductionOutputInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateProductionStepInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateProductionStepResult</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateProductionStepsRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkCreateProductionStepsResponse</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">BulkUpsertProductionStepsRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">ExportProductionStepsRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">ItemIdentifier</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">UpsertProductionStepInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">UpsertRateInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">UpsertStepConsumptionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/actions.ts">UpsertStepProductionInput</a></code>

Methods:

- <code title="post /v1/operations/production-steps/actions/bulk-create">client.operations.productionSteps.actions.<a href="./src/resources/operations/production-steps/actions.ts">bulkCreate</a>({ ...params }) -> BulkCreateProductionStepsResponse</code>
- <code title="post /v1/operations/production-steps/actions/bulk-upsert">client.operations.productionSteps.actions.<a href="./src/resources/operations/production-steps/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/production-steps/actions/export">client.operations.productionSteps.actions.<a href="./src/resources/operations/production-steps/actions.ts">export</a>({ ...params }) -> Job</code>

## Deliveries

Types:

- <code><a href="./src/resources/operations/deliveries.ts">Delivery</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">DeliveryLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">EmailContact</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListDelivery</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListDeliveryLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListEmailContact</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListPurchaseOrderLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Lot</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">PurchaseOrder</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">PurchaseOrderLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Supplier</a></code>

Methods:

- <code title="get /v1/operations/deliveries/{id}">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">retrieve</a>(id, { ...params }) -> Delivery</code>
- <code title="get /v1/operations/deliveries">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">list</a>({ ...params }) -> ListDelivery</code>

## InventoryChangeLogs

Types:

- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">InventoryChangeLog</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListInventoryChangeLog</a></code>

Methods:

- <code title="get /v1/operations/inventory-change-logs/{id}">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">retrieve</a>(id, { ...params }) -> InventoryChangeLog</code>
- <code title="get /v1/operations/inventory-change-logs">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">list</a>({ ...params }) -> ListInventoryChangeLog</code>

### Actions

Methods:

- <code title="get /v1/operations/inventory-change-logs/actions/export">client.operations.inventoryChangeLogs.actions.<a href="./src/resources/operations/inventory-change-logs/actions.ts">export</a>({ ...params }) -> FileDownload</code>

## Machines

Types:

- <code><a href="./src/resources/operations/machines/machines.ts">CreateMachineRequest</a></code>
- <code><a href="./src/resources/operations/machines/machines.ts">UpdateMachineRequest</a></code>
- <code><a href="./src/resources/operations/machines/machines.ts">MachineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines/machines.ts">create</a>({ ...params }) -> Machine</code>
- <code title="get /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines/machines.ts">retrieve</a>(id, { ...params }) -> Machine</code>
- <code title="patch /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines/machines.ts">update</a>(id, { ...params }) -> Machine</code>
- <code title="get /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines/machines.ts">list</a>({ ...params }) -> ListMachine</code>
- <code title="delete /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines/machines.ts">delete</a>(id) -> MachineDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/machines/actions.ts">BulkUpsertMachinesRequest</a></code>
- <code><a href="./src/resources/operations/machines/actions.ts">ExportMachinesRequest</a></code>
- <code><a href="./src/resources/operations/machines/actions.ts">UpsertMachineInput</a></code>

Methods:

- <code title="post /v1/operations/machines/actions/bulk-upsert">client.operations.machines.actions.<a href="./src/resources/operations/machines/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/machines/actions/export">client.operations.machines.actions.<a href="./src/resources/operations/machines/actions.ts">export</a>({ ...params }) -> Job</code>

## ReceivingOrders

Types:

- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListReceivingOrder</a></code>

Methods:

- <code title="get /v1/operations/receiving-orders/{id}">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">retrieve</a>(id, { ...params }) -> ReceivingOrder</code>
- <code title="get /v1/operations/receiving-orders">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">list</a>({ ...params }) -> ListReceivingOrder</code>

### Actions

Types:

- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AllocationRequest</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">StockLineItemRequest</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">StockReceivingOrderRequest</a></code>

Methods:

- <code title="put /v1/operations/receiving-orders/{id}/actions/receive">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">receive</a>(id) -> ReceivingOrder</code>
- <code title="post /v1/operations/receiving-orders/{id}/actions/stock">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">stock</a>(id, { ...params }) -> ReceivingOrder</code>
- <code title="put /v1/operations/receiving-orders/{id}/actions/void">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">void</a>(id) -> ReceivingOrder</code>

### Lines

Types:

- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">UpdateReceivingOrderLineRequest</a></code>

Methods:

- <code title="patch /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}">client.operations.receivingOrders.lines.<a href="./src/resources/operations/receiving-orders/lines/lines.ts">update</a>(id, { ...params }) -> ReceivingOrderLine</code>

#### Actions

Methods:

- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/receive">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">receive</a>(id, { ...params }) -> ReceivingOrderLine</code>
- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/void">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">void</a>(id, { ...params }) -> ReceivingOrderLine</code>

## ProductionFlows

Types:

- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProductionFlowConsumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProductionFlowStep</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlow</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowConsumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowProduction</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowStep</a></code>

Methods:

- <code title="get /v1/operations/production-flows/by-item/{item_id}">client.operations.productionFlows.<a href="./src/resources/operations/production-flows/production-flows.ts">retrieveByItem</a>(itemID, { ...params }) -> ProductionFlow</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-flows/actions.ts">ConnectStepsRequest</a></code>
- <code><a href="./src/resources/operations/production-flows/actions.ts">ActionConnectStepsResponse</a></code>

Methods:

- <code title="post /v1/operations/production-flows/actions/connect-steps">client.operations.productionFlows.actions.<a href="./src/resources/operations/production-flows/actions.ts">connectSteps</a>({ ...params }) -> ActionConnectStepsResponse</code>

## ProductionRuns

Types:

- <code><a href="./src/resources/operations/production-runs/production-runs.ts">CreateProductionRunRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListProductionRun</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">UpdateProductionRunRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">create</a>({ ...params }) -> ProductionRun</code>
- <code title="get /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">retrieve</a>(id, { ...params }) -> ProductionRun</code>
- <code title="patch /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">update</a>(id, { ...params }) -> ProductionRun</code>
- <code title="get /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">list</a>({ ...params }) -> ListProductionRun</code>
- <code title="delete /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">delete</a>(id) -> ProductionRunDeleteResponse</code>

### Batches

Types:

- <code><a href="./src/resources/operations/production-runs/batches.ts">AddBatchInputRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">AddBatchesToProductionRunRequest</a></code>

Methods:

- <code title="post /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">create</a>(id, { ...params }) -> ListBatch</code>
- <code title="get /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">list</a>(id, { ...params }) -> ListBatch</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-runs/actions.ts">BulkCreateBatchInput</a></code>
- <code><a href="./src/resources/operations/production-runs/actions.ts">BulkCreateProductionRunInput</a></code>
- <code><a href="./src/resources/operations/production-runs/actions.ts">BulkCreateProductionRunsRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/actions.ts">ExportProductionRunsRequest</a></code>

Methods:

- <code title="post /v1/operations/production-runs/actions/bulk-create">client.operations.productionRuns.actions.<a href="./src/resources/operations/production-runs/actions.ts">bulkCreate</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/production-runs/actions/export">client.operations.productionRuns.actions.<a href="./src/resources/operations/production-runs/actions.ts">export</a>({ ...params }) -> Job</code>

## MachineDowntimeEvents

Types:

- <code><a href="./src/resources/operations/machine-downtime-events.ts">CreateMachineDowntimeEventRequest</a></code>
- <code><a href="./src/resources/operations/machine-downtime-events.ts">ListMachineDowntimeEvent</a></code>
- <code><a href="./src/resources/operations/machine-downtime-events.ts">MachineDowntimeEvent</a></code>
- <code><a href="./src/resources/operations/machine-downtime-events.ts">UpdateMachineDowntimeEventRequest</a></code>
- <code><a href="./src/resources/operations/machine-downtime-events.ts">MachineDowntimeEventDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/machine-downtime-events">client.operations.machineDowntimeEvents.<a href="./src/resources/operations/machine-downtime-events.ts">create</a>({ ...params }) -> MachineDowntimeEvent</code>
- <code title="get /v1/operations/machine-downtime-events/{id}">client.operations.machineDowntimeEvents.<a href="./src/resources/operations/machine-downtime-events.ts">retrieve</a>(id, { ...params }) -> MachineDowntimeEvent</code>
- <code title="patch /v1/operations/machine-downtime-events/{id}">client.operations.machineDowntimeEvents.<a href="./src/resources/operations/machine-downtime-events.ts">update</a>(id, { ...params }) -> MachineDowntimeEvent</code>
- <code title="get /v1/operations/machine-downtime-events">client.operations.machineDowntimeEvents.<a href="./src/resources/operations/machine-downtime-events.ts">list</a>({ ...params }) -> ListMachineDowntimeEvent</code>
- <code title="delete /v1/operations/machine-downtime-events/{id}">client.operations.machineDowntimeEvents.<a href="./src/resources/operations/machine-downtime-events.ts">delete</a>(id) -> MachineDowntimeEventDeleteResponse</code>

## DemandOverrides

Types:

- <code><a href="./src/resources/operations/demand-overrides.ts">CreateDemandOverrideRequest</a></code>
- <code><a href="./src/resources/operations/demand-overrides.ts">DemandOverride</a></code>
- <code><a href="./src/resources/operations/demand-overrides.ts">ListDemandOverride</a></code>
- <code><a href="./src/resources/operations/demand-overrides.ts">UpdateDemandOverrideRequest</a></code>
- <code><a href="./src/resources/operations/demand-overrides.ts">DemandOverrideDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/demand-overrides">client.operations.demandOverrides.<a href="./src/resources/operations/demand-overrides.ts">create</a>({ ...params }) -> DemandOverride</code>
- <code title="get /v1/operations/demand-overrides/{id}">client.operations.demandOverrides.<a href="./src/resources/operations/demand-overrides.ts">retrieve</a>(id, { ...params }) -> DemandOverride</code>
- <code title="patch /v1/operations/demand-overrides/{id}">client.operations.demandOverrides.<a href="./src/resources/operations/demand-overrides.ts">update</a>(id, { ...params }) -> DemandOverride</code>
- <code title="get /v1/operations/demand-overrides">client.operations.demandOverrides.<a href="./src/resources/operations/demand-overrides.ts">list</a>({ ...params }) -> ListDemandOverride</code>
- <code title="delete /v1/operations/demand-overrides/{id}">client.operations.demandOverrides.<a href="./src/resources/operations/demand-overrides.ts">delete</a>(id) -> DemandOverrideDeleteResponse</code>

## ProductionSchedules

Types:

- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">GenerateProductionScheduleRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionSchedule</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionScheduleDerivedLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionScheduleDeviation</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionScheduleFinishedPolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionScheduleFinishingLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListProductionScheduleItemPolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListReleaseScheduleBatch</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListReleasedScheduleLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListScheduleAppliedOverride</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListScheduleAtRiskOrder</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListScheduleOrderCoverage</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ListScheduleOrderCoverageLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionSchedule</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleDerivedLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleDeviation</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleFinishedPolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleFinishingLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleItemPolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ReleaseScheduleBatch</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ReleaseScheduleWeekPreview</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ReleasedScheduleLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleAppliedOverride</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleAtRiskOrder</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleDiagnostics</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleFinishingDiagnostics</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleOrderCoverage</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ScheduleOrderCoverageLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/production-schedules.ts">ProductionScheduleDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/production-schedules">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">create</a>({ ...params }) -> ProductionSchedule</code>
- <code title="get /v1/operations/production-schedules/{id}">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieve</a>(id) -> ProductionSchedule</code>
- <code title="get /v1/operations/production-schedules">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">list</a>({ ...params }) -> ListProductionSchedule</code>
- <code title="delete /v1/operations/production-schedules/{id}">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">delete</a>(id) -> ProductionScheduleDeleteResponse</code>
- <code title="get /v1/operations/production-schedules/{id}/at-risk-orders">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveAtRiskOrders</a>(id) -> ListScheduleOrderCoverage</code>
- <code title="get /v1/operations/production-schedules/current">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveCurrent</a>() -> ProductionSchedule</code>
- <code title="get /v1/operations/production-schedules/{id}/derived-lines">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveDerivedLines</a>(id, { ...params }) -> ListProductionScheduleDerivedLine</code>
- <code title="get /v1/operations/production-schedules/{id}/deviations">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveDeviations</a>(id, { ...params }) -> ListProductionScheduleDeviation</code>
- <code title="get /v1/operations/production-schedules/{id}/finished-policies">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveFinishedPolicies</a>(id) -> ListProductionScheduleFinishedPolicy</code>
- <code title="get /v1/operations/production-schedules/{id}/finishing-lines">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveFinishingLines</a>(id, { ...params }) -> ListProductionScheduleFinishingLine</code>
- <code title="get /v1/operations/production-schedules/{id}/item-policies">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveItemPolicies</a>(id) -> ListProductionScheduleItemPolicy</code>
- <code title="get /v1/operations/production-schedules/{id}/week-release-preview">client.operations.productionSchedules.<a href="./src/resources/operations/production-schedules/production-schedules.ts">retrieveWeekReleasePreview</a>(id, { ...params }) -> ReleaseScheduleWeekPreview</code>

### Lines

Types:

- <code><a href="./src/resources/operations/production-schedules/lines.ts">CreateProductionScheduleLineRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/lines.ts">ListProductionScheduleLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/lines.ts">ProductionScheduleLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/lines.ts">UpdateProductionScheduleLineRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/production-schedules/{id}/lines">client.operations.productionSchedules.lines.<a href="./src/resources/operations/production-schedules/lines.ts">create</a>(id, { ...params }) -> ProductionScheduleLine</code>
- <code title="patch /v1/operations/production-schedules/{id}/lines/{line_id}">client.operations.productionSchedules.lines.<a href="./src/resources/operations/production-schedules/lines.ts">update</a>(lineID, { ...params }) -> ProductionScheduleLine</code>
- <code title="get /v1/operations/production-schedules/{id}/lines">client.operations.productionSchedules.lines.<a href="./src/resources/operations/production-schedules/lines.ts">list</a>(id, { ...params }) -> ListProductionScheduleLine</code>
- <code title="delete /v1/operations/production-schedules/{id}/lines/{line_id}">client.operations.productionSchedules.lines.<a href="./src/resources/operations/production-schedules/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/production-schedules/actions.ts">ListScheduleCampaign</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ListScheduleDiffLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ListSchedulePolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ListScheduleProjection</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">PreviewProductionScheduleRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">PreviewRegenerateProductionScheduleRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ProductionSchedulePreview</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ProductionScheduleRegeneratePreview</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">RegenerateProductionScheduleRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ReleaseProductionScheduleWeekRequest</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ReleaseScheduleWeekResult</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ScheduleCampaign</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ScheduleDiffLine</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">SchedulePolicy</a></code>
- <code><a href="./src/resources/operations/production-schedules/actions.ts">ScheduleProjection</a></code>

Methods:

- <code title="put /v1/operations/production-schedules/{id}/actions/archive">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">archive</a>(id) -> ProductionSchedule</code>
- <code title="put /v1/operations/production-schedules/actions/preview">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">preview</a>({ ...params }) -> ProductionSchedulePreview</code>
- <code title="put /v1/operations/production-schedules/{id}/actions/preview-regenerate">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">previewRegenerate</a>(id, { ...params }) -> ProductionScheduleRegeneratePreview</code>
- <code title="put /v1/operations/production-schedules/{id}/actions/publish">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">publish</a>(id) -> ProductionSchedule</code>
- <code title="put /v1/operations/production-schedules/{id}/actions/regenerate">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">regenerate</a>(id, { ...params }) -> ProductionSchedule</code>
- <code title="post /v1/operations/production-schedules/{id}/actions/release-week">client.operations.productionSchedules.actions.<a href="./src/resources/operations/production-schedules/actions.ts">releaseWeek</a>(id, { ...params }) -> ReleaseScheduleWeekResult</code>

## ProductionScheduleSettings

Types:

- <code><a href="./src/resources/operations/production-schedule-settings/production-schedule-settings.ts">ProductionScheduleSettings</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/production-schedule-settings.ts">UpdateProductionScheduleSettingsRequest</a></code>

Methods:

- <code title="put /v1/operations/production-schedule-settings">client.operations.productionScheduleSettings.<a href="./src/resources/operations/production-schedule-settings/production-schedule-settings.ts">update</a>({ ...params }) -> ProductionScheduleSettings</code>
- <code title="get /v1/operations/production-schedule-settings">client.operations.productionScheduleSettings.<a href="./src/resources/operations/production-schedule-settings/production-schedule-settings.ts">list</a>() -> ProductionScheduleSettings</code>

### Resources

Types:

- <code><a href="./src/resources/operations/production-schedule-settings/resources.ts">ListProductionScheduleResourceSetting</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/resources.ts">ProductionScheduleResourceSetting</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/resources.ts">UpsertResourceSettingRequest</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/resources.ts">ResourceDeleteResponse</a></code>

Methods:

- <code title="put /v1/operations/production-schedule-settings/resources">client.operations.productionScheduleSettings.resources.<a href="./src/resources/operations/production-schedule-settings/resources.ts">update</a>({ ...params }) -> ProductionScheduleResourceSetting</code>
- <code title="get /v1/operations/production-schedule-settings/resources">client.operations.productionScheduleSettings.resources.<a href="./src/resources/operations/production-schedule-settings/resources.ts">list</a>() -> ListProductionScheduleResourceSetting</code>
- <code title="delete /v1/operations/production-schedule-settings/resources/{id}">client.operations.productionScheduleSettings.resources.<a href="./src/resources/operations/production-schedule-settings/resources.ts">delete</a>(id) -> ResourceDeleteResponse</code>

### Items

Types:

- <code><a href="./src/resources/operations/production-schedule-settings/items.ts">ListProductionScheduleItemSetting</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/items.ts">ProductionScheduleItemSetting</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/items.ts">UpsertItemSettingRequest</a></code>
- <code><a href="./src/resources/operations/production-schedule-settings/items.ts">ItemDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/production-schedule-settings/items/{item_id}">client.operations.productionScheduleSettings.items.<a href="./src/resources/operations/production-schedule-settings/items.ts">retrieve</a>(itemID) -> ProductionScheduleItemSetting</code>
- <code title="put /v1/operations/production-schedule-settings/items/{item_id}">client.operations.productionScheduleSettings.items.<a href="./src/resources/operations/production-schedule-settings/items.ts">update</a>(itemID, { ...params }) -> ProductionScheduleItemSetting</code>
- <code title="get /v1/operations/production-schedule-settings/items">client.operations.productionScheduleSettings.items.<a href="./src/resources/operations/production-schedule-settings/items.ts">list</a>() -> ListProductionScheduleItemSetting</code>
- <code title="delete /v1/operations/production-schedule-settings/items/{item_id}">client.operations.productionScheduleSettings.items.<a href="./src/resources/operations/production-schedule-settings/items.ts">delete</a>(itemID) -> ItemDeleteResponse</code>

## FulfillmentRecommendations

Types:

- <code><a href="./src/resources/operations/fulfillment-recommendations/fulfillment-recommendations.ts">FulfillmentRecommendation</a></code>
- <code><a href="./src/resources/operations/fulfillment-recommendations/fulfillment-recommendations.ts">ListFulfillmentRecommendation</a></code>

Methods:

- <code title="get /v1/operations/fulfillment-recommendations">client.operations.fulfillmentRecommendations.<a href="./src/resources/operations/fulfillment-recommendations/fulfillment-recommendations.ts">list</a>() -> ListFulfillmentRecommendation</code>

### Actions

Types:

- <code><a href="./src/resources/operations/fulfillment-recommendations/actions.ts">ApplyFulfillmentRecommendationsRequest</a></code>

Methods:

- <code title="post /v1/operations/fulfillment-recommendations/actions/apply">client.operations.fulfillmentRecommendations.actions.<a href="./src/resources/operations/fulfillment-recommendations/actions.ts">apply</a>({ ...params }) -> ListFulfillmentRecommendation</code>

## OperatingCalendars

Types:

- <code><a href="./src/resources/operations/operating-calendars/operating-calendars.ts">CreateOperatingCalendarRequest</a></code>
- <code><a href="./src/resources/operations/operating-calendars/operating-calendars.ts">ListOperatingCalendar</a></code>
- <code><a href="./src/resources/operations/operating-calendars/operating-calendars.ts">OperatingCalendar</a></code>
- <code><a href="./src/resources/operations/operating-calendars/operating-calendars.ts">UpdateOperatingCalendarRequest</a></code>
- <code><a href="./src/resources/operations/operating-calendars/operating-calendars.ts">OperatingCalendarDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/operating-calendars">client.operations.operatingCalendars.<a href="./src/resources/operations/operating-calendars/operating-calendars.ts">create</a>({ ...params }) -> OperatingCalendar</code>
- <code title="get /v1/operations/operating-calendars/{id}">client.operations.operatingCalendars.<a href="./src/resources/operations/operating-calendars/operating-calendars.ts">retrieve</a>(id) -> OperatingCalendar</code>
- <code title="patch /v1/operations/operating-calendars/{id}">client.operations.operatingCalendars.<a href="./src/resources/operations/operating-calendars/operating-calendars.ts">update</a>(id, { ...params }) -> OperatingCalendar</code>
- <code title="get /v1/operations/operating-calendars">client.operations.operatingCalendars.<a href="./src/resources/operations/operating-calendars/operating-calendars.ts">list</a>({ ...params }) -> ListOperatingCalendar</code>
- <code title="delete /v1/operations/operating-calendars/{id}">client.operations.operatingCalendars.<a href="./src/resources/operations/operating-calendars/operating-calendars.ts">delete</a>(id) -> OperatingCalendarDeleteResponse</code>

### Closures

Types:

- <code><a href="./src/resources/operations/operating-calendars/closures.ts">CreateOperatingCalendarClosureRequest</a></code>
- <code><a href="./src/resources/operations/operating-calendars/closures.ts">ListOperatingCalendarClosure</a></code>
- <code><a href="./src/resources/operations/operating-calendars/closures.ts">OperatingCalendarClosure</a></code>
- <code><a href="./src/resources/operations/operating-calendars/closures.ts">ClosureDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/operating-calendars/{id}/closures">client.operations.operatingCalendars.closures.<a href="./src/resources/operations/operating-calendars/closures.ts">create</a>(id, { ...params }) -> OperatingCalendarClosure</code>
- <code title="get /v1/operations/operating-calendars/{id}/closures">client.operations.operatingCalendars.closures.<a href="./src/resources/operations/operating-calendars/closures.ts">list</a>(id, { ...params }) -> ListOperatingCalendarClosure</code>
- <code title="delete /v1/operations/operating-calendars/{id}/closures/{closure_id}">client.operations.operatingCalendars.closures.<a href="./src/resources/operations/operating-calendars/closures.ts">delete</a>(closureID, { ...params }) -> ClosureDeleteResponse</code>

## PurchaseOrders

Types:

- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CreatePurchaseOrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CreatePurchaseOrderRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListPurchaseOrder</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">UpdatePurchaseOrderRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">create</a>({ ...params }) -> PurchaseOrder</code>
- <code title="get /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieve</a>(id, { ...params }) -> PurchaseOrder</code>
- <code title="patch /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">update</a>(id, { ...params }) -> PurchaseOrder</code>
- <code title="get /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">list</a>({ ...params }) -> ListPurchaseOrder</code>
- <code title="delete /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">delete</a>(id) -> PurchaseOrderDeleteResponse</code>
- <code title="get /v1/operations/purchase-orders/statuses">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>

### Actions

Types:

- <code><a href="./src/resources/operations/purchase-orders/actions.ts">BulkDeletePurchaseOrdersRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ChangePurchaseOrderStatusRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/actions/bulk-delete">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/operations/purchase-orders/{id}/actions/change-status">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">changeStatus</a>(id, { ...params }) -> PurchaseOrder</code>

### Lines

Types:

- <code><a href="./src/resources/operations/purchase-orders/lines.ts">CreatePurchaseOrderLineRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">UpdatePurchaseOrderLineRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/{id}/lines">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">create</a>(id, { ...params }) -> PurchaseOrderLine</code>
- <code title="patch /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">update</a>(lineID, { ...params }) -> PurchaseOrderLine</code>
- <code title="delete /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

## Picks

Types:

- <code><a href="./src/resources/operations/picks/picks.ts">ListPick</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListPickLine</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Pick</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickLine</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickRelated</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickShipmentsResponse</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickStageTotal</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickTotals</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">UpdatePickRequest</a></code>

Methods:

- <code title="get /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieve</a>(id, { ...params }) -> Pick</code>
- <code title="patch /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">update</a>(id, { ...params }) -> Pick</code>
- <code title="get /v1/operations/picks">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">list</a>({ ...params }) -> ListPick</code>
- <code title="get /v1/operations/picks/{id}/shipments">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieveShipments</a>(id, { ...params }) -> PickShipmentsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/picks/actions.ts">PackPickRequest</a></code>

Methods:

- <code title="post /v1/operations/picks/{id}/actions/pack">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">pack</a>(id, { ...params }) -> Job</code>
- <code title="put /v1/operations/picks/{id}/actions/pick">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">pick</a>(id) -> Pick</code>
- <code title="put /v1/operations/picks/{id}/actions/void">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">void</a>(id) -> Pick</code>

### Lines

Types:

- <code><a href="./src/resources/operations/picks/lines/lines.ts">UpdatePickLineRequest</a></code>

Methods:

- <code title="patch /v1/operations/picks/{pick_id}/lines/{id}">client.operations.picks.lines.<a href="./src/resources/operations/picks/lines/lines.ts">update</a>(id, { ...params }) -> PickLine</code>

#### Actions

Methods:

- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/pick">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">pick</a>(id, { ...params }) -> PickLine</code>
- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/void">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">void</a>(id, { ...params }) -> PickLine</code>

## Locations

Types:

- <code><a href="./src/resources/operations/locations/locations.ts">CreateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations/locations.ts">UpdateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="get /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations/locations.ts">retrieve</a>(id, { ...params }) -> Location</code>
- <code title="patch /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations/locations.ts">update</a>(id, { ...params }) -> Location</code>
- <code title="get /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations/locations.ts">list</a>({ ...params }) -> ListLocation</code>
- <code title="delete /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations/locations.ts">delete</a>(id) -> LocationDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/locations/actions.ts">BulkUpsertLocationsRequest</a></code>
- <code><a href="./src/resources/operations/locations/actions.ts">ExportLocationsRequest</a></code>
- <code><a href="./src/resources/operations/locations/actions.ts">UpsertLocationInput</a></code>

Methods:

- <code title="post /v1/operations/locations/actions/bulk-upsert">client.operations.locations.actions.<a href="./src/resources/operations/locations/actions.ts">bulkUpsert</a>({ ...params }) -> Job</code>
- <code title="post /v1/operations/locations/actions/export">client.operations.locations.actions.<a href="./src/resources/operations/locations/actions.ts">export</a>({ ...params }) -> Job</code>

## LocationTypes

Types:

- <code><a href="./src/resources/operations/location-types.ts">ListLocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">LocationType</a></code>

Methods:

- <code title="get /v1/operations/location-types/{id}">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieve</a>(id) -> LocationType</code>
- <code title="get /v1/operations/location-types">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">list</a>({ ...params }) -> ListLocationType</code>

## ShippingCases

Types:

- <code><a href="./src/resources/operations/shipping-cases/shipping-cases.ts">ShippingCase</a></code>
- <code><a href="./src/resources/operations/shipping-cases/shipping-cases.ts">ShippingCaseLabelURL</a></code>
- <code><a href="./src/resources/operations/shipping-cases/shipping-cases.ts">UpdateShippingCaseRequest</a></code>
- <code><a href="./src/resources/operations/shipping-cases/shipping-cases.ts">ShippingCaseDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases/shipping-cases.ts">retrieve</a>(id, { ...params }) -> ShippingCase</code>
- <code title="patch /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases/shipping-cases.ts">update</a>(id, { ...params }) -> ShippingCase</code>
- <code title="delete /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases/shipping-cases.ts">delete</a>(id) -> ShippingCaseDeleteResponse</code>
- <code title="get /v1/operations/shipping-cases/{id}/label">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases/shipping-cases.ts">retrieveLabel</a>(id) -> ShippingCaseLabelURL</code>

### Actions

Types:

- <code><a href="./src/resources/operations/shipping-cases/actions.ts">AdminUpdateShippingCaseTrackingRequest</a></code>

Methods:

- <code title="post /v1/operations/shipping-cases/{id}/actions/admin-update-tracking">client.operations.shippingCases.actions.<a href="./src/resources/operations/shipping-cases/actions.ts">adminUpdateTracking</a>(id, { ...params }) -> ShippingCase</code>

## Shipments

Types:

- <code><a href="./src/resources/operations/shipments/shipments.ts">ListShipment</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">UpdateShipmentRequest</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">retrieve</a>(id, { ...params }) -> Shipment</code>
- <code title="patch /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">update</a>(id, { ...params }) -> Shipment</code>
- <code title="get /v1/operations/shipments">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">list</a>({ ...params }) -> ListShipment</code>
- <code title="delete /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">delete</a>(id) -> ShipmentDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/shipments/actions.ts">AdminUpdateShipmentTrackingRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">EstimateRateRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">EstimateRateResult</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListRateShopOption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ParcelInput</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopOption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopResult</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipShipmentRequest</a></code>

Methods:

- <code title="post /v1/operations/shipments/{id}/actions/admin-update-tracking">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">adminUpdateTracking</a>(id, { ...params }) -> Shipment</code>
- <code title="post /v1/operations/shipments/actions/estimate-rate">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">estimateRate</a>({ ...params }) -> EstimateRateResult</code>
- <code title="post /v1/operations/shipments/actions/rate-shop">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">rateShop</a>({ ...params }) -> RateShopResult</code>
- <code title="post /v1/operations/shipments/{id}/actions/ship">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">ship</a>(id, { ...params }) -> Shipment</code>
- <code title="post /v1/operations/shipments/{id}/actions/void">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">void</a>(id) -> Shipment</code>

### Lines

Types:

- <code><a href="./src/resources/operations/shipments/lines.ts">CreateShipmentLineRequest</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">UpdateShipmentLineRequest</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/shipments/{shipment_id}/lines">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">create</a>(shipmentID, { ...params }) -> ShipmentLine</code>
- <code title="get /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">retrieve</a>(id, { ...params }) -> ShipmentLine</code>
- <code title="patch /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">update</a>(id, { ...params }) -> ShipmentLine</code>
- <code title="get /v1/operations/shipments/{shipment_id}/lines">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">list</a>(shipmentID, { ...params }) -> ListShipmentLine</code>
- <code title="delete /v1/operations/shipments/{shipment_id}/lines/{id}">client.operations.shipments.lines.<a href="./src/resources/operations/shipments/lines.ts">delete</a>(id, { ...params }) -> LineDeleteResponse</code>

## Edi

### Actions

Types:

- <code><a href="./src/resources/operations/edi/actions.ts">ResubmitEdiInvoiceRequest</a></code>

Methods:

- <code title="put /v1/operations/edi/actions/pull-orders">client.operations.edi.actions.<a href="./src/resources/operations/edi/actions.ts">pullOrders</a>() -> MessageResource</code>
- <code title="post /v1/operations/edi/actions/resubmit-invoice">client.operations.edi.actions.<a href="./src/resources/operations/edi/actions.ts">resubmitInvoice</a>({ ...params }) -> MessageResource</code>

## DcLocations

Types:

- <code><a href="./src/resources/operations/dc-locations.ts">CreateDcLocationRequest</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">DcLocation</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">DcLocationCustomer</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">ListDcLocation</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">UpdateDcLocationRequest</a></code>
- <code><a href="./src/resources/operations/dc-locations.ts">DcLocationDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/dc-locations">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">create</a>({ ...params }) -> DcLocation</code>
- <code title="get /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">retrieve</a>(id) -> DcLocation</code>
- <code title="patch /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">update</a>(id, { ...params }) -> DcLocation</code>
- <code title="get /v1/operations/dc-locations">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">list</a>({ ...params }) -> ListDcLocation</code>
- <code title="delete /v1/operations/dc-locations/{id}">client.operations.dcLocations.<a href="./src/resources/operations/dc-locations.ts">delete</a>(id) -> DcLocationDeleteResponse</code>

## EdiRuns

Types:

- <code><a href="./src/resources/operations/edi-runs.ts">EdiRun</a></code>
- <code><a href="./src/resources/operations/edi-runs.ts">ListEdiRun</a></code>

Methods:

- <code title="get /v1/operations/edi-runs/{id}">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">retrieve</a>(id) -> EdiRun</code>
- <code title="get /v1/operations/edi-runs">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">list</a>({ ...params }) -> ListEdiRun</code>
