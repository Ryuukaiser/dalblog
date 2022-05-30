import React from 'react'

export const Team = () => {
  return (
    <section className='about__team'>
            <div className='container'> 
              <div className='team__present'>
                      <div className='present__title'>
                         <label> Giới Thiệu về Dal team</label>
                      </div>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       Vestibulum sed risus pretium, accumsan sem nec, dignissim nisl. 
                       Vestibulum varius velit id ipsum commodo viverra. Proin in elit mattis, luctus arcu vulputate, eleifend lectus. Cras ornare ipsum diam, eu auctor justo dapibus sed. Nunc mauris nibh, ultricies a tempus pellentesque, vulputate at lorem. Sed vel enim purus. Pellentesque ut lorem sit amet ante scelerisque viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut cursus interdum ex nec tempor. Nullam lacinia vestibulum urna in mollis. Orci varius natoque penatibus et magnis dis parturient montes,
                       nascetur ridiculus mus.
                      </p>
              </div>
              <div className=' team__member'>
                  <div className=' BA-team'>
                           <div className="team__name team--ba">
                              <p> Leader </p>
                             </div>
                            <div className='team__infor '>
                               <div className="member__info">
                                <img src="/images/nguyen.jpg"/>
                                <p>Biện Trung Nguyên</p>
                            </div>
                            </div>
                  </div>
                  <div className='Dev-team'>
                            <div className="team__name team--dev">
                                <p> Team Dev</p>
                            </div>
                            <div className="team__infor">
                                <div className="member__info">
                                        <img src="/images/vu.jpg"/>
                                        <p>Nguyễn Hoàng Vũ</p>
                                  </div>
                                  <div className="member__info">
                                      <img src="/images/member.jpg"/>
                                        <p>Hồ Diệc Phi</p>
                                  </div>
                                  <div className="member__info">
                                      <img src="/images/member.jpg"/>
                                      <p>Đặng Công Chiến</p>

                                    </div>
                                    <div className="member__info">
                                      <img src="/images/member.jpg" />
                                      <p>Phạm Thế Mạnh</p>
                                  </div>
                              </div>
                  </div>
                  <div className='Tester-team'>
                        <div className="team__name team--qc">
                            <p> Team QC </p>
                            </div>
                        <div className="team__infor">
                            <div className="member__info">
                                  <img src="/images/viet.jpg" />
                                  <p>Ông Hoàng Quốc Việt</p>
                            </div>
                            <div className="member__info">
                                  <img src="/images/khoa.jpg"/>
                                  <p>Khoa</p>
                              </div>
                              <div className="member__info">
                                    <img src="/images/long.jpg" />
                                    <p>Lê Phi Long</p>
                              </div>
                              <div className="member__info">
                                  <img src="/images/linh.jpg" />
                                      <p>Khánh Linh</p>
                                </div>                  
                        </div>
                    </div>
              </div>
              </div>


    </section>
  )
}
