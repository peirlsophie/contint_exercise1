# @nick_muellner/password-utilities

> This library helps with generating strong random passwords or checking their safety.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @nick_muellner/password-utilities
```
Install via yarn:

```bash
yarn add @nick_muellner/password-utilities
```

## Usage

Basic Usage

```js
import { generateStrongPassword, isStrongPassword } from '@nick_muellner/password-utilities';

const length = 12;
const safePassword = generateStrongPassword(length);

console.log(safePassword);                      // e.g. "pC%mD8TpCKn2"
console.log(isStrongPassword(safePassword))     // e.g. true
```

### Examples

Generate strong passwords with `isStrongPassword()`

```js
import { generateStrongPassword, isStrongPassword } from '@nick_muellner/password-utilities';

const length1 = 1;
const length2 = 12;

console.log(generateStrongPassword(length1)); // e.g. "pC%mD8Tp"
console.log(generateStrongPassword(length2)); // e.g. "pC%mD8TpCKn2"
```

Check safety of password:

```js
import { generateStrongPassword, isStrongPassword } from '@nick_muellner/password-utilities';

const password1 = "Hello World"
const password2 = "pC%mD8TpCKn2"

console.log(isStrongPassword(password1)); // e.g. false
console.log(isStrongPassword(password2)); // e.g. true
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

**Important Note**: This library uses non-cryptographic randomness (`Math.random()`). Do not rely on it for security-critical functionality.

## License

This project is licensed under the [MIT License](./LICENSE.md).
