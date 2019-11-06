import Vue from 'vue';
import Cloudinary<% if (treeshakingMode) { %>, { <%= components %> } <% } else { %><% } %> from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: '<%= cloudName %>' }<% if (treeshakingMode) { %>,
    components: [ <%= components %> ]<% } %>
})