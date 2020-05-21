# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :comments
- has_many :groups
- has_many :mid

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|text|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_ker:true|
### Association
- belongs_to: user
- belongs_to: group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|integer|null: false|
|groupname|integer|null: false|
### Association
- has_many: users

## midテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups