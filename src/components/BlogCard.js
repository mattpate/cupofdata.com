import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import _ from 'lodash'
import { Container, Row, Col } from '../components/Layout'

const Card = styled.div`
  display: block;
  text-decoration: none;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 780px;
  margin: 1rem auto;
  cursor: default;
`

const BlogContainer = Container.extend`
  height: 100%;
  box-sizing: border-box;
`

const BlogRow = Row.extend`
  height: 100%;
  align-items: center;
`

const Topic = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-family: GTWalsheim;
  margin-top: 30px;
`

const TimeStamp = styled.h5`
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.2);
`

const Summary = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  text-overflow: ellipsis;
  height: 130px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

const TagsView = styled.div`
  width: 100%;
  margin-top: 20px;
`

const TagCard = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #f7901d;
  cursor: pointer;
  display: inline-block;
`

const ReadMore = styled(Link)`
  color: #4ab1f4;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  text-decoration: none;
`

const BlogCard = ({ post }) => {
  return (
    <Card>
      <BlogContainer>
        <BlogRow>
          <Col xs="12" sm="12">
            <TagsView>
              {post.frontmatter.tags.map((tag, i) => (
                <TagCard key={i} to={`/blog/tags/${_.kebabCase(tag)}`}>
                  {tag}
                </TagCard>
              ))}
            </TagsView>
          </Col>
          <Col xs="12" sm="7">
            <Topic>{post.frontmatter.title}</Topic>
            <TimeStamp>
              {post.frontmatter.author} on {post.frontmatter.date}
            </TimeStamp>
            <Summary>{post.frontmatter.summary}</Summary>
          </Col>
          <Col xs="12" sm="5">
            <img src={post.frontmatter.postimage} width="100%" />
          </Col>
          <Col xs="12" sm="12">
            <ReadMore to={post.frontmatter.path}>Read more</ReadMore>
          </Col>
        </BlogRow>
      </BlogContainer>
    </Card>
  )
}
export default BlogCard
