/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package guessNumber;

import java.io.Serializable;
import java.util.Random;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

/**
 *
 * @author it353f716
 */
@ManagedBean (name= "UserNumberBean")
@SessionScoped
public class UserNumberdBean implements Serializable {
    Integer randomInt;
    String response;
    public Integer getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(Integer userNumber) {
        this.userNumber = userNumber;
    }
    Integer userNumber;
    /**
     * Creates a new instance of UserNumberdBean
     */
    public UserNumberdBean() {
        Random randomGR = new Random();
        randomInt = new Integer(randomGR.nextInt(10)); 
        //generate a number between 0-10
    }
    
     public String getResponse() {
    if ((userNumber != null) && (userNumber.compareTo(randomInt) == 0)) {

        //invalidate user session
        FacesContext context = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) context.getExternalContext().getSession(false);
        session.invalidate();

        return "Yay! You got it!";
    } else {

        return "<p>Sorry, " + userNumber + " isn't it.</p>"
                + "<p>Guess again...</p>";
    }
}

    
}
