'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
  ],

  scopes: [
    {name: 'git'},
    {name: 'graphql'},
    {name: 'mobile'},
    {name: 'frontend'},
    {name: 'bugs'},
    {name: 'auth'},
    {name: 'soft-skill'},
    {name: 'algorithm'}
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
