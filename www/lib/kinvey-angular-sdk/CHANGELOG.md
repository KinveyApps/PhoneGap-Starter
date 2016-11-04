## Changelog
## [v3.2.2](https://github.com/Kinvey/angular-sdk/tree/v3.2.2) (2016-10-26)

**Updates:**

- Updated `kinvey-node-sdk` and `kinvey-phonegap-sdk` to latest versions.

## [v3.2.1](https://github.com/Kinvey/angular-sdk/tree/v3.2.1) (2016-10-07)

**Bug Fixes:**

- Fixed bug that prevented device registration for push notifications.

## [v3.2.0](https://github.com/Kinvey/angular-sdk/tree/v3.2.0) (2016-09-23)
[Full Changelog](https://github.com/Kinvey/angular-sdk/compare/3.1.0...3.2.0)<br/>
[SDK Core Changelog](https://github.com/Kinvey/javascript-sdk-core/blob/master/CHANGELOG.md)

**Implemented enhancements:**

- Removed `Popup`, `Device`, and rack implementations.

### 3.1.0 (2016-09-12)
* Enhancement: Restructure files.
* Enhancement: Export files.

### 3.0.3 (2016-08-12)
* Enhancement: Update `kinvey-javascript-sdk-core`, `kinvey-html5-sdk`, and `kinvey-phonegap-sdk` dependencies to version 3.0.3.

### 3.0.2 (2016-08-03)
* Enhancement: Update `kinvey-javascript-sdk-core` dependency.
* Enhancement: Update `kinvey-html5-sdk` dependency.
* Enhancement: Update `kinvey-phonegap-sdk` dependency.

### 3.0.1 (2016-07-29)
* Enhancement: Update the dependencies.

### 3.0.0 (2016-07-15)
* Enhancement: Release 3.0.0.

### 3.0.0-beta.28 (2016-06-28)
* BugFix (MLIBZ-1155): Use `es6-promise` to polyfill browsers that don't support Promises natively.

### 3.0.0-beta.27 (2016-06-13)
* Enhancement: Use Html5 SDK and PhoneGap SDK modules depending on where an app is deployed.

### 3.0.0-beta.26 (2016-06-07)
* Bugfix (MLIBZ-1134): Check that `global.device` is not `undefined`.

### 3.0.0-beta.17 (2016-04-20)
* Bugfix (MLIBZ-1016): Fix bug that prevented push from not working on iOS devices.

### 3.0.0-beta.16 (2016-04-19)
* Bugfix: Use url provided to popup open function to open popup.

### 3.0.0-beta.15 (2016-04-19)
* Bugfix (MLIBZ-978): Fixed bug for unknown provider $http.
* Bugfix (MLIBZ-1016): Fixed bug that prevented push from not working on Android devices.
* Bugfix (MLIBZ-1027): Fixed a bug that prevented popups from being closed in web browsers.
