-- MySQL Script generated by MySQL Workbench
-- Fri Jul 16 22:34:24 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`customer` ;

CREATE TABLE IF NOT EXISTS `mydb`.`customer` (
  `idCustomer` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(60) NULL,
  `phone` INT NULL,
  `role` BINARY NULL,
  PRIMARY KEY (`idCustomer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`product` ;

CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  `prince` INT NULL,
  `numProduct` INT NULL,
  `images` VARCHAR(45) NULL,
  PRIMARY KEY (`idProduct`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orders` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `idOrder` INT NOT NULL AUTO_INCREMENT,
  `orderDate` DATE NULL,
  `shippedDate` DATE NULL,
  `status` VARCHAR(45) NULL,
  `idCustomer` INT NULL,
  `idPayment` INT NULL,
  `customer_idCustomer` INT NOT NULL,
  PRIMARY KEY (`idOrder`),
  INDEX `fk_order_customer1_idx` (`customer_idCustomer` ASC) VISIBLE,
  CONSTRAINT `fk_order_customer1`
    FOREIGN KEY (`customer_idCustomer`)
    REFERENCES `mydb`.`customer` (`idCustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orderDetail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orderDetail` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orderDetail` (
  `idOrder` INT NOT NULL,
  `idProduct` INT NOT NULL,
  `quantityOrder` INT NULL,
  `product_idProduct` INT NOT NULL,
  `order_idOrder` INT NOT NULL,
  PRIMARY KEY (`idOrder`, `idProduct`, `product_idProduct`, `order_idOrder`),
  INDEX `fk_orderDetail_product1_idx` (`product_idProduct` ASC) VISIBLE,
  INDEX `fk_orderDetail_order1_idx` (`order_idOrder` ASC) VISIBLE,
  CONSTRAINT `fk_orderDetail_product1`
    FOREIGN KEY (`product_idProduct`)
    REFERENCES `mydb`.`product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderDetail_order1`
    FOREIGN KEY (`order_idOrder`)
    REFERENCES `mydb`.`orders` (`idOrder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`payment` ;

CREATE TABLE IF NOT EXISTS `mydb`.`payment` (
  `idpayment` INT NOT NULL AUTO_INCREMENT,
  `idCustomer` INT NULL,
  `paymentDate` DATE NULL,
  `amount` INT NULL,
  `customer_idCustomer` INT NOT NULL,
  `order_idOrder` INT NOT NULL,
  PRIMARY KEY (`idpayment`),
  INDEX `fk_payment_customer_idx` (`customer_idCustomer` ASC) VISIBLE,
  INDEX `fk_payment_order1_idx` (`order_idOrder` ASC) VISIBLE,
  CONSTRAINT `fk_payment_customer`
    FOREIGN KEY (`customer_idCustomer`)
    REFERENCES `mydb`.`customer` (`idCustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_order1`
    FOREIGN KEY (`order_idOrder`)
    REFERENCES `mydb`.`orders` (`idOrder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
