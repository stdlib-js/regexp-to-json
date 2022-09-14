<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# toJSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [JSON][json] representation of a [regular expression][mdn-regexp].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
toJSON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-to-json@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var toJSON = require( 'path/to/vendor/umd/regexp-to-json/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-to-json@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.toJSON;
})();
</script>
```

#### toJSON( regexp )

Returns a [JSON][json] representation of a [regular expression][mdn-regexp].

```javascript
var json = toJSON( /ab+c/ );
/* returns
    {
        'type': 'RegExp',
        'pattern': 'ab+c',
        'flags': ''
    }
*/
```

The returned object has the following properties:

-   **type**: value type. The assigned value is always `'RegExp'`.
-   **pattern**: regular expression pattern.
-   **flags**: regular expression flags.

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-to-json@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = toJSON( /ab+c/ );
/* returns
    {
        'type': 'RegExp',
        'pattern': 'ab+c',
        'flags': ''
    }
*/

out = toJSON( /ab+c/g );
/* returns
    {
        'type': 'RegExp',
        'pattern': 'ab+c',
        'flags': 'g'
    }
*/

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-to-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-to-json

[test-image]: https://github.com/stdlib-js/regexp-to-json/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-to-json/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-to-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-to-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-to-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-to-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-to-json/tree/deno
[umd-url]: https://github.com/stdlib-js/regexp-to-json/tree/umd
[esm-url]: https://github.com/stdlib-js/regexp-to-json/tree/esm
[branches-url]: https://github.com/stdlib-js/regexp-to-json/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-to-json/main/LICENSE

[json]: http://www.json.org/

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
