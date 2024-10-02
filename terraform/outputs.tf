output "cluster_endpoint" {
  value = aws_eks_cluster.k8s.endpoint
}

output "db_endpoint" {
  value = aws_rds_instance.db.endpoint
}
