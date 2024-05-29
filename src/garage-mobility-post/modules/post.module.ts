import { match, P } from 'ts-pattern';

import { triggerSuccessFailureHooks } from '../../garage-mobility-shared/triggerHooks';
import { Post} from '../types';
import { CreatePostPipe, DeletePostPipe, GetAllPostsPipe, GetSinglePostByIDPipe, UpdatePostPipe } from '../pipes';


export const PostModule = ({ DTO, onSuccess }: Post) =>
  match(DTO)
  .with(['basic', P._], async ([, CreatePostDTO]) => {
    const postPipe = await CreatePostPipe(CreatePostDTO);
      triggerSuccessFailureHooks(postPipe, onSuccess);
      return postPipe;
    })
  .with(['update', P._], async ([, UpdatePostDTO]) => {
    const postPipe = await UpdatePostPipe(UpdatePostDTO);
      triggerSuccessFailureHooks(postPipe, onSuccess);
      return postPipe;
    })
  .with(['single', P._], async ([, GetSinglePostDTO]) => {
    const postPipe = await GetSinglePostByIDPipe(GetSinglePostDTO);
      triggerSuccessFailureHooks(postPipe, onSuccess);
      return postPipe;
    })
  .with(['all'], async () => {
    const postPipe = await GetAllPostsPipe();
      triggerSuccessFailureHooks(postPipe, onSuccess);
      return postPipe;
    })
  .with(['delete', P._], async ([, DeletePostDTO]) => {
    const postPipe = await DeletePostPipe(DeletePostDTO);
      triggerSuccessFailureHooks(postPipe, onSuccess);
      return postPipe;
    })
    .exhaustive();
