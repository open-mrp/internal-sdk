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
- <code><a href="./src/resources/auth/actions.ts">User</a></code>

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

- <code><a href="./src/resources/auth/api-keys/actions.ts">Account</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">Address</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">Owner</a></code>
- <code><a href="./src/resources/auth/api-keys/actions.ts">Role</a></code>
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
- <code><a href="./src/resources/auth/registration-sessions/registration-sessions.ts">PageInfo</a></code>
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
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">RegistrationSession</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">RegistrationSessionAccount</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">RegistrationSessionAddress</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">RegistrationSessionUser</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">SetupBillingResponse</a></code>
- <code><a href="./src/resources/auth/registration-sessions/actions.ts">ActionResendVerificationEmailResponse</a></code>

Methods:

- <code title="post /v1/auth/registration-sessions/{session_id}/actions/confirm-payment">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">confirmPayment</a>(sessionID, { ...params }) -> ConfirmPaymentResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/resend-verification-email">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">resendVerificationEmail</a>(sessionID) -> ActionResendVerificationEmailResponse</code>
- <code title="post /v1/auth/registration-sessions/{session_id}/actions/setup-billing">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">setupBilling</a>(sessionID) -> SetupBillingResponse</code>
- <code title="put /v1/auth/registration-sessions/{token}/actions/verify-token">client.auth.registrationSessions.actions.<a href="./src/resources/auth/registration-sessions/actions.ts">verifyToken</a>(token) -> RegistrationSession</code>

# Identity

Types:

- <code><a href="./src/resources/identity/identity.ts">Account</a></code>
- <code><a href="./src/resources/identity/identity.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/identity.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/identity.ts">Address</a></code>
- <code><a href="./src/resources/identity/identity.ts">Geolocation</a></code>
- <code><a href="./src/resources/identity/identity.ts">ListPermission</a></code>
- <code><a href="./src/resources/identity/identity.ts">ListPermissionGroup</a></code>
- <code><a href="./src/resources/identity/identity.ts">Owner</a></code>
- <code><a href="./src/resources/identity/identity.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/identity.ts">Permission</a></code>
- <code><a href="./src/resources/identity/identity.ts">PermissionGroup</a></code>
- <code><a href="./src/resources/identity/identity.ts">PublicAccount</a></code>

Methods:

- <code title="get /v1/identity/permission-groups">client.identity.<a href="./src/resources/identity/identity.ts">retrievePermissionGroups</a>({ ...params }) -> ListPermissionGroup</code>
- <code title="get /v1/identity/portal-branding/{slug}">client.identity.<a href="./src/resources/identity/identity.ts">retrievePortalBranding</a>(slug) -> PublicAccount</code>

## Me

Types:

- <code><a href="./src/resources/identity/me/me.ts">User</a></code>

Methods:

- <code title="get /v1/identity/me">client.identity.me.<a href="./src/resources/identity/me/me.ts">list</a>() -> User</code>

### Tenancy

Types:

- <code><a href="./src/resources/identity/me/tenancy.ts">Account</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">Address</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">CustomerAccountSummary</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">Geolocation</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListCustomerAccountSummary</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListTenancyOtherAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">ListTenancySandboxAccount</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">Owner</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/me/tenancy.ts">Role</a></code>
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

- <code><a href="./src/resources/identity/account-users/account-users.ts">Account</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Address</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Attribute</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Consumption</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">CreateAccountUserRequest</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Department</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Geolocation</a></code>
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
- <code><a href="./src/resources/identity/account-users/account-users.ts">Machine</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">NotificationPreferenceItem</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Owner</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ProductionStep</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Property</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Quantity</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Rate</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">Role</a></code>
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
- <code><a href="./src/resources/identity/users/users.ts">User</a></code>

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

- <code><a href="./src/resources/identity/accounts.ts">Account</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountLogoURL</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountPhotoUploadResult</a></code>
- <code><a href="./src/resources/identity/accounts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/accounts.ts">Address</a></code>
- <code><a href="./src/resources/identity/accounts.ts">Geolocation</a></code>
- <code><a href="./src/resources/identity/accounts.ts">UpdateAccountRequest</a></code>

Methods:

- <code title="get /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="patch /v1/identity/accounts/{id}">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /v1/identity/accounts/{id}/logo">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">retrieveLogo</a>(id) -> AccountLogoURL</code>
- <code title="put /v1/identity/accounts/{id}/photo">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">updatePhoto</a>(id) -> AccountPhotoUploadResult</code>

## Integrations

Types:

- <code><a href="./src/resources/identity/integrations/integrations.ts">AccountIntegration</a></code>
- <code><a href="./src/resources/identity/integrations/integrations.ts">CreateAccountIntegrationRequest</a></code>
- <code><a href="./src/resources/identity/integrations/integrations.ts">ListAccountIntegration</a></code>
- <code><a href="./src/resources/identity/integrations/integrations.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/integrations/integrations.ts">UpdateAccountIntegrationRequest</a></code>

Methods:

- <code title="post /v1/identity/integrations">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">create</a>({ ...params }) -> AccountIntegration</code>
- <code title="put /v1/identity/integrations/{id}">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">update</a>(id, { ...params }) -> AccountIntegration</code>
- <code title="get /v1/identity/integrations">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">list</a>({ ...params }) -> ListAccountIntegration</code>
- <code title="delete /v1/identity/integrations/{id}">client.identity.integrations.<a href="./src/resources/identity/integrations/integrations.ts">delete</a>(id) -> AccountIntegration</code>

### Stripe

Types:

- <code><a href="./src/resources/identity/integrations/stripe.ts">StripePublishableKey</a></code>
- <code><a href="./src/resources/identity/integrations/stripe.ts">StripeStatus</a></code>

Methods:

- <code title="get /v1/identity/integrations/stripe/publishable-key">client.identity.integrations.stripe.<a href="./src/resources/identity/integrations/stripe.ts">retrievePublishableKey</a>() -> StripePublishableKey</code>
- <code title="get /v1/identity/integrations/stripe/status">client.identity.integrations.stripe.<a href="./src/resources/identity/integrations/stripe.ts">retrieveStatus</a>() -> StripeStatus</code>

## ChildAccounts

Types:

- <code><a href="./src/resources/identity/child-accounts.ts">Account</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">Address</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccount</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">Geolocation</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ListChildAccount</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/child-accounts.ts">ChildAccountDeleteResponse</a></code>

Methods:

- <code title="put /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">update</a>(childAccountID) -> ChildAccount</code>
- <code title="get /v1/identity/child-accounts">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">list</a>({ ...params }) -> ListChildAccount</code>
- <code title="delete /v1/identity/child-accounts/{child_account_id}">client.identity.childAccounts.<a href="./src/resources/identity/child-accounts.ts">delete</a>(childAccountID) -> ChildAccountDeleteResponse</code>

## Roles

Types:

- <code><a href="./src/resources/identity/roles.ts">Account</a></code>
- <code><a href="./src/resources/identity/roles.ts">AccountBranding</a></code>
- <code><a href="./src/resources/identity/roles.ts">AccountPortal</a></code>
- <code><a href="./src/resources/identity/roles.ts">Address</a></code>
- <code><a href="./src/resources/identity/roles.ts">CreateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">Geolocation</a></code>
- <code><a href="./src/resources/identity/roles.ts">ListRole</a></code>
- <code><a href="./src/resources/identity/roles.ts">Owner</a></code>
- <code><a href="./src/resources/identity/roles.ts">PageInfo</a></code>
- <code><a href="./src/resources/identity/roles.ts">Role</a></code>
- <code><a href="./src/resources/identity/roles.ts">UpdateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="post /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">retrieve</a>(id, { ...params }) -> Role</code>
- <code title="patch /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">update</a>(id, { ...params }) -> Role</code>
- <code title="get /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">list</a>({ ...params }) -> ListRole</code>
- <code title="delete /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">delete</a>(id) -> RoleDeleteResponse</code>

# Core

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">Account</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">AccountBranding</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">AccountPortal</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">Address</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">CreateSandboxRequest</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">Geolocation</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">ListSandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> ListSandbox</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">Account</a></code>
- <code><a href="./src/resources/core/request-logs.ts">AccountBranding</a></code>
- <code><a href="./src/resources/core/request-logs.ts">AccountPortal</a></code>
- <code><a href="./src/resources/core/request-logs.ts">Actor</a></code>
- <code><a href="./src/resources/core/request-logs.ts">Address</a></code>
- <code><a href="./src/resources/core/request-logs.ts">Geolocation</a></code>
- <code><a href="./src/resources/core/request-logs.ts">ListRequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">Owner</a></code>
- <code><a href="./src/resources/core/request-logs.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">Role</a></code>

Methods:

- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLog</code>
- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">list</a>({ ...params }) -> ListRequestLog</code>

## AuditEvents

Types:

- <code><a href="./src/resources/core/audit-events.ts">Account</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AccountBranding</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AccountPortal</a></code>
- <code><a href="./src/resources/core/audit-events.ts">Actor</a></code>
- <code><a href="./src/resources/core/audit-events.ts">Address</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">Geolocation</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListObjectType</a></code>
- <code><a href="./src/resources/core/audit-events.ts">Owner</a></code>
- <code><a href="./src/resources/core/audit-events.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/audit-events.ts">RequestLog</a></code>
- <code><a href="./src/resources/core/audit-events.ts">Role</a></code>

Methods:

