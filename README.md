# @reduct/nitpick
[![Build Status](https://travis-ci.org/reduct/nitpick.svg)](https://travis-ci.org/reduct/nitpick) [![Dependency Status](https://david-dm.org/reduct/nitpick.svg)](https://david-dm.org/reduct/nitpick) [![devDependency Status](https://david-dm.org/reduct/nitpick/dev-status.svg)](https://david-dm.org/reduct/nitpick#info=devDependencies) [![Code Climate](https://codeclimate.com/github/reduct/nitpick/badges/gpa.svg)](https://codeclimate.com/github/reduct/nitpick) [![Test Coverage](https://codeclimate.com/github/reduct/nitpick/badges/coverage.svg)](https://codeclimate.com/github/reduct/nitpick/coverage)

> Type validators for the @reduct/component.


## Validators
The validators will, as the name states, validate as well as optionally transform the values into the requested types.

F.e. if you expect a `Number`and the user passes in a `String` containing a `Number`, the validator will transform the value into a number.
If this fails, the returned object contains a `false` result key value pair.

##### propTypes.isRequired
Will expect that the given key is present in either the passed props Object, the elements dataset or in the `getDefaultProps()` method.

##### propTypes.isOptional
Will log an info message into the UA's console if the given key is not present in either the passed Props-Object, the elements dataset or in the `getDefaultProps()` method.

##### propTypes.isString.isRequired
Like the basic `propTypes.isRequired` validator, but it also expects that the value is a `String`.

##### propTypes.isString.isOptional
Like the basic `propTypes.isOptional` validator, but will also expect a `String` as the value.

##### propTypes.isBoolean.isRequired
Like the basic `propTypes.isRequired` validator, but it also expects that the value is either a `Boolean`, or a `String` containing a `Boolean`.

##### propTypes.isBoolean.isOptional
Like the basic `propTypes.isOptional` validator, but will also expect a `Boolean` as the value.

##### propTypes.isNumber.isRequired
Like the basic `propTypes.isRequired` validator, but it also expects that the value is either a `Number`, or a `String` containing a `Number`.

##### propTypes.isNumber.isOptional
Like the basic `propTypes.isOptional` validator, but will also expect a `Number` as the value.

##### propTypes.isObject.isRequired
Like the basic `propTypes.isRequired` validator, but it also expects that the value is either a valid `Object`, or a `String` containing a JSON `Object`.

##### propTypes.isObject.isOptional
Like the basic `propTypes.isOptional` validator, but will also expect a `Object` as the value.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.


## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
