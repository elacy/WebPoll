using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebPoll.Web.Models.Accounts;

namespace WebPoll.Web.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        public ActionResult Login(LoginViewModel login)
        {
            return Json(true);
        }

    }
}