- <code title="get /v1/core/audit-events/{id}">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieve</a>(id, { ...params }) -> AuditEvent</code>
- <code title="get /v1/core/audit-events">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">list</a>({ ...params }) -> ListAuditEvent</code>
- <code title="get /v1/core/audit-events/resource-types">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveResourceTypes</a>() -> ListObjectType</code>

## SysProperties

Types:

- <code><a href="./src/resources/core/sys-properties.ts">ListSysProperty</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">SysProperty</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">SysPropertyType</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">SysPropertyValue</a></code>
- <code><a href="./src/resources/core/sys-properties.ts">UpdateSysPropertyRequest</a></code>

Methods:

- <code title="get /v1/core/sys-properties/{id}">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">retrieve</a>(id) -> SysProperty</code>
- <code title="patch /v1/core/sys-properties/{id}">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">update</a>(id, { ...params }) -> SysProperty</code>
- <code title="get /v1/core/sys-properties">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">list</a>({ ...params }) -> ListSysProperty</code>
- <code title="get /v1/core/sys-properties/{type_code}/latest-value">client.core.sysProperties.<a href="./src/resources/core/sys-properties.ts">retrieveLatestValue</a>(typeCode) -> SysPropertyValue</code>

## Addresses

Types:

- <code><a href="./src/resources/core/addresses/addresses.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">AddressDetailsResult</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">AddressSuggestion</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">ListAddressSuggestion</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">PageInfo</a></code>

Methods:

- <code title="get /v1/core/addresses/details/{id}">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveDetails</a>(id, { ...params }) -> AddressDetailsResult</code>
- <code title="get /v1/core/addresses/suggestions">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveSuggestions</a>({ ...params }) -> ListAddressSuggestion</code>

### Actions

Types:

- <code><a href="./src/resources/core/addresses/actions.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ValidateAddressRequest</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ValidatedAddress</a></code>

Methods:

- <code title="put /v1/core/addresses/actions/validate">client.core.addresses.actions.<a href="./src/resources/core/addresses/actions.ts">validate</a>({ ...params }) -> ValidatedAddress</code>

## EmailLogs

Types:

- <code><a href="./src/resources/core/email-logs.ts">Account</a></code>
- <code><a href="./src/resources/core/email-logs.ts">AccountBranding</a></code>
- <code><a href="./src/resources/core/email-logs.ts">AccountPortal</a></code>
- <code><a href="./src/resources/core/email-logs.ts">Actor</a></code>
- <code><a href="./src/resources/core/email-logs.ts">Address</a></code>
- <code><a href="./src/resources/core/email-logs.ts">EmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">Geolocation</a></code>
- <code><a href="./src/resources/core/email-logs.ts">ListEmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">Owner</a></code>
- <code><a href="./src/resources/core/email-logs.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/email-logs.ts">Role</a></code>

Methods:

- <code title="get /v1/core/email-logs/{id}">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieve</a>(id, { ...params }) -> EmailLog</code>
- <code title="get /v1/core/email-logs">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">list</a>({ ...params }) -> ListEmailLog</code>

## Analytics

Types:

- <code><a href="./src/resources/core/analytics.ts">Account</a></code>
- <code><a href="./src/resources/core/analytics.ts">AccountBranding</a></code>
- <code><a href="./src/resources/core/analytics.ts">AccountPortal</a></code>
- <code><a href="./src/resources/core/analytics.ts">Address</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsItem</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsLot</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsRate</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUnitGroup</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyticsUnitGroupUnit</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveriesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeDeliveriesResponse</a></code>
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
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOpenBatchesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOpenBatchesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOrdersRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeProductionCostsRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeProductionCostsResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeQuarterlyOrdersRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeQuarterlyOrdersResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeSalesRequest</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeSalesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">AnalyzeWeeksOfSalesResponse</a></code>
- <code><a href="./src/resources/core/analytics.ts">Attribute</a></code>
- <code><a href="./src/resources/core/analytics.ts">ChartData</a></code>
- <code><a href="./src/resources/core/analytics.ts">Consumption</a></code>
- <code><a href="./src/resources/core/analytics.ts">Coordinate</a></code>
- <code><a href="./src/resources/core/analytics.ts">CostBreakdown</a></code>
- <code><a href="./src/resources/core/analytics.ts">DateTimeCoordinate</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryChartData</a></code>
- <code><a href="./src/resources/core/analytics.ts">DeliveryStatistics</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">DemandForecastRow</a></code>
- <code><a href="./src/resources/core/analytics.ts">Department</a></code>
- <code><a href="./src/resources/core/analytics.ts">Entity</a></code>
- <code><a href="./src/resources/core/analytics.ts">Geolocation</a></code>
- <code><a href="./src/resources/core/analytics.ts">InventoryReceiptSummaryEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">Item</a></code>
- <code><a href="./src/resources/core/analytics.ts">ItemCategory</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListAttribute</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListConsumption</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListLocation</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListMachine</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListProperty</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/core/analytics.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/core/analytics.ts">Location</a></code>
- <code><a href="./src/resources/core/analytics.ts">Machine</a></code>
- <code><a href="./src/resources/core/analytics.ts">ManufacturingMetrics</a></code>
- <code><a href="./src/resources/core/analytics.ts">MaterialAnalyticsEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">NewCustomersData</a></code>
- <code><a href="./src/resources/core/analytics.ts">OeeDepartment</a></code>
- <code><a href="./src/resources/core/analytics.ts">OpenBatchSummary</a></code>
- <code><a href="./src/resources/core/analytics.ts">OrderEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">Owner</a></code>
- <code><a href="./src/resources/core/analytics.ts">PageInfo</a></code>
- <code><a href="./src/resources/core/analytics.ts">ProductionCostItem</a></code>
- <code><a href="./src/resources/core/analytics.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/core/analytics.ts">ProductionStep</a></code>
- <code><a href="./src/resources/core/analytics.ts">Property</a></code>
- <code><a href="./src/resources/core/analytics.ts">Quantity</a></code>
- <code><a href="./src/resources/core/analytics.ts">Rate</a></code>
- <code><a href="./src/resources/core/analytics.ts">RevenueForecastPoint</a></code>
- <code><a href="./src/resources/core/analytics.ts">SalesEntry</a></code>
- <code><a href="./src/resources/core/analytics.ts">ScanningStation</a></code>
- <code><a href="./src/resources/core/analytics.ts">Unit</a></code>
- <code><a href="./src/resources/core/analytics.ts">UnitGroup</a></code>
- <code><a href="./src/resources/core/analytics.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/core/analytics.ts">WeeksOfSalesItem</a></code>

Methods:

- <code title="get /v1/core/analytics/weeks-of-sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">retrieveWeeksOfSales</a>({ ...params }) -> AnalyzeWeeksOfSalesResponse</code>
- <code title="put /v1/core/analytics/deliveries">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDeliveries</a>({ ...params }) -> AnalyzeDeliveriesResponse</code>
- <code title="put /v1/core/analytics/demand-forecast">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateDemandForecast</a>({ ...params }) -> AnalyzeDemandForecastResponse</code>
- <code title="put /v1/core/analytics/inventory-receipts">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateInventoryReceipts</a>({ ...params }) -> AnalyzeInventoryReceiptsResponse</code>
- <code title="put /v1/core/analytics/manufacturing">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturing</a>({ ...params }) -> AnalyzeManufacturingResponse</code>
- <code title="put /v1/core/analytics/manufacturing-batch">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateManufacturingBatch</a>({ ...params }) -> AnalyzeManufacturingBatchResponse</code>
- <code title="put /v1/core/analytics/materials">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateMaterials</a>({ ...params }) -> AnalyzeMaterialsResponse</code>
- <code title="put /v1/core/analytics/new-customers">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateNewCustomers</a>({ ...params }) -> AnalyzeNewCustomersResponse</code>
- <code title="put /v1/core/analytics/oee">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOee</a>({ ...params }) -> AnalyzeOeeResponse</code>
- <code title="put /v1/core/analytics/open-batches">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOpenBatches</a>({ ...params }) -> AnalyzeOpenBatchesResponse</code>
- <code title="put /v1/core/analytics/orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateOrders</a>({ ...params }) -> AnalyzeOrdersResponse</code>
- <code title="put /v1/core/analytics/production-costs">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateProductionCosts</a>({ ...params }) -> AnalyzeProductionCostsResponse</code>
- <code title="put /v1/core/analytics/quarterly-orders">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateQuarterlyOrders</a>({ ...params }) -> AnalyzeQuarterlyOrdersResponse</code>
- <code title="put /v1/core/analytics/sales">client.core.analytics.<a href="./src/resources/core/analytics.ts">updateSales</a>({ ...params }) -> AnalyzeSalesResponse</code>

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
- <code><a href="./src/resources/billing/plans.ts">PageInfo</a></code>
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
- <code><a href="./src/resources/billing/accounts.ts">AgentTokenDetail</a></code>
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
- <code><a href="./src/resources/sales/registration-flows.ts">PageInfo</a></code>
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

- <code><a href="./src/resources/sales/customers/customers.ts">Account</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Address</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CreateCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Department</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">FrequentlyOrderedProduct</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Item</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListFrequentlyOrderedProduct</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Location</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Machine</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Owner</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Priority</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Property</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">QuantityInput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Rate</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">RegisterCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Role</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Unit</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">UnitGroupUnit</a></code>
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

### Actions

Types:

- <code><a href="./src/resources/sales/customers/actions.ts">Account</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Address</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">BulkDeleteCustomersRequest</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Customer</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Department</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Item</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Location</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Machine</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">MergeCustomersRequest</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Owner</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Priority</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Property</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Rate</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Role</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">Unit</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/customers/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/customers/actions/bulk-delete">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="post /v1/sales/customers/{id}/actions/merge">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">merge</a>(id, { ...params }) -> Customer</code>

