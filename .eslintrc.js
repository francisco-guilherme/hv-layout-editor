module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        moduleDirectory: ["node_modules", "src"]
      }
    }
  },
  rules: {
    "linebreak-style": "off", // Don't play nicely with Windows.
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "react/prop-types": 1,
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off"
  }
};
