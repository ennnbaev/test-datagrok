package com.example.messagingstompwebsocket.bean;

public class Message
{

  private String textMessage;
  private String username;

  public Message() {
  }

  public Message(String textMessage, String username)
  {
    this.textMessage = textMessage;
    this.username = username;
  }

  public String getTextMessage() {
    return textMessage;
  }

  public void setTextMessage(String textMessage) {
    this.textMessage = textMessage;
  }

  public String getUsername()
  {
    return username;
  }

  public void setUsername(String username)
  {
    this.username = username;
  }
}
