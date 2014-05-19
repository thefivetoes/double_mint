define('appkit/templates/accounts', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<div class=\"left-column accounts\">\n  <h3>Accounts</h3>\n  <ul class='account-list'>\n    <li>My Account - $500</li>\n    <li>My Other Account - $200</li>\n\n  </ul>\n</div>\n\n<div class=\"right-column data\">\n  {{ outlet }}\n</div>\n"); });

define('appkit/templates/accounts/index', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h2>Pick Your Account From The Right</h2>\n"); });

define('appkit/templates/accounts/transactions', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h2>Transactions</h2>\n\n<div class=\"transactions\">\n  <table>\n    <thead>\n      <tr>\n        <td class=\"transactions-date\">Date</td>\n        <td class=\"transactions-description\">Description</td>\n        <td class=\"transactions-category\">Category</td>\n        <td class=\"transactions-amount\">Amount</td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Mon March 15 2014</td>\n        <td>My Transaction</td>\n        <td></td>\n        <td>Amount</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"); });

define('appkit/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<div class=\"header\">\n  <div class=\"title\">Double Mint</div>\n</div>\n<div class=\"container content\">\n  {{outlet}}\n</div>\n"); });

define('appkit/templates/component-test', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("{{#each}}\n  {{pretty-color name=this}}\n{{/each}}\n"); });

define('appkit/templates/components/pretty-color', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("Pretty Color: {{name}}\n"); });

define('appkit/templates/error', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Sorry, Something went wrong</h1>\n{{message}}\n<pre>\n{{stack}}\n</pre>\n"); });

define('appkit/templates/helper-test', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h3>My name is {{reverse-word name}}.</h3>\n"); });

define('appkit/templates/index', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<ul>\n{{#each}}\n  <li>{{this}}</li>\n{{/each}}\n</ul>\n"); });

define('appkit/templates/loading', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Loading...</h1>\n"); });