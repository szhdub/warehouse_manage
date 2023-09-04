package com.pn;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//mapper接口扫描器，指明mapper接口所在包,
@MapperScan(basePackages = "com.pn.mapper")
@SpringBootApplication
public class WarehouseManageApplication {

    public static void main(String[] args) {
        SpringApplication.run(WarehouseManageApplication.class, args);
    }

}
