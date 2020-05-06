# @langurama/type-check

[![Build](https://img.shields.io/github/workflow/status/langurama/type-check/Langurama%20Type%20Check?style=for-the-badge)](https://github.com/langurama/type-check/actions?query=workflow%3A%22Langurama+Type+Check%22)
[![Coverage](https://img.shields.io/codecov/c/github/langurama/type-check?style=for-the-badge)](https://codecov.io/gh/langurama/type-check/branch/master)
[![Version](https://img.shields.io/npm/v/@langurama/type-check.svg?style=for-the-badge)](https://www.npmjs.com/package/@langurama/type-check)
[![License](https://img.shields.io/npm/l/@langurama/type-check.svg?style=for-the-badge)](https://github.com/langurama/type-check/blob/master/LICENSE)

Due to the retardedness of JavaScript not including proper type checking mechanisms this library was born out of fire and glory. This package is made for Node.js and the browser.

## Contents.

-   [ Install ](#install)
-   [ Usage ](#usage)
-   [ How it works ](#how-it-works)

<a name="install"></a>

## Install

```
npm install --save-prod --save-exact @langurama/type-check
```

<a name="usage"></a>

## Usage

### \<LanguramaTypeCheck\>

#### array(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### asyncFunction(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### bigint(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### boolean(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### date(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### error(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### function(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### generatorFunction(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### nan(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### null(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### number(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### object(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### promise(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### string(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### symbol(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### undefined(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

<a name="example"></a>

## Example

You may check the `example/` directory for runnable example files.

<a name="how-it-works"></a>

## How it works

This package transpiles code to `CommonJS` via `Babel` targeted at the current `Node.js` LTS version. To use this in the browser you will need to transpile it from `CommonJS` to your targeted browser(s).
