import { Server } from 'miragejs'
import { sizes, flavors, customizations } from './data'

export function makeServer(environment = 'development') {

   return new Server({

      environment,

      routes() {

         this.namespace = 'api/v1'

         this.get('sizes', () => {

            return sizes
         })

         this.get('flavors', () => {
            return flavors
         })

         this.get('customizations', () => {
            return customizations
         })
      }

   })


}