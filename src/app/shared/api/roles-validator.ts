import { Injectable } from '@angular/core';

@Injectable()
export class RolesValidator {

    constructor() { }

    /*
      Check if the user is able to do that operation on the system
    */
    checkOperation(operation: string): boolean {
      const userRole = localStorage.getItem('role')

      if (userRole == "Administrator") {
        return true
      }

      if ((operation == "Reports") && (userRole == "Administrator")) {
        return true
      }

      if ((operation == "Vehicles") && (userRole != "Carrier")) {
        return true
      }

      if (operation == "BatchesTransport"  && userRole == "Carrier") {
        return true
      }

      if (operation == "Zones"  && userRole == "AreaOperator") {
        return true
      }

      if (operation == "Batches" && userRole == "PortOperator") {
        return true
      }

      return false
    }
}
