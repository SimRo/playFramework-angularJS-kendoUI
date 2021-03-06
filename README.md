playFramework-angularJS-kendoUI
===============================

<p class="lead">
  This is a simple web app that I'm using to learn and showcase technologies of interest. A demo is running on heroku at <a href="http://angular-play-example.herokuapp.com">angular-play-example.herokuapp.com</a>.
</p>
<p>
  In my spare time I brew my own beer. In the logn term I'd like to write an application to manage this process. I am using this application as a test bed for figuring out the various formulas required and experiementing with the user interface. It is basically something meaningful to do in some new technologies that I am keen to learn.
</p>
<p>
  The front end has been built in <a href="http://angularjs.org/" target="_blank">AngularJS</a> as a <a href="http://en.wikipedia.org/wiki/Single-page_application" target="_blank">Single Page</a>, <a href="http://docs.angularjs.org/guide/dev_guide.mvc" target="_blank">MVC</a> application. The layout and theme have been implemented using <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>. 
</p>
<p>
  For now the backend is less important as I'm primarily focused on learning JavaScript and HTML5 front ends. In the long run I would like to implement the backend using something along the Spring or Jersey lines. For now I've used the <a href="http://www.playframework.com" target="_blank">Play Framework</a> as it only takes a few commands to get the entire project setup working and running and serving (and cause Play does look pretty awesome).
</p>

<h4>AngularJS</h4>

<p>
  The front end has been built without any shortcuts and taking all the necessary JavaScript design issues into account. To that regard it creates its own namespaced Module for all the JavaScript sources. The source code has been developed in the AngularJS MVC form and all the REST calls are down using the frameworks way of doing it. No shortcuts have been taken.
</p>

<h4>KendoUI</h4>

<p>
  KendoUI has been used as the component library.
</p>

<h4>Bootstrap</h4>

<p>The application uses an out-of-the-box Bootstrap configuration with the only change being that a different theme has been applied in order to get a different navbar styling.</p>

<h4>Play</h4>

<p>
  The Play server which is serving this website and providing content/data via REST JSON calls is also an out-of-the-box configuration. A few shortcuts have been taken around how it maps its routes to Controllers but given Play isn't the main focus I was happy to get it working rather than try to perfect it. Guice has been setup for dependency management/injection however the server hasn't gotten that involved yet and some Spring beans classes are included but no longer used (they were used temporarily for some nasty workarounds).
</p>
