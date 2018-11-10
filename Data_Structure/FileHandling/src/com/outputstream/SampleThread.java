package com.outputstream;

public class SampleThread extends Thread{
	/*public void run(){
		new FileHandlingInputStream().runingMethod();
		new FileHandlingInputStream().runingMethod();
		
	}*/
	
	public static void main(String args[]){
		
		long startTime=System.currentTimeMillis();
				
		
		Thread t1=new Thread(new FileHandlingOutputStream(),"Thread-1");
		Thread t2=new Thread(new FileHandlingInputStream(),"Thrad-2");
		
		t1.start();
		t2.start();
		
		//new FileHandlingOutputStream().run();
		//new FileHandlingInputStream().run();
		long endTime=System.currentTimeMillis();
		System.out.println("Execution mail thread:"+(endTime-startTime));
		
		
	}
}
