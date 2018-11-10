package com.outputstream;

import java.io.ByteArrayInputStream;

public class ByteArrayInputStreamHandling {
	public static void main(String args[]){
		byte[] buf={'A','B','C','D'};
		byte[] buf1={10,11,12,13};
		ByteArrayInputStream bis=new ByteArrayInputStream(buf);
		int i=0;
		while((i=bis.read())!=-1){
			System.out.println("Values:"+i);
		}
	}

}
