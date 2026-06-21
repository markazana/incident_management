const cds = require("@sap/cds")

class ProcessorService extends cds.ApplicationService {
  init() {

    //changeUrgencyDueToSubject 
    this.before("CREATE", "Incidents", async request => {
      const incident = request.data;
      if (incident.title?.toLowerCase().includes("urgent")) {
            incident.urgency = { 
              code: "H",
              descr: "high"
            };
      }
    })

    //onUpdate
    this.before("UPDATE", "Incidents", async request => {
      const { status_code } = await SELECT.one(request.subject, i => i.status_code).where({ID: request.data.ID})
      if (status_code === 'C')
          return request.reject(400, `Can't modify a closed incident`)
      
      const incident = request.data;
      if (incident.title?.toLowerCase().includes("urgent")) {
            incident.urgency = { 
              code: "H",
              descr: "high"
            };
      }
    })

    return super.init()
  }
}

module.exports = ProcessorService