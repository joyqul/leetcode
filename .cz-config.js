module.exports = {
  types: [
    { value: 'problem', name: 'problem: A new solution to problem' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'build', name: 'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' }
  ],

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
};
