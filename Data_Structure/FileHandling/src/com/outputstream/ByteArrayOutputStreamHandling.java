package com.outputstream;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ByteArrayOutputStreamHandling {
	public static void main(String args[]){
		try {
			FileOutputStream fout1=new FileOutputStream("E:\\JavaFileHandlingOperations\\ByteArrayOutput1.txt");
			FileOutputStream fout2=new FileOutputStream("E:\\JavaFileHandlingOperations\\ByteArrayOutput2.txt");
			ByteArrayOutputStream bout=new ByteArrayOutputStream();
			bout.write((char)65);
			bout.writeTo(fout1);
			bout.writeTo(fout2);
			bout.flush();
			bout.close();
			System.out.println("success..");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
