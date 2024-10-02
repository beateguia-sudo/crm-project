provider "aws" {
  region = "us-west-2"
}

resource "aws_eks_cluster" "k8s" {
  name     = "k8s-cluster"
  role_arn = var.cluster_arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}

resource "aws_rds_instance" "db" {
  allocated_storage    = 20
  engine               = "postgres"
  instance_class       = "db.t2.micro"
  name                 = "crmdb"
  username             = var.db_user
  password             = var.db_password
  parameter_group_name = "default.postgres10"
}
