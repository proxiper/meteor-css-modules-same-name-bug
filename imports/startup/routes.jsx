import { FlowRouter } from 'meteor/kadira:flow-router-ssr'
import { mount } from 'react-mounter'
import { App } from '../ui/app/app.jsx'

FlowRouter.route('/', {
  action: () => mount(App),
})
