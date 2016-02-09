# @reduct/nitpick
[![Build Status](https://travis-ci.org/reduct/nitpick.svg)](https://travis-ci.org/reduct/nitpick) [![Dependency Status](https://david-dm.org/reduct/nitpick.svg)](https://david-dm.org/reduct/nitpick) [![devDependency Status](https://david-dm.org/reduct/nitpick/dev-status.svg)](https://david-dm.org/reduct/nitpick#info=devDependencies) [![Code Climate](https://codeclimate.com/github/reduct/nitpick/badges/gpa.svg)](https://codeclimate.com/github/reduct/nitpick) [![Test Coverage](https://codeclimate.com/github/reduct/nitpick/badges/coverage.svg)](https://codeclimate.com/github/reduct/nitpick/coverage)

> Type validators for the @reduct/component package.


## Validators
The validators will, as the name states, validate as well as optionally transform the values into the requested types.

F.e. if you expect a `Number`and the user passes in a `String` containing a `Number`, the validator will transform the value into a number. If the validation/transformation fails, the validator returns an Error object with a detailed message you can then `throw`.

##### propTypes.any.isRequired
Will expect that the passed value is not `undefined` or `null`, and returns an `Error` if the validation has failed.

##### propTypes.any.isOptional
Will expect that the passed value is not `undefined` or `null`, and always returns an object containing `result` and `value` key/value pairs.

##### propTypes.string.isRequired
Inherits the behavior of `propTypes.any.isRequired`, but it expects that the value is a `String`.

##### propTypes.string.isOptional
Inherits the behavior of `propTypes.any.isOptional`, but it expects that the value is a `String`.

##### propTypes.bool.isRequired
Inherits the behavior of `propTypes.any.isRequired`, but it expects that the value is either a `Boolean` or a `String` which can be converted to a `Boolean`.

##### propTypes.bool.isOptional
Inherits the behavior of `propTypes.any.isOptional`, but it expects that the value is either a `Boolean` or a `String` which can be converted to a `Boolean`.

##### propTypes.number.isRequired
Inherits the behavior of `propTypes.any.isRequired`, but it expects that the value is either a `Number` or a `String` containing a `Number`.

##### propTypes.number.isOptional
Inherits the behavior of `propTypes.any.isOptional`, but it expects that the value is either a `Number` or a `String` containing a `Number`.

##### propTypes.object.isRequired
Inherits the behavior of `propTypes.any.isRequired`, but it expects that the value is either a valid `Object` or a `String` containing a JSON `Object`.

##### propTypes.object.isOptional
Inherits the behavior of `propTypes.any.isOptional`, but it expects that the value is either a valid `Object` or a `String` containing a JSON `Object`.


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
