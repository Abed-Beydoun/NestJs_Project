import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/models/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/models/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createPost(post: CreatePostDto): Promise<Post> {
    const { userId, body } = post;

    const userExist = await this.userModel.find({ userId });

    if (!userExist) {
      throw new NotFoundException("User doesn't exist");
    }

    const newPost = this.postRepo.create({ userId, body });

    const savedPost = await this.postRepo.save(newPost);

    return savedPost;
  }

  async getAllPosts() {
    return await this.postRepo.find();
  }
}
