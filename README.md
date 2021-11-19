<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# truncb

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of b^n toward zero.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-truncb
```

</section>

<section class="usage">

## Usage

```javascript
var truncb = require( '@stdlib/math-base-special-truncb' );
```

#### truncb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` toward zero.

```javascript
// Round a value to 4 decimal places:
var v = truncb( 3.141592653589793, -4, 10 );
// returns 3.1415

// If n = 0 or b = 1, `truncb` behaves like `trunc`:
v = truncb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two toward zero:
v = truncb( 5.0, 1, 2 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var truncb = require( '@stdlib/math-base-special-truncb' );

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = truncb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundb`][@stdlib/math/base/special/roundb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n on a linear scale.</span>
-   <span class="package-name">[`@stdlib/math/base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncn`][@stdlib/math/base/special/truncn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward zero.</span>

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-truncb.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-truncb

[test-image]: https://github.com/stdlib-js/math-base-special-truncb/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-truncb/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-truncb/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-truncb?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-truncb.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-truncb/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-truncb/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math-base-special-ceilb

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math-base-special-floorb

[@stdlib/math/base/special/roundb]: https://github.com/stdlib-js/math-base-special-roundb

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc

[@stdlib/math/base/special/truncn]: https://github.com/stdlib-js/math-base-special-truncn

<!-- </related-links> -->

</section>

<!-- /.links -->
