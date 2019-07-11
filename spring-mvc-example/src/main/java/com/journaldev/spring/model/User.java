package com.journaldev.spring.model;

import java.io.Serializable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class User implements Serializable {
	private static final long serialVersionUID = 2557725707095364445L;
	
	@NotNull // (1)
    @Size(min = 1, max = 5) // (2)
    private String userName;
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
