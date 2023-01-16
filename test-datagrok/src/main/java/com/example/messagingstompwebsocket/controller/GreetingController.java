package com.example.messagingstompwebsocket.controller;
import com.example.messagingstompwebsocket.bean.Greeting;
import com.example.messagingstompwebsocket.bean.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

  @MessageMapping("/hello")
  @SendTo("/topic/greetings") public Greeting greeting(Message message)
  {
    return new Greeting(
            HtmlUtils.htmlEscape(message.getUsername()) + ": " + HtmlUtils.htmlEscape(message.getTextMessage()));
  }

}
