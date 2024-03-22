<?php 



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
require '../vendor/autoload.php';


  


class xlsxdownload{
    function getColumnLetter($columnIndex)
    {
        return chr(65 + ($columnIndex - 1));
    }

public function download_query_result($result){
 if ($result && $result->num_rows > 0) {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Set headers
        // $headers = array('sess1', 'att1');
        $headers = array_keys($result->fetch_assoc());
        $columnCount = count($headers);

        $sheet->fromArray($headers, null, 'a1');
     
        // Populate data from the database
        $row = 2;
        while ($data = $result->fetch_assoc()) {
            for ($col = 0; $col < $columnCount; $col++) {
                $value = $data[$headers[$col]];
                $cellCoordinate = $this->getColumnLetter($col + 1) . $row;
                $sheet->setCellValue($cellCoordinate, $value);
                echo "Set value '$value' in cell $cellCoordinate.<br>";
            }
            $row++;
        }

        // Save the Excel file
        $excelFilePath = '../localStorage/query_result.xlsx';
        $writer = new Xlsx($spreadsheet);
        $writer->save($excelFilePath);
    }
}
}
?>