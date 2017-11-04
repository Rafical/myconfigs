module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true,
        "shared-node-browser": true
    },
    "plugins": [
        "import"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        // Syntax & Logic
        "no-extra-parens": "warn",
        "no-extra-semi": "error",
        "no-irregular-whitespace": ["error", {
            "skipStrings": true,
            "skipComments": true,
            "skipTemplates": true
        }],
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        
        // Best Practices
        "array-callback-return": "warn",
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-eval": "error",
        "no-floating-decimal": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "warn",
        "no-multi-spaces": "error",
        "no-multi-str": "warn",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-param-reassign": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-warning-comments": "warn",
        "radix": "warn",
        "require-await": "warn",
        "wrap-iife": "error",
        "yoda": ["error", "never"],

        // Variables
        "no-delete-var": "warn",
        "no-label-var": "warn",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unused-vars": "error",
        //"no-use-before-define": "warn",
        
        // Node.js
        "callback-return": "warn",
        "import/first": "error",
        "handle-callback-err": "warn",
        "no-buffer-constructor": "warn",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "warn",
        
        // Style Guidelines
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": "error",
        "capitalized-comments": "warn",
        "comma-dangle": ["warn", "never"],
        "comma-style": ["error", "last"],
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "warn",
        //"func-names": "warn",
        //"func-style": "warn",
        "indent": ["error", 2],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "lines-around-comment": ["warn", {
            "beforeBlockComment": true, 
            //"beforeLineComment": true
        }],
        "max-params": ["warn", 3],
        "new-cap": "warn",
        "new-parens": "error",
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 2
        }],
        "no-array-constructor": "error",
        "no-continue": "warn",
        "no-lonely-if": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "warn",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": ["warn", {
            "allowForLoopAfterthoughts": true
        }],
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": "error",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "error",
        "operator-linebreak": "error",
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": "error",
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "switch-colon-spacing": "error",
        
        // ES6/ES2015
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": ["error", {
            "before": false, 
            "after": true
        }],
        "no-class-assign": "error",
        "no-confusing-arrow": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "import/no-mutable-exports": "error",
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "warn",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "warn",
        "rest-spread-spacing": "error",
        "sort-imports": "error",
        "template-curly-spacing": ["error", "never"],
        "yield-star-spacing": "error",
    }
};
