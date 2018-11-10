package com.excelRead;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Intersect1 {

	public static void main(String[] args){
		
		try{
		String fpath = "E:\\jars\\Sample.xlsx";
		FileInputStream excelFile = new FileInputStream(new File(fpath));

		List<Long> sheet1List = new ArrayList<Long>();
		List<Long> sheet2List = new ArrayList<Long>();
		List<Long> tmpList;
		// List<Long> sheet3List = new ArrayList<Long>();

		Workbook workbook =new XSSFWorkbook(excelFile);
		Sheet firstSheet = workbook.getSheetAt(0);
		

		Iterator<Row> iterator = firstSheet.iterator();
		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();

			while (cellIterator.hasNext()) {
				Cell cell = cellIterator.next();

				switch (cell.getCellType()) {

				case Cell.CELL_TYPE_NUMERIC:
					sheet1List.add((long) cell.getNumericCellValue());
					// System.out.print(cell.getNumericCellValue());
					break;
				}
			}
		}

		Sheet secondSheet = workbook.getSheetAt(1);

		Iterator<Row> iterator2 = secondSheet.iterator();

		while (iterator2.hasNext()) {
			Row nextRow = iterator2.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();

			while (cellIterator.hasNext()) {
				Cell cell = cellIterator.next();

				switch (cell.getCellType()) {

				case Cell.CELL_TYPE_NUMERIC:
					sheet2List.add((long) cell.getNumericCellValue());
					// System.out.print(cell.getNumericCellValue());
					break;
				}
			}
		}

		System.out.println("Sheet1List size :" + sheet1List.size()+" and values:"+sheet1List);
		System.out.println("Sheet2List size:" + sheet2List.size() + " and values :"+sheet2List);

		// collecting common values
		// sheet2List.retainAll(sheet1List);
		// sheet3List=sheet2List;
		// long size = sheet3List.size();
		// for(long i=0;i<size;i++)
		// {

		// System.out.println(sheet3List.get((int) i));
		// }
		tmpList=new ArrayList<Long>(sheet2List);
		System.out.println("Tmp memory:"+tmpList.hashCode()+"Tmp list size:"+sheet2List.size()+" and values :"+sheet2List);
		tmpList.retainAll(sheet1List);
		System.out.println("tmp memory reference:"+tmpList.hashCode()+"CommonData in two Lists: size" + tmpList.size()+" and values:"+tmpList);
		System.out.println("Sheet2 memory"+sheet2List.hashCode()+"sheet2 list size:"+sheet2List.size()+" and values :"+sheet2List);
		}
		catch(Exception e){
			e.printStackTrace();
		}

	}
}
