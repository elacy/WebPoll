using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPoll.Web.Controllers
{
    public class PollController : Controller
    {
        //
        // GET: /Poll/

        public ActionResult Create()
        {
            return View();
        }

        public ActionResult Index(int? id)
        {
            if (!id.HasValue)
            {
                return View();
            }
            if (id.Value == 3)
            {
                return View("Results");
            }
            return View("IncompletePoll");
        }

        public ActionResult Vote(Guid guid)
        {
            return View();
        }

    }
}