## AccountGroups

Types:

- <code><a href="./src/resources/sales/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">CreateAccountGroupRequest</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">PageInfo</a></code>
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

- <code><a href="./src/resources/sales/account-prices.ts">Account</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountPrice</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Address</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">CreateAccountPriceRequest</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Customer</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Department</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Item</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListAccountPrice</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Location</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Machine</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Owner</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Priority</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ProductLine</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Property</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Rate</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Role</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">Unit</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">UpdateAccountPriceRequest</a></code>
- <code><a href="./src/resources/sales/account-prices.ts">AccountPriceDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">create</a>({ ...params }) -> AccountPrice</code>
- <code title="get /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">retrieve</a>(id, { ...params }) -> AccountPrice</code>
- <code title="patch /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">update</a>(id, { ...params }) -> AccountPrice</code>
- <code title="get /v1/sales/account-prices">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">list</a>({ ...params }) -> ListAccountPrice</code>
- <code title="delete /v1/sales/account-prices/{id}">client.sales.accountPrices.<a href="./src/resources/sales/account-prices.ts">delete</a>(id) -> AccountPriceDeleteResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/sales/addresses.ts">Address</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/addresses.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/addresses.ts">ListAddress</a></code>
- <code><a href="./src/resources/sales/addresses.ts">PageInfo</a></code>
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

- <code><a href="./src/resources/sales/account-statuses.ts">Account</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">Address</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">ListAccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">Owner</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">PageInfo</a></code>

Methods:

- <code title="get /v1/sales/account-statuses/{id}">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieve</a>(id, { ...params }) -> AccountStatus</code>
- <code title="get /v1/sales/account-statuses">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">list</a>({ ...params }) -> ListAccountStatus</code>

## ProductLineAccess

### AccountGroups

Types:

- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">Account</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountGroupProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">Address</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">CreateAccountGroupProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ListAccountGroupProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ListProductLine</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">Owner</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">ProductLine</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">Unit</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/product-line-access/account-groups.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/sales/product-line-access/customers.ts">Account</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Address</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CreateCustomerProductLineAccessRequest</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Customer</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">CustomerProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Department</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Item</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListCustomerProductLineAccess</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListProductLine</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Location</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Machine</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Owner</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Priority</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ProductLine</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Property</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Rate</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Role</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">Unit</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/product-line-access/customers.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Account</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Address</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">CreateSalesTargetRequest</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">ListSalesTarget</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Owner</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">SalesTarget</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">Unit</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">UpsertSalesTargetRequest</a></code>
- <code><a href="./src/resources/sales/account-users/sales-targets.ts">User</a></code>

Methods:

- <code title="post /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">create</a>(id, { ...params }) -> SalesTarget</code>
- <code title="put /v1/sales/account-users/{id}/sales-targets/{target_id}">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">update</a>(targetID, { ...params }) -> SalesTarget</code>
- <code title="get /v1/sales/account-users/{id}/sales-targets">client.sales.accountUsers.salesTargets.<a href="./src/resources/sales/account-users/sales-targets.ts">list</a>(id, { ...params }) -> ListSalesTarget</code>

## Priorities

Types:

- <code><a href="./src/resources/sales/priorities.ts">Account</a></code>
- <code><a href="./src/resources/sales/priorities.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/priorities.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/priorities.ts">Address</a></code>
- <code><a href="./src/resources/sales/priorities.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/priorities.ts">ListPriority</a></code>
- <code><a href="./src/resources/sales/priorities.ts">Owner</a></code>
- <code><a href="./src/resources/sales/priorities.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/priorities.ts">Priority</a></code>

Methods:

- <code title="get /v1/sales/priorities/{id}">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">retrieve</a>(id, { ...params }) -> Priority</code>
- <code title="get /v1/sales/priorities">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">list</a>({ ...params }) -> ListPriority</code>

## OrderDiscounts

Types:

- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">CreateOrderDiscountRequest</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">ListOrderDiscount</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/order-discounts/order-discounts.ts">PageInfo</a></code>
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
- <code><a href="./src/resources/sales/order-discounts/actions.ts">OrderDiscount</a></code>

Methods:

- <code title="post /v1/sales/order-discounts/actions/find-by-code">client.sales.orderDiscounts.actions.<a href="./src/resources/sales/order-discounts/actions.ts">findByCode</a>({ ...params }) -> OrderDiscount</code>

## SalesOrders

Types:

- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Account</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Actor</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Address</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Customer</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Department</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Item</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Location</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Machine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Owner</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Pick</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Priority</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ProductionRun</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Property</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Rate</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Role</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderEmailContactInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Unit</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">UpdateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">create</a>({ ...params }) -> SalesOrderDetail</code>
- <code title="get /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieve</a>(id, { ...params }) -> SalesOrderDetail</code>
- <code title="patch /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">update</a>(id, { ...params }) -> SalesOrderDetail</code>
- <code title="get /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">list</a>({ ...params }) -> ListSalesOrderDetail</code>
- <code title="delete /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">delete</a>(id) -> SalesOrderDeleteResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/checkout">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">checkout</a>(id, { ...params }) -> CheckoutSalesOrderResponse</code>
- <code title="get /v1/sales/sales-orders/statuses">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>

### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/actions.ts">Account</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Actor</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Address</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">BulkDeleteSalesOrdersRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ChangeSalesOrderStatusRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CreateProductionRunResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CreateProductionRunResponseRef</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Customer</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Department</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Item</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Location</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Machine</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Owner</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Pick</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Priority</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Property</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Rate</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Role</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">Unit</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/actions/bulk-delete">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/change-status">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">changeStatus</a>(id, { ...params }) -> SalesOrderDetail</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/create-production-run">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">createProductionRun</a>(id) -> CreateProductionRunResponse</code>

### Lines

Types:

- <code><a href="./src/resources/sales/sales-orders/lines.ts">Account</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Address</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">CreateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Item</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Owner</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Property</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Rate</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">Unit</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">UpdateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">create</a>(id, { ...params }) -> SalesOrderLineDetail</code>
- <code title="patch /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">update</a>(lineID, { ...params }) -> SalesOrderLineDetail</code>
- <code title="delete /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

## VolumeDiscounts

Types:

- <code><a href="./src/resources/sales/volume-discounts.ts">Account</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Address</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">CreateVolumeDiscountRequest</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">CreateVolumeDiscountTierInput</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListProductLine</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListUnit</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListVolumeDiscount</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ListVolumeDiscountTier</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Owner</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">ProductLine</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Property</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">Unit</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/volume-discounts.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/sales/accounts/territories.ts">Account</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">AccountBranding</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">AccountPortal</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">AccountUser</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Address</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Attribute</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Consumption</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">CreateTerritoryRequest</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Department</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Geolocation</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Item</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ItemCategory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListAttribute</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListConsumption</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListLocation</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListMachine</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListProperty</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListTerritory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Location</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Machine</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Owner</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">PageInfo</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ProductLine</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ProductionStep</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Property</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Quantity</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Rate</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Role</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">ScanningStation</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Territory</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">Unit</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">UnitGroup</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">UpdateTerritoryRequest</a></code>
- <code><a href="./src/resources/sales/accounts/territories.ts">TerritoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">create</a>(accountID, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">retrieve</a>(id, { ...params }) -> Territory</code>
- <code title="patch /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">update</a>(id, { ...params }) -> Territory</code>
- <code title="get /v1/sales/accounts/{account_id}/territories">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">list</a>(accountID, { ...params }) -> ListTerritory</code>
- <code title="delete /v1/sales/accounts/{account_id}/territories/{id}">client.sales.accounts.territories.<a href="./src/resources/sales/accounts/territories.ts">delete</a>(id, { ...params }) -> TerritoryDeleteResponse</code>

# Catalog

## Units

Types:

- <code><a href="./src/resources/catalog/units/units.ts">Account</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Address</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">CreateUnitRequest</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">ListUnit</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Unit</a></code>
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

- <code><a href="./src/resources/catalog/units/actions.ts">Account</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">Address</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">ValidateUnitsRequest</a></code>
- <code><a href="./src/resources/catalog/units/actions.ts">ValidateUnitsResponse</a></code>

Methods:

- <code title="put /v1/catalog/units/actions/validate">client.catalog.units.actions.<a href="./src/resources/catalog/units/actions.ts">validate</a>({ ...params }) -> ValidateUnitsResponse</code>

## UnitGroups

Types:

- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">Account</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">Address</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupUnitParam</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">ListUnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/catalog/unit-groups/units.ts">Account</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">Address</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">CreateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UpdateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">create</a>(unitGroupID, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">retrieve</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="patch /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">update</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">list</a>(unitGroupID, { ...params }) -> ListUnitGroupUnit</code>
- <code title="delete /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">delete</a>(id, { ...params }) -> UnitDeleteResponse</code>

## Properties

Types:

- <code><a href="./src/resources/catalog/properties/properties.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">CreatePropertyRequest</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">Property</a></code>
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

- <code><a href="./src/resources/catalog/properties/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">CreateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">Property</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">UpdateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="patch /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">list</a>(propertyID, { ...params }) -> ListAttribute</code>
- <code title="delete /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

## Items

Types:

