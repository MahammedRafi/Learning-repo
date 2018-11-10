package com.outputstream;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.SequenceInputStream;

public class FileHandlingOutputStream extends Thread{
	public void run(){

	try {
		long startTime=System.currentTimeMillis();
		System.out.println("Running in Thread:"+new Thread().getName());
		InputStream is1 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is2 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is3 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is4 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));

		InputStream is5 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is6 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is7 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));
		InputStream is8 = new FileInputStream(new File("E:\\JavaFileHandlingOperations\\inteview ques.txt"));

		BufferedInputStream bis1 = new BufferedInputStream(is1);
		BufferedInputStream bis2 = new BufferedInputStream(is2);
		BufferedInputStream bis3 = new BufferedInputStream(is3);
		BufferedInputStream bis4 = new BufferedInputStream(is4);

		BufferedInputStream bis5 = new BufferedInputStream(is5);
		BufferedInputStream bis6 = new BufferedInputStream(is6);
		BufferedInputStream bis7 = new BufferedInputStream(is7);
		BufferedInputStream bis8 = new BufferedInputStream(is8);

		SequenceInputStream sis1 = new SequenceInputStream(bis1, bis3);
		SequenceInputStream sis2 = new SequenceInputStream(bis2, bis4);

		SequenceInputStream sis3 = new SequenceInputStream(bis5, bis6);
		SequenceInputStream sis4 = new SequenceInputStream(bis7, bis8);

		SequenceInputStream sis5 = new SequenceInputStream(sis1, sis2);
		SequenceInputStream sis6 = new SequenceInputStream(sis3, sis4);

		SequenceInputStream sis = new SequenceInputStream(sis5, sis6);

		System.out.println("Buffered output:" + bis1.hashCode() + ", File output:" + is1.hashCode());
		System.out.println("Buffered output:" + bis2.hashCode() + ", File output:" + is2.hashCode());
		FileOutputStream fout = new FileOutputStream("E:\\JavaFileHandlingOperations\\interview_Outstream.txt");

		System.out.println("Sequnce inpt:" + sis.hashCode());
		int i;
		while ((i = sis.read()) != -1) {
			System.out.print((char) i);
			fout.write((char) i);
		}
		long endTime = System.currentTimeMillis();
		System.out.println("Total exection time for outputstream:" + (endTime - startTime));
	} catch (FileNotFoundException fe) {
		fe.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	

}
}