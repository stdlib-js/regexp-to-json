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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# regexp2json

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
regexp2json = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-to-json@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var regexp2json = require( 'path/to/vendor/umd/regexp-to-json/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-to-json@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.regexp2json;
})();
</script>
```

#### regexp2json( regexp )

Returns a [JSON][json] representation of a [regular expression][mdn-regexp].

```javascript
var json = regexp2json( /ab+c/ );
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

var out = regexp2json( /.*/ );
/* returns
    {
        'type': 'RegExp',
        'pattern': '.*',
        'flags': ''
    }
*/

out = regexp2json( /ab+c/g );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp-reviver`][@stdlib/regexp/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized regular expression.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-to-json/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-to-json/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-to-json/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-to-json/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-to-json/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-to-json/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-to-json/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-to-json/main/LICENSE

[json]: http://www.json.org/

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/regexp/reviver]: https://github.com/stdlib-js/regexp-reviver/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
