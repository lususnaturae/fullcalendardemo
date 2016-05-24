package edu.uta.sis.calendars.web;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Hannu Lohtander on 13.3.2016.
 */
@Controller
public class CalendarController {

    Logger logger = Logger.getLogger(this.getClass().getName());

    @RequestMapping(value = {"/calendar"})
    public String calendar(Model model) {

        return "/calendar/calendar";
    }

}
