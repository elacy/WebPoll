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

        public ActionResult Index()
        {
            return View();
        }

    }
}