- <code><a href="./src/resources/catalog/items/items.ts">Account</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Address</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Item</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemCosts</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemTrendPoint</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemTrends</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListItem</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListItemTrendPoint</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Property</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">list</a>({ ...params }) -> ListItem</code>
- <code title="put /v1/catalog/items/{id}/category/{category_id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">changeCategory</a>(categoryID, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items/{id}/costs">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveCosts</a>(id) -> ItemCosts</code>
- <code title="get /v1/catalog/items/{id}/trends">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveTrends</a>(id, { ...params }) -> ItemTrends</code>

### Inventory

Types:

- <code><a href="./src/resources/catalog/items/inventory.ts">Account</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">Address</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">ItemInventory</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">Quantity</a></code>
- <code><a href="./src/resources/catalog/items/inventory.ts">Unit</a></code>
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
- <code><a href="./src/resources/catalog/items/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ReconcileErrorResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">ReconciledItemResult</a></code>
- <code><a href="./src/resources/catalog/items/actions.ts">SkippedItemResult</a></code>

Methods:

- <code title="post /v1/catalog/items/actions/bulk-create">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkCreate</a>({ ...params }) -> BulkCreateItemsResponse</code>
- <code title="post /v1/catalog/items/actions/bulk-reconcile">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">bulkReconcile</a>({ ...params }) -> BulkReconcileItemsResponse</code>
- <code title="get /v1/catalog/items/actions/export">client.catalog.items.actions.<a href="./src/resources/catalog/items/actions.ts">export</a>() -> FileDownload</code>

### Attributes

Types:

- <code><a href="./src/resources/catalog/items/attributes.ts">Account</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Address</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Item</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Property</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/items/attributes.ts">UnitGroupUnit</a></code>

Methods:

- <code title="put /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">update</a>(attributeID, { ...params }) -> Item</code>
- <code title="delete /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">delete</a>(attributeID, { ...params }) -> Item</code>

## ItemCategories

Types:

- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Account</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Address</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">CreateItemCategoryRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Property</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">UnitGroupUnit</a></code>
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

## Materials

Types:

- <code><a href="./src/resources/catalog/materials/materials.ts">Account</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Address</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">CreateMaterialRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Item</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ListMaterial</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Material</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Property</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Quantity</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">UpdateMaterialRequest</a></code>

Methods:

- <code title="post /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">create</a>({ ...params }) -> Material</code>
- <code title="get /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">retrieve</a>(id, { ...params }) -> Material</code>
- <code title="patch /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">update</a>(id, { ...params }) -> Material</code>
- <code title="get /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">list</a>({ ...params }) -> ListMaterial</code>
- <code title="delete /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">delete</a>(id) -> Material</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/materials/actions.ts">FileDownload</a></code>

Methods:

- <code title="get /v1/catalog/materials/actions/export">client.catalog.materials.actions.<a href="./src/resources/catalog/materials/actions.ts">export</a>({ ...params }) -> FileDownload</code>

## Parts

Types:

- <code><a href="./src/resources/catalog/parts/parts.ts">Account</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Address</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">CreatePartRequest</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Item</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ListPart</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Part</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Property</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">UpdatePartRequest</a></code>

Methods:

- <code title="post /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">create</a>({ ...params }) -> Part</code>
- <code title="get /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">retrieve</a>(id, { ...params }) -> Part</code>
- <code title="patch /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">update</a>(id, { ...params }) -> Part</code>
- <code title="get /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">list</a>({ ...params }) -> ListPart</code>
- <code title="delete /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">delete</a>(id) -> Part</code>

### Actions

Types:

- <code><a href="./src/resources/catalog/parts/actions.ts">FileDownload</a></code>

Methods:

- <code title="get /v1/catalog/parts/actions/export">client.catalog.parts.actions.<a href="./src/resources/catalog/parts/actions.ts">export</a>({ ...params }) -> FileDownload</code>

## ProductLines

Types:

- <code><a href="./src/resources/catalog/product-lines.ts">Account</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">Address</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">CreateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ListProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">UpdateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLineDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">create</a>({ ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieve</a>(id, { ...params }) -> ProductLine</code>
- <code title="patch /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">update</a>(id, { ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">list</a>({ ...params }) -> ListProductLine</code>
- <code title="delete /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">delete</a>(id) -> ProductLineDeleteResponse</code>

## Products

Types:

- <code><a href="./src/resources/catalog/products/products.ts">Account</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Address</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">CreateProductRequest</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Item</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ListProduct</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Product</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Property</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/catalog/products/actions.ts">Account</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Address</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">FileDownload</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Item</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Property</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ValidateProductsRequest</a></code>
- <code><a href="./src/resources/catalog/products/actions.ts">ValidateProductsResponse</a></code>

Methods:

- <code title="get /v1/catalog/products/actions/export">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">export</a>({ ...params }) -> FileDownload</code>
- <code title="put /v1/catalog/products/actions/validate">client.catalog.products.actions.<a href="./src/resources/catalog/products/actions.ts">validate</a>({ ...params }) -> ValidateProductsResponse</code>

## ProductTypes

Types:

- <code><a href="./src/resources/catalog/product-types.ts">CreateProductTypeRequest</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">ListProductType</a></code>
- <code><a href="./src/resources/catalog/product-types.ts">PageInfo</a></code>
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

- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Account</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Address</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogAttribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogCategory</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProduct</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProductLine</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">CatalogProperty</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Item</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogAttribute</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogCategory</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProduct</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProductLine</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListCatalogProperty</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Property</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Rate</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/catalog_/product-lines.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/catalog/catalog/product-lines">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">list</a>({ ...params }) -> ListCatalogProductLine</code>
- <code title="get /v1/catalog/catalog/product-lines/{id}/products">client.catalog.catalog.productLines.<a href="./src/resources/catalog/catalog_/product-lines.ts">retrieveProducts</a>(id, { ...params }) -> ListCatalogCategory</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AgentTokenUsage</a></code>
- <code><a href="./src/resources/ai/ai.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListAgentTokenUsage</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListAvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ListToolGroup</a></code>
- <code><a href="./src/resources/ai/ai.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/ai.ts">ToolGroup</a></code>

Methods:

- <code title="get /v1/ai/tool-groups">client.ai.<a href="./src/resources/ai/ai.ts">retrieveToolGroups</a>({ ...params }) -> ListToolGroup</code>
- <code title="get /v1/ai/tools">client.ai.<a href="./src/resources/ai/ai.ts">retrieveTools</a>({ ...params }) -> ListAvailableTool</code>
- <code title="get /v1/ai/usage">client.ai.<a href="./src/resources/ai/ai.ts">retrieveUsage</a>({ ...params }) -> ListAgentTokenUsage</code>

## Agents

Types:

- <code><a href="./src/resources/ai/agents.ts">Account</a></code>
- <code><a href="./src/resources/ai/agents.ts">AccountBranding</a></code>
- <code><a href="./src/resources/ai/agents.ts">AccountPortal</a></code>
- <code><a href="./src/resources/ai/agents.ts">Address</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/agents.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/agents.ts">ConfigInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">CreateAgentRequest</a></code>
- <code><a href="./src/resources/ai/agents.ts">Geolocation</a></code>
- <code><a href="./src/resources/ai/agents.ts">ListAgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/agents.ts">Owner</a></code>
- <code><a href="./src/resources/ai/agents.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/agents.ts">Role</a></code>
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

## Alerts

Types:

- <code><a href="./src/resources/ai/alerts/alerts.ts">Account</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Actor</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Address</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAlert</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Entity</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Geolocation</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">ListAgentAlert</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Owner</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">Role</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">TriggerConfig</a></code>

Methods:

- <code title="get /v1/ai/alerts/{id}">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">retrieve</a>(id, { ...params }) -> AgentAlert</code>
- <code title="get /v1/ai/alerts">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">list</a>({ ...params }) -> ListAgentAlert</code>

### Actions

Types:

- <code><a href="./src/resources/ai/alerts/actions.ts">Account</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Actor</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Address</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentAlert</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Entity</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Owner</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">Role</a></code>
- <code><a href="./src/resources/ai/alerts/actions.ts">TriggerConfig</a></code>

Methods:

- <code title="post /v1/ai/alerts/{id}/actions/acknowledge">client.ai.alerts.actions.<a href="./src/resources/ai/alerts/actions.ts">acknowledge</a>(id, { ...params }) -> AgentAlert</code>

## Runs

Types:

- <code><a href="./src/resources/ai/runs/runs.ts">Account</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AccountBranding</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AccountPortal</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Actor</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Address</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Entity</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Geolocation</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentRun</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Owner</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">Role</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">TriggerConfig</a></code>
- <code><a href="./src/resources/ai/runs/runs.ts">TriggerRunRequest</a></code>

Methods:

- <code title="post /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">create</a>({ ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs/{id}">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">retrieve</a>(id, { ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">list</a>({ ...params }) -> ListAgentRun</code>

### Actions

Types:

- <code><a href="./src/resources/ai/runs/actions.ts">Account</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Actor</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Address</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentRun</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">ContinueRunRequest</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Entity</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Owner</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">Role</a></code>
- <code><a href="./src/resources/ai/runs/actions.ts">TriggerConfig</a></code>

Methods:

- <code title="post /v1/ai/runs/{id}/actions/cancel">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">cancel</a>(id, { ...params }) -> AgentRun</code>
- <code title="post /v1/ai/runs/{id}/actions/continue">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">continue</a>(id, { ...params }) -> AgentRun</code>

## Memories

Types:

- <code><a href="./src/resources/ai/memories.ts">AgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">CreateMemoryRequest</a></code>
- <code><a href="./src/resources/ai/memories.ts">Entity</a></code>
- <code><a href="./src/resources/ai/memories.ts">ListAgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/memories.ts">UpdateMemoryRequest</a></code>
- <code><a href="./src/resources/ai/memories.ts">MemoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">create</a>({ ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">retrieve</a>(id) -> AgentMemory</code>
- <code title="patch /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">update</a>(id, { ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">list</a>({ ...params }) -> ListAgentMemory</code>
- <code title="delete /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">delete</a>(id) -> MemoryDeleteResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookResponse</a></code>

Methods:

- <code title="post /v1/webhooks/stripe">client.webhooks.<a href="./src/resources/webhooks.ts">stripe</a>({ ...params }) -> WebhookResponse</code>

# Finance

Types:

- <code><a href="./src/resources/finance/finance.ts">Account</a></code>
- <code><a href="./src/resources/finance/finance.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/finance.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/finance.ts">Address</a></code>
- <code><a href="./src/resources/finance/finance.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">AllocationCustomer</a></code>
- <code><a href="./src/resources/finance/finance.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/finance.ts">InvoiceAllocationEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListAdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListOpenCreditEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionType</a></code>
- <code><a href="./src/resources/finance/finance.ts">OpenCreditEntry</a></code>
- <code><a href="./src/resources/finance/finance.ts">Owner</a></code>
- <code><a href="./src/resources/finance/finance.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionType</a></code>

Methods:

- <code title="get /v1/finance/adjustment-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveAdjustmentTypes</a>({ ...params }) -> ListAdjustmentType</code>
- <code title="get /v1/finance/open-credits">client.finance.<a href="./src/resources/finance/finance.ts">retrieveOpenCredits</a>({ ...params }) -> ListOpenCreditEntry</code>
- <code title="get /v1/finance/transaction-methods">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionMethods</a>({ ...params }) -> ListTransactionMethod</code>
- <code title="get /v1/finance/transaction-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionTypes</a>({ ...params }) -> ListTransactionType</code>

## PaymentTerms

Types:

- <code><a href="./src/resources/finance/payment-terms.ts">Account</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">Address</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">CreatePaymentTermRequest</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">ListPaymentTerm</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">Owner</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTerm</a></code>
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

- <code><a href="./src/resources/finance/invoices.ts">Account</a></code>
- <code><a href="./src/resources/finance/invoices.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/invoices.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/invoices.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/invoices.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Actor</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Address</a></code>
- <code><a href="./src/resources/finance/invoices.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Customer</a></code>
- <code><a href="./src/resources/finance/invoices.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/invoices.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/invoices.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/invoices.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Department</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Item</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListInvoiceSummary</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Location</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Machine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Owner</a></code>
- <code><a href="./src/resources/finance/invoices.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/invoices.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Pick</a></code>
- <code><a href="./src/resources/finance/invoices.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Priority</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Property</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Rate</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Role</a></code>
- <code><a href="./src/resources/finance/invoices.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/invoices.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/invoices.ts">Unit</a></code>
- <code><a href="./src/resources/finance/invoices.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/invoices.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/invoices.ts">UpdateInvoiceRequest</a></code>

Methods:

- <code title="get /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">retrieve</a>(id, { ...params }) -> Invoice</code>
- <code title="patch /v1/finance/invoices/{id}">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">update</a>(id, { ...params }) -> InvoiceSummary</code>
- <code title="get /v1/finance/invoices">client.finance.invoices.<a href="./src/resources/finance/invoices.ts">list</a>({ ...params }) -> ListInvoiceSummary</code>

## Accounts

Types:

- <code><a href="./src/resources/finance/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Actor</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Address</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Customer</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Department</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">InvoiceForPayment</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Item</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListInvoiceForPayment</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListTransactionDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Location</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Machine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Owner</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Pick</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Priority</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Property</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Rate</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Role</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">Unit</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/accounts/accounts.ts">UnitGroupUnit</a></code>

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

- <code><a href="./src/resources/finance/receivables/receivables.ts">Account</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Actor</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Address</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Customer</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Department</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Item</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListReceivableEntry</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Location</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Machine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Owner</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Pick</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Priority</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Property</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Rate</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ReceivableEntry</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Role</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">Unit</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/receivables/receivables.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/finance/receivables">client.finance.receivables.<a href="./src/resources/finance/receivables/receivables.ts">list</a>({ ...params }) -> ListReceivableEntry</code>

### Accounts

Types:

- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Actor</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Address</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Customer</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Department</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Item</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListReceivableEntry</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Location</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Machine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Owner</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Pick</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Priority</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Property</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Rate</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ReceivableEntry</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Role</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">Unit</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/receivables/accounts/accounts.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}">client.finance.receivables.accounts.<a href="./src/resources/finance/receivables/accounts/accounts.ts">retrieve</a>(accountID, { ...params }) -> ListReceivableEntry</code>

#### Actions

Types:

- <code><a href="./src/resources/finance/receivables/accounts/actions.ts">FileDownload</a></code>

Methods:

- <code title="get /v1/finance/receivables/accounts/{account_id}/actions/export">client.finance.receivables.accounts.actions.<a href="./src/resources/finance/receivables/accounts/actions.ts">export</a>(accountID, { ...params }) -> FileDownload</code>

## Transactions

Types:

- <code><a href="./src/resources/finance/transactions.ts">Account</a></code>
- <code><a href="./src/resources/finance/transactions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/transactions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/transactions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/transactions.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Actor</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Address</a></code>
- <code><a href="./src/resources/finance/transactions.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/transactions.ts">CreateTransactionRequest</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Customer</a></code>
- <code><a href="./src/resources/finance/transactions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/transactions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/transactions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/transactions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Department</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/transactions.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Item</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListTransactionSummary</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Location</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Machine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Owner</a></code>
- <code><a href="./src/resources/finance/transactions.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/transactions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Pick</a></code>
- <code><a href="./src/resources/finance/transactions.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Priority</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Property</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Rate</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Role</a></code>
- <code><a href="./src/resources/finance/transactions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionSummary</a></code>
- <code><a href="./src/resources/finance/transactions.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/transactions.ts">Unit</a></code>
- <code><a href="./src/resources/finance/transactions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/transactions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/transactions.ts">UpdateTransactionRequest</a></code>

Methods:

- <code title="post /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">create</a>({ ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">retrieve</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="patch /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">update</a>(id, { ...params }) -> TransactionDetail</code>
- <code title="get /v1/finance/transactions">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">list</a>({ ...params }) -> ListTransactionSummary</code>
- <code title="delete /v1/finance/transactions/{id}">client.finance.transactions.<a href="./src/resources/finance/transactions.ts">delete</a>(id) -> TransactionDetail</code>

## TransactionAllocations

Types:

- <code><a href="./src/resources/finance/transaction-allocations.ts">Account</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Actor</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Address</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationCustomer</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationEntry</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationInvoice</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">AllocationTransaction</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Customer</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Department</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Item</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListAllocationEntry</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Location</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Machine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Owner</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Pick</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Priority</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Property</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Rate</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Role</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">Unit</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">UpdateTransactionAllocationRequest</a></code>
- <code><a href="./src/resources/finance/transaction-allocations.ts">TransactionAllocationDeleteResponse</a></code>

Methods:

- <code title="patch /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">update</a>(id, { ...params }) -> TransactionAllocation</code>
- <code title="get /v1/finance/transaction-allocations">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">list</a>({ ...params }) -> ListAllocationEntry</code>
- <code title="delete /v1/finance/transaction-allocations/{id}">client.finance.transactionAllocations.<a href="./src/resources/finance/transaction-allocations.ts">delete</a>(id) -> TransactionAllocationDeleteResponse</code>

## Settlements

Types:

- <code><a href="./src/resources/finance/settlements.ts">Account</a></code>
- <code><a href="./src/resources/finance/settlements.ts">AccountBranding</a></code>
- <code><a href="./src/resources/finance/settlements.ts">AccountGroup</a></code>
- <code><a href="./src/resources/finance/settlements.ts">AccountPortal</a></code>
- <code><a href="./src/resources/finance/settlements.ts">AccountUser</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Actor</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Address</a></code>
- <code><a href="./src/resources/finance/settlements.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Attribute</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Carrier</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Consumption</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CreateSettlementAllocationRequest</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CreateSettlementRequest</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Customer</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/finance/settlements.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Department</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Geolocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Invoice</a></code>
- <code><a href="./src/resources/finance/settlements.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Item</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ItemCategory</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListAttribute</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListConsumption</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListCustomer</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListDepartment</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListLocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListMachine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListProperty</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListSettlementSummary</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Location</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Machine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Owner</a></code>
- <code><a href="./src/resources/finance/settlements.ts">PageInfo</a></code>
- <code><a href="./src/resources/finance/settlements.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Pick</a></code>
- <code><a href="./src/resources/finance/settlements.ts">PickDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Priority</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ProductionRun</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ProductionStep</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Property</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Quantity</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Rate</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Role</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ScanningStation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Settlement</a></code>
- <code><a href="./src/resources/finance/settlements.ts">SettlementSummary</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/finance/settlements.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/finance/settlements.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/finance/settlements.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/settlements.ts">TransactionType</a></code>
- <code><a href="./src/resources/finance/settlements.ts">Unit</a></code>
- <code><a href="./src/resources/finance/settlements.ts">UnitGroup</a></code>
- <code><a href="./src/resources/finance/settlements.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/finance/settlements.ts">UpdateSettlementRequest</a></code>

Methods:

- <code title="post /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">create</a>({ ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">retrieve</a>(id, { ...params }) -> Settlement</code>
- <code title="patch /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">update</a>(id, { ...params }) -> Settlement</code>
- <code title="get /v1/finance/settlements">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">list</a>({ ...params }) -> ListSettlementSummary</code>
- <code title="delete /v1/finance/settlements/{id}">client.finance.settlements.<a href="./src/resources/finance/settlements.ts">delete</a>(id) -> Settlement</code>

# Operations

Types:

- <code><a href="./src/resources/operations/operations.ts">Account</a></code>
- <code><a href="./src/resources/operations/operations.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/operations.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/operations.ts">Address</a></code>
- <code><a href="./src/resources/operations/operations.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/operations.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/operations.ts">InventoryItem</a></code>
- <code><a href="./src/resources/operations/operations.ts">Item</a></code>
- <code><a href="./src/resources/operations/operations.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListInventoriesResponse</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/operations.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/operations.ts">Owner</a></code>
- <code><a href="./src/resources/operations/operations.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/operations.ts">Property</a></code>
- <code><a href="./src/resources/operations/operations.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/operations.ts">Rate</a></code>
- <code><a href="./src/resources/operations/operations.ts">Unit</a></code>
- <code><a href="./src/resources/operations/operations.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/operations.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/operations.ts">UpdateQuantityRequest</a></code>
- <code><a href="./src/resources/operations/operations.ts">UpdateRateRequest</a></code>

Methods:

- <code title="get /v1/operations/inventories">client.operations.<a href="./src/resources/operations/operations.ts">retrieveInventories</a>({ ...params }) -> ListInventoriesResponse</code>
- <code title="patch /v1/operations/quantities/{id}">client.operations.<a href="./src/resources/operations/operations.ts">updateQuantities</a>(id, { ...params }) -> Quantity</code>
- <code title="patch /v1/operations/rates/{id}">client.operations.<a href="./src/resources/operations/operations.ts">updateRates</a>(id, { ...params }) -> Rate</code>

## ShippingTerms

Types:

- <code><a href="./src/resources/operations/shipping-terms.ts">Account</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">Address</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">CreateShippingTermRequest</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ListShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">Owner</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">QuantityInput</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">Unit</a></code>
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

- <code><a href="./src/resources/operations/carriers/carriers.ts">Account</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">Address</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CreateCarrierRequest</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">ListCarrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">OAuthStatusResponse</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">Owner</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">ServiceLevel</a></code>
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

- <code><a href="./src/resources/operations/carriers/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">InitiateOAuthRequest</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">OAuthResponse</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/carriers/actions.ts">ServiceLevel</a></code>

Methods:

- <code title="post /v1/operations/carriers/{id}/actions/initiate-oauth">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">initiateOAuth</a>(id, { ...params }) -> OAuthResponse</code>
- <code title="post /v1/operations/carriers/{id}/actions/sync-options">client.operations.carriers.actions.<a href="./src/resources/operations/carriers/actions.ts">syncOptions</a>(id, { ...params }) -> Carrier</code>

### ServiceLevels

Types:

- <code><a href="./src/resources/operations/carriers/service-levels.ts">Account</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">Address</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">CreateServiceLevelRequest</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">Owner</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevel</a></code>
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

- <code><a href="./src/resources/operations/suppliers/suppliers.ts">Address</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">AddressInput</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">CreateSupplierRequest</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">ListSupplierSummary</a></code>
- <code><a href="./src/resources/operations/suppliers/suppliers.ts">PageInfo</a></code>
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

- <code><a href="./src/resources/operations/suppliers/materials.ts">Account</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Address</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">CreateSupplierMaterialRequest</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Item</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ListSupplierMaterial</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Material</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Owner</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Property</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Rate</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">SupplierMaterial</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">Unit</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/suppliers/materials.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/operations/batches/batches.ts">Account</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Address</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Batch</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchFlowNode</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">BatchLot</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Department</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">GetPossibleNextStepsRequest</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">GetRemainingQuantityToSplitRequest</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Item</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListBatchFlowNode</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListBatchLot</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListScanningProductionStepInfo</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Location</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Machine</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Owner</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Property</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Rate</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ScanningProductionStepInfo</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">Unit</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/batches/batches.ts">UnitGroupUnit</a></code>

Methods:

- <code title="delete /v1/operations/batches/{id}">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">delete</a>(id) -> Batch</code>
- <code title="post /v1/operations/batches/{id}/next-steps">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">nextSteps</a>(id, { ...params }) -> ListScanningProductionStepInfo</code>
- <code title="post /v1/operations/batches/remaining-quantities">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">remainingQuantities</a>({ ...params }) -> Quantity</code>
- <code title="get /v1/operations/batches/{id}/flow">client.operations.batches.<a href="./src/resources/operations/batches/batches.ts">retrieveFlow</a>(id) -> ListBatchFlowNode</code>

### Actions

Types:

- <code><a href="./src/resources/operations/batches/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Batch</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">BatchLot</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">CloseBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">DeleteManyBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Department</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">InitializeBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListBatchLot</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Location</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Machine</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">MergeBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">MoveBatchesRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">SplitBatchRequest</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">SplitQuantityInput</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/batches/actions.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/operations/scanning-stations.ts">Account</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Address</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Batch</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">BatchLot</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ConnectProductionStepsRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">CreateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Department</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">GetScanningStationConsumptionRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Item</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListBatch</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListBatchLot</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListScanningConsumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Location</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Machine</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Owner</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Property</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Rate</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningConsumption</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">SplitQuantityInput</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">Unit</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">UpdateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationDeleteResponse</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationUpdateProductionStepsResponse</a></code>

Methods:

- <code title="post /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">create</a>({ ...params }) -> ScanningStation</code>
- <code title="get /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieve</a>(id, { ...params }) -> ScanningStation</code>
- <code title="patch /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">update</a>(id, { ...params }) -> ScanningStation</code>
- <code title="get /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">list</a>({ ...params }) -> ListScanningStation</code>
- <code title="delete /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">delete</a>(id) -> ScanningStationDeleteResponse</code>
- <code title="post /v1/operations/scanning-stations/{id}/consumptions">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">consumptions</a>(id, { ...params }) -> ListScanningConsumption</code>
- <code title="get /v1/operations/scanning-stations/{id}/batches">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieveBatches</a>(id, { ...params }) -> ListBatch</code>
- <code title="put /v1/operations/scanning-stations/{id}/production-steps">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">updateProductionSteps</a>(id, { ...params }) -> ScanningStationUpdateProductionStepsResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/operations/analytics.ts">Account</a></code>
- <code><a href="./src/resources/operations/analytics.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/analytics.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Address</a></code>
- <code><a href="./src/resources/operations/analytics.ts">AnalyzeOpenBatchesRequest</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Department</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Item</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListOpenBatchSummary</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Location</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Machine</a></code>
- <code><a href="./src/resources/operations/analytics.ts">OpenBatchSummary</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Owner</a></code>
- <code><a href="./src/resources/operations/analytics.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Property</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Rate</a></code>
- <code><a href="./src/resources/operations/analytics.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/analytics.ts">Unit</a></code>
- <code><a href="./src/resources/operations/analytics.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/analytics.ts">UnitGroupUnit</a></code>

Methods:

- <code title="put /v1/operations/analytics/open-batches">client.operations.analytics.<a href="./src/resources/operations/analytics.ts">updateOpenBatches</a>({ ...params }) -> ListOpenBatchSummary</code>

## Departments

Types:

- <code><a href="./src/resources/operations/departments.ts">Account</a></code>
- <code><a href="./src/resources/operations/departments.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/departments.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/departments.ts">Address</a></code>
- <code><a href="./src/resources/operations/departments.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/departments.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/departments.ts">CreateDepartmentRequest</a></code>
- <code><a href="./src/resources/operations/departments.ts">Department</a></code>
- <code><a href="./src/resources/operations/departments.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/departments.ts">Item</a></code>
- <code><a href="./src/resources/operations/departments.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/departments.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/departments.ts">Location</a></code>
- <code><a href="./src/resources/operations/departments.ts">Machine</a></code>
- <code><a href="./src/resources/operations/departments.ts">Owner</a></code>
- <code><a href="./src/resources/operations/departments.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/departments.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/departments.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/departments.ts">Property</a></code>
- <code><a href="./src/resources/operations/departments.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/departments.ts">Rate</a></code>
- <code><a href="./src/resources/operations/departments.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/departments.ts">Unit</a></code>
- <code><a href="./src/resources/operations/departments.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/departments.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/departments.ts">UpdateDepartmentRequest</a></code>
- <code><a href="./src/resources/operations/departments.ts">DepartmentDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments.ts">create</a>({ ...params }) -> Department</code>
- <code title="get /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">retrieve</a>(id, { ...params }) -> Department</code>
- <code title="patch /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">update</a>(id, { ...params }) -> Department</code>
- <code title="get /v1/operations/departments">client.operations.departments.<a href="./src/resources/operations/departments.ts">list</a>({ ...params }) -> ListDepartment</code>
- <code title="delete /v1/operations/departments/{id}">client.operations.departments.<a href="./src/resources/operations/departments.ts">delete</a>(id) -> DepartmentDeleteResponse</code>

## ProductionSteps

Types:

- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateConsumptionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateProductionInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateProductionStepRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">CreateRateInput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Department</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Location</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Machine</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">CreateConsumptionRequest</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-steps/consumptions.ts">UpdateConsumptionRequest</a></code>

Methods:

- <code title="post /v1/operations/production-steps/{production_step_id}/consumptions">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">create</a>(productionStepID, { ...params }) -> Consumption</code>
- <code title="get /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">retrieve</a>(id, { ...params }) -> Consumption</code>
- <code title="patch /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">update</a>(id, { ...params }) -> Consumption</code>
- <code title="delete /v1/operations/production-steps/{production_step_id}/consumptions/{id}">client.operations.productionSteps.consumptions.<a href="./src/resources/operations/production-steps/consumptions.ts">delete</a>(id, { ...params }) -> Consumption</code>

### Productions

Types:

- <code><a href="./src/resources/operations/production-steps/productions.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-steps/productions.ts">UnitGroupUnit</a></code>
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

Methods:

- <code title="post /v1/operations/production-steps/actions/bulk-create">client.operations.productionSteps.actions.<a href="./src/resources/operations/production-steps/actions.ts">bulkCreate</a>({ ...params }) -> BulkCreateProductionStepsResponse</code>

## Deliveries

Types:

- <code><a href="./src/resources/operations/deliveries.ts">Account</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Actor</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Address</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Customer</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Delivery</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">DeliveryLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">DeliverySummary</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Department</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Item</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListDeliveryLine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListDeliverySummary</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Location</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Lot</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Machine</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Owner</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Pick</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Priority</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Property</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Rate</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Role</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">Unit</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/deliveries.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/operations/deliveries/{id}">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">retrieve</a>(id) -> Delivery</code>
- <code title="get /v1/operations/deliveries">client.operations.deliveries.<a href="./src/resources/operations/deliveries.ts">list</a>({ ...params }) -> ListDeliverySummary</code>

## InventoryChangeLogs

Types:

- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Account</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Address</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Department</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">InventoryChangeLog</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Item</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListInventoryChangeLog</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Location</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Machine</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Owner</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Property</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Rate</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">Unit</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">User</a></code>

Methods:

- <code title="get /v1/operations/inventory-change-logs/{id}">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">retrieve</a>(id, { ...params }) -> InventoryChangeLog</code>
- <code title="get /v1/operations/inventory-change-logs">client.operations.inventoryChangeLogs.<a href="./src/resources/operations/inventory-change-logs/inventory-change-logs.ts">list</a>({ ...params }) -> ListInventoryChangeLog</code>

### Actions

Types:

- <code><a href="./src/resources/operations/inventory-change-logs/actions.ts">FileDownload</a></code>

Methods:

- <code title="get /v1/operations/inventory-change-logs/actions/export">client.operations.inventoryChangeLogs.actions.<a href="./src/resources/operations/inventory-change-logs/actions.ts">export</a>({ ...params }) -> FileDownload</code>

## Machines

Types:

- <code><a href="./src/resources/operations/machines.ts">Account</a></code>
- <code><a href="./src/resources/operations/machines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/machines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/machines.ts">Address</a></code>
- <code><a href="./src/resources/operations/machines.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/machines.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/machines.ts">CreateMachineRequest</a></code>
- <code><a href="./src/resources/operations/machines.ts">Department</a></code>
- <code><a href="./src/resources/operations/machines.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/machines.ts">Item</a></code>
- <code><a href="./src/resources/operations/machines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/machines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/machines.ts">Location</a></code>
- <code><a href="./src/resources/operations/machines.ts">Machine</a></code>
- <code><a href="./src/resources/operations/machines.ts">Owner</a></code>
- <code><a href="./src/resources/operations/machines.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/machines.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/machines.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/machines.ts">Property</a></code>
- <code><a href="./src/resources/operations/machines.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/machines.ts">Rate</a></code>
- <code><a href="./src/resources/operations/machines.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/machines.ts">Unit</a></code>
- <code><a href="./src/resources/operations/machines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/machines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/machines.ts">UpdateMachineRequest</a></code>
- <code><a href="./src/resources/operations/machines.ts">MachineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines.ts">create</a>({ ...params }) -> Machine</code>
- <code title="get /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">retrieve</a>(id, { ...params }) -> Machine</code>
- <code title="patch /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">update</a>(id, { ...params }) -> Machine</code>
- <code title="get /v1/operations/machines">client.operations.machines.<a href="./src/resources/operations/machines.ts">list</a>({ ...params }) -> ListMachine</code>
- <code title="delete /v1/operations/machines/{id}">client.operations.machines.<a href="./src/resources/operations/machines.ts">delete</a>(id) -> MachineDeleteResponse</code>

## ReceivingOrders

Types:

- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Account</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Actor</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Address</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Customer</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Department</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Item</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListReceivingOrderSummary</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Location</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Machine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Owner</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Pick</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Priority</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Property</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Rate</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ReceivingOrderSummary</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Role</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">Unit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/receiving-orders.ts">UnitGroupUnit</a></code>

Methods:

- <code title="get /v1/operations/receiving-orders/{id}">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">retrieve</a>(id) -> ReceivingOrder</code>
- <code title="get /v1/operations/receiving-orders">client.operations.receivingOrders.<a href="./src/resources/operations/receiving-orders/receiving-orders.ts">list</a>({ ...params }) -> ListReceivingOrderSummary</code>

### Actions

Types:

- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Actor</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">AllocationRequest</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Customer</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Department</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Location</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Machine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Pick</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Priority</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Role</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">StockLineItemRequest</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">StockReceivingOrderRequest</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/actions.ts">UnitGroupUnit</a></code>

Methods:

- <code title="put /v1/operations/receiving-orders/{id}/actions/receive">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">receive</a>(id) -> ReceivingOrder</code>
- <code title="post /v1/operations/receiving-orders/{id}/actions/stock">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">stock</a>(id, { ...params }) -> ReceivingOrder</code>
- <code title="put /v1/operations/receiving-orders/{id}/actions/void">client.operations.receivingOrders.actions.<a href="./src/resources/operations/receiving-orders/actions.ts">void</a>(id) -> ReceivingOrder</code>

### Lines

Types:

- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Account</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Address</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Item</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Owner</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Property</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Rate</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">Unit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/lines.ts">UpdateReceivingOrderLineRequest</a></code>

Methods:

- <code title="patch /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}">client.operations.receivingOrders.lines.<a href="./src/resources/operations/receiving-orders/lines/lines.ts">update</a>(id, { ...params }) -> ReceivingOrderLine</code>

#### Actions

Types:

- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/receiving-orders/lines/actions.ts">UnitGroupUnit</a></code>

Methods:

- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/receive">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">receive</a>(id, { ...params }) -> ReceivingOrderLine</code>
- <code title="put /v1/operations/receiving-orders/{receiving_order_id}/lines/{id}/actions/void">client.operations.receivingOrders.lines.actions.<a href="./src/resources/operations/receiving-orders/lines/actions.ts">void</a>(id, { ...params }) -> ReceivingOrderLine</code>

## ProductionFlows

Types:

- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Department</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProductionFlowConsumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProductionFlowStep</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Location</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Machine</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlow</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowConsumption</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowProduction</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionFlowStep</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-flows/production-flows.ts">UnitGroupUnit</a></code>

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

- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">CreateProductionRunRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Department</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListProductionRunSummary</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Location</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Machine</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunDetail</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunSummary</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Role</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">UpdateProductionRunRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/production-runs.ts">ProductionRunDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">create</a>({ ...params }) -> ProductionRunDetail</code>
- <code title="get /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">retrieve</a>(id, { ...params }) -> ProductionRunDetail</code>
- <code title="patch /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">update</a>(id, { ...params }) -> ProductionRunDetail</code>
- <code title="get /v1/operations/production-runs">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">list</a>({ ...params }) -> ListProductionRunSummary</code>
- <code title="delete /v1/operations/production-runs/{id}">client.operations.productionRuns.<a href="./src/resources/operations/production-runs/production-runs.ts">delete</a>(id) -> ProductionRunDeleteResponse</code>

### Batches

Types:

- <code><a href="./src/resources/operations/production-runs/batches.ts">Account</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">AddBatchInputRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">AddBatchesToProductionRunRequest</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Address</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Batch</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">BatchLot</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Department</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Item</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListBatch</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListBatchLot</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Location</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Machine</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Owner</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Property</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Rate</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">Unit</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/production-runs/batches.ts">UnitGroupUnit</a></code>

Methods:

- <code title="post /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">create</a>(id, { ...params }) -> ListBatch</code>
- <code title="get /v1/operations/production-runs/{id}/batches">client.operations.productionRuns.batches.<a href="./src/resources/operations/production-runs/batches.ts">list</a>(id, { ...params }) -> ListBatch</code>

## PurchaseOrders

Types:

- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Account</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Actor</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Address</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CreatePurchaseOrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CreatePurchaseOrderRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Customer</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Department</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">EmailContact</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Item</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListEmailContact</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListPurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListPurchaseOrderSummary</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListSalesOrderStatus</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Location</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Machine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Owner</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Pick</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Priority</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Property</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderSummary</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Rate</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Role</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderStatus</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Supplier</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">Unit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">UpdatePurchaseOrderRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/purchase-orders.ts">PurchaseOrderDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">create</a>({ ...params }) -> PurchaseOrderDetail</code>
- <code title="get /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieve</a>(id, { ...params }) -> PurchaseOrderDetail</code>
- <code title="patch /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">update</a>(id, { ...params }) -> PurchaseOrderDetail</code>
- <code title="get /v1/operations/purchase-orders">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">list</a>({ ...params }) -> ListPurchaseOrderSummary</code>
- <code title="delete /v1/operations/purchase-orders/{id}">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">delete</a>(id) -> PurchaseOrderDeleteResponse</code>
- <code title="get /v1/operations/purchase-orders/statuses">client.operations.purchaseOrders.<a href="./src/resources/operations/purchase-orders/purchase-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>

### Actions

Types:

- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Actor</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">BulkDeletePurchaseOrdersRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ChangePurchaseOrderStatusRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Customer</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Department</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">EmailContact</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListEmailContact</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListPurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Location</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Machine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Pick</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Priority</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">PurchaseOrderDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">PurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ReceivingOrder</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ReceivingOrderLine</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Role</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Supplier</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/actions/bulk-delete">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/operations/purchase-orders/{id}/actions/change-status">client.operations.purchaseOrders.actions.<a href="./src/resources/operations/purchase-orders/actions.ts">changeStatus</a>(id, { ...params }) -> PurchaseOrderDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Account</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Address</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">CreatePurchaseOrderLineRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Item</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">OrderLineInput</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Owner</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Property</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">PurchaseOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Rate</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">Unit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">UpdatePurchaseOrderLineRequest</a></code>
- <code><a href="./src/resources/operations/purchase-orders/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/purchase-orders/{id}/lines">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">create</a>(id, { ...params }) -> PurchaseOrderLineDetail</code>
- <code title="patch /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">update</a>(lineID, { ...params }) -> PurchaseOrderLineDetail</code>
- <code title="delete /v1/operations/purchase-orders/{id}/lines/{line_id}">client.operations.purchaseOrders.lines.<a href="./src/resources/operations/purchase-orders/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

## Picks

Types:

- <code><a href="./src/resources/operations/picks/picks.ts">Account</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Actor</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Address</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Customer</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Department</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Item</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListPickSummary</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Location</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Machine</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Owner</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Pick</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickShipmentsResponse</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">PickSummary</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Priority</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Property</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Rate</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Role</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">Unit</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/picks.ts">UpdatePickRequest</a></code>

Methods:

- <code title="get /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieve</a>(id, { ...params }) -> PickDetail</code>
- <code title="patch /v1/operations/picks/{id}">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">update</a>(id, { ...params }) -> PickDetail</code>
- <code title="get /v1/operations/picks">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">list</a>({ ...params }) -> ListPickSummary</code>
- <code title="get /v1/operations/picks/{id}/shipments">client.operations.picks.<a href="./src/resources/operations/picks/picks.ts">retrieveShipments</a>(id, { ...params }) -> PickShipmentsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/picks/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Actor</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Customer</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Department</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Location</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Machine</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PackPickRequest</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PackPickResponse</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Pick</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Priority</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Role</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/picks/actions.ts">UnitGroupUnit</a></code>

Methods:

- <code title="post /v1/operations/picks/{id}/actions/pack">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">pack</a>(id, { ...params }) -> PackPickResponse</code>
- <code title="put /v1/operations/picks/{id}/actions/pick">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">pick</a>(id) -> PickDetail</code>
- <code title="put /v1/operations/picks/{id}/actions/void">client.operations.picks.actions.<a href="./src/resources/operations/picks/actions.ts">void</a>(id) -> PickDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/picks/lines/lines.ts">Account</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Address</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Item</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Owner</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Property</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Rate</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">Unit</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/lines/lines.ts">UpdatePickLineRequest</a></code>

Methods:

- <code title="patch /v1/operations/picks/{pick_id}/lines/{id}">client.operations.picks.lines.<a href="./src/resources/operations/picks/lines/lines.ts">update</a>(id, { ...params }) -> PickLineDetail</code>

#### Actions

Types:

- <code><a href="./src/resources/operations/picks/lines/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/picks/lines/actions.ts">UnitGroupUnit</a></code>

Methods:

- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/pick">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">pick</a>(id, { ...params }) -> PickLineDetail</code>
- <code title="put /v1/operations/picks/{pick_id}/lines/{id}/actions/void">client.operations.picks.lines.actions.<a href="./src/resources/operations/picks/lines/actions.ts">void</a>(id, { ...params }) -> PickLineDetail</code>

## Locations

Types:

- <code><a href="./src/resources/operations/locations.ts">CreateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/locations.ts">Location</a></code>
- <code><a href="./src/resources/operations/locations.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/locations.ts">UpdateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="get /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">retrieve</a>(id, { ...params }) -> Location</code>
- <code title="patch /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">update</a>(id, { ...params }) -> Location</code>
- <code title="get /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">list</a>({ ...params }) -> ListLocation</code>
- <code title="delete /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">delete</a>(id) -> LocationDeleteResponse</code>

## LocationTypes

Types:

- <code><a href="./src/resources/operations/location-types.ts">ListLocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">LocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">PageInfo</a></code>

Methods:

- <code title="get /v1/operations/location-types/{id}">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieve</a>(id) -> LocationType</code>
- <code title="get /v1/operations/location-types">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">list</a>({ ...params }) -> ListLocationType</code>

## ShippingCases

Types:

- <code><a href="./src/resources/operations/shipping-cases.ts">Account</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Actor</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Address</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Customer</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Department</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Invoice</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Item</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Location</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Machine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Owner</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Pick</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Priority</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Property</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Rate</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Role</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCase</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCaseLabelURL</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">TransactionType</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">Unit</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">UpdateShippingCaseRequest</a></code>
- <code><a href="./src/resources/operations/shipping-cases.ts">ShippingCaseDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">retrieve</a>(id, { ...params }) -> ShippingCase</code>
- <code title="patch /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">update</a>(id, { ...params }) -> ShippingCase</code>
- <code title="delete /v1/operations/shipping-cases/{id}">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">delete</a>(id) -> ShippingCaseDeleteResponse</code>
- <code title="get /v1/operations/shipping-cases/{id}/label">client.operations.shippingCases.<a href="./src/resources/operations/shipping-cases.ts">retrieveLabel</a>(id) -> ShippingCaseLabelURL</code>

## Shipments

Types:

- <code><a href="./src/resources/operations/shipments/shipments.ts">Account</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Actor</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Address</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Customer</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Department</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Invoice</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Item</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListShipmentSummary</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Location</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Machine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Owner</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Pick</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Priority</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Property</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Rate</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Role</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentSummary</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">TransactionType</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">Unit</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">UpdateShipmentRequest</a></code>
- <code><a href="./src/resources/operations/shipments/shipments.ts">ShipmentDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">retrieve</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="patch /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">update</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="get /v1/operations/shipments">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">list</a>({ ...params }) -> ListShipmentSummary</code>
- <code title="delete /v1/operations/shipments/{id}">client.operations.shipments.<a href="./src/resources/operations/shipments/shipments.ts">delete</a>(id) -> ShipmentDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/operations/shipments/actions.ts">Account</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AccountGroup</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AccountUser</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Actor</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Address</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AddressInput</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Consumption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Customer</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Department</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">EstimateRateRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">EstimateRateResult</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Invoice</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">InvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">InvoiceSummary</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Item</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListConsumption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListCustomer</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListDepartment</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListInvoiceAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListInvoiceLine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListPickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListRateShopOption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListSalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListTransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Location</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Machine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Owner</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ParcelInput</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Pick</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">PickDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">PickLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Priority</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ProductionStep</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Property</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Rate</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopOption</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">RateShopResult</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Role</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">SalesOrderDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">SalesOrderStatusDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">SalesOrderType</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipShipmentRequest</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipmentBilling</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipmentDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShippingCaseDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">TransactionAllocation</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">TransactionDetail</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">TransactionType</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">Unit</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/shipments/actions.ts">UnitGroupUnit</a></code>

Methods:

- <code title="post /v1/operations/shipments/actions/estimate-rate">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">estimateRate</a>({ ...params }) -> EstimateRateResult</code>
- <code title="post /v1/operations/shipments/actions/rate-shop">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">rateShop</a>({ ...params }) -> RateShopResult</code>
- <code title="post /v1/operations/shipments/{id}/actions/ship">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">ship</a>(id, { ...params }) -> ShipmentDetail</code>
- <code title="post /v1/operations/shipments/{id}/actions/void">client.operations.shipments.actions.<a href="./src/resources/operations/shipments/actions.ts">void</a>(id) -> ShipmentDetail</code>

### Lines

Types:

- <code><a href="./src/resources/operations/shipments/lines.ts">Account</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">AccountBranding</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">AccountPortal</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Address</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Attribute</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">CreateShipmentLineRequest</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Geolocation</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Item</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ItemCategory</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ListAttribute</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ListProperty</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ListShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Owner</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">PageInfo</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Property</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Quantity</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Rate</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">SalesOrderLineDetail</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">ShipmentLine</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">Unit</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">UnitGroup</a></code>
- <code><a href="./src/resources/operations/shipments/lines.ts">UnitGroupUnit</a></code>
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

- <code><a href="./src/resources/operations/edi/actions.ts">MessageResource</a></code>
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
- <code><a href="./src/resources/operations/dc-locations.ts">PageInfo</a></code>
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
- <code><a href="./src/resources/operations/edi-runs.ts">PageInfo</a></code>

Methods:

- <code title="get /v1/operations/edi-runs/{id}">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">retrieve</a>(id) -> EdiRun</code>
- <code title="get /v1/operations/edi-runs">client.operations.ediRuns.<a href="./src/resources/operations/edi-runs.ts">list</a>({ ...params }) -> ListEdiRun</code>
