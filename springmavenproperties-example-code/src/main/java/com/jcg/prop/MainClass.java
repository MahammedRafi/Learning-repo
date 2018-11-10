package com.jcg.prop;

public class MainClass {
	public static void main(String args[]) {
		DatabaseProperties db = new DatabaseProperties();
		db.init();
		System.out.println(db.toString());
	}
}
