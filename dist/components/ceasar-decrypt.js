'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CeasarDecrypt = function (_React$Component) {
    _inherits(CeasarDecrypt, _React$Component);

    function CeasarDecrypt(props) {
        _classCallCheck(this, CeasarDecrypt);

        var _this = _possibleConstructorReturn(this, (CeasarDecrypt.__proto__ || Object.getPrototypeOf(CeasarDecrypt)).call(this, props));

        _this.state = {
            alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            activeShift: 1,
            sentence: '',
            result: ''
        };
        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.encrypt = _this.encrypt.bind(_this);
        return _this;
    }

    _createClass(CeasarDecrypt, [{
        key: 'handleInput',
        value: function handleInput(event) {
            console.log(event);
            this.setState({
                sentence: event.target.value
            });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(event) {
            this.setState({
                activeShift: event.target.value
            });
        }
    }, {
        key: 'encrypt',
        value: function encrypt(event) {
            var loopAlphabet = function loopAlphabet(counter, shift, alphabet) {
                if (counter + shift < alphabet.length) {
                    return alphabet[counter + shift];
                } else {
                    return alphabet[counter + shift - alphabet.length];
                }
            };
            event.preventDefault();
            var sentence = this.state.sentence.toLocaleLowerCase();
            var shift = +this.state.activeShift;
            var alphabet = this.state.alphabet;

            var sentenceArray = sentence.split('');
            var result = [];
            console.log(sentenceArray);
            for (var i = 0; i < sentenceArray.length; i++) {
                for (var j = 0; j < alphabet.length; j++) {
                    if (sentenceArray[i] == alphabet[j]) {
                        result.push(loopAlphabet(j, shift, alphabet));
                        break;
                    } else {
                        if (alphabet.length - 1 == j) {
                            result.push(sentenceArray[i]);
                        }
                    }
                }
            }

            this.setState({
                result: result.toString().replace(/,/g, "")
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.encrypt },
                    _react2.default.createElement('textarea', { row: '5', value: this.state.sentence, onChange: this.handleInput, className: 'input', placeholder: 'Enter sentence to encrypt' }),
                    _react2.default.createElement(
                        'select',
                        { onChange: this.handleSelect },
                        this.state.alphabet.map(function (letter, i) {
                            return _react2.default.createElement(
                                'option',
                                null,
                                ' ',
                                i + 1,
                                ' '
                            );
                        })
                    ),
                    _react2.default.createElement('input', { type: 'submit', value: 'Submit', className: 'btn-submit' }),
                    _react2.default.createElement('textarea', { row: '5', value: this.state.result, className: 'input', placeholder: 'Result will be here' })
                )
            );
        }
    }]);

    return CeasarDecrypt;
}(_react2.default.Component);

exports.default = CeasarDecrypt;