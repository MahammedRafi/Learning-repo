import java.util.*;
public class GCExample{
	ArrayList<Integer> list = new ArrayList();
	 
	public static void main(String args[])
	{
		new GCExample().runMethod();
	}
	public void runMethod(){	
	int i=0;
		while(true){
			Random rand = new Random();
			list.add(rand.nextInt(1000000000));
			System.out.println("running count:"+i+" Random number:"+list.toString());
			
			i++;
			try{
			//Thread.sleep(500);
			}catch(Exception e){
				System.out.println("Interruption exceptions"+e.getMessage());
			}
		}
	}
